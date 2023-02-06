import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';
import { getProfit } from '@/api/page';
import { Profit } from '@/type/page';

//点击更多后的方法
export function more() {
  console.log('more');
}

// 按照惯例，组合式函数名以“use”开头
export function useEcharts() {
  const initEcharts = async () => {
    const earningsDom = <HTMLElement>document.getElementById('earnings');
    const earnings = echarts.init(earningsDom);
    const colorList = ['#46ea91', '#2ba0ff'];
    const xAxisData = ref<string[]>([]);
    const waterData = ref<number[]>([]);
    const profitData = ref<number[]>([]);
    const data: Profit = (await getProfit()) as Profit;

    xAxisData.value = data.xAxisData;
    waterData.value = data.waterData;
    profitData.value = data.profitData;
    const option = {
      title: {
        text: '收益统计',
        top: '5%',
        left: '5%',

        textStyle: {
          fontSize: 22,
          color: '#000',
        },
      },
      legend: {
        icon: 'circle',
        top: '5%',
        right: '50%',
        itemWidth: 6,
        itemGap: 5,
        textStyle: {
          color: '#000',
          fontSize: 16,
          padding: [3, 20, 0, 20],
        },
      },
      toolbox: {
        right: '5%',
        top: '5%',
        itemSize: 20,
        feature: {
          myTool: {
            show: true, //是否显示
            title: '更多', //鼠标悬空的提示文字
            icon: 'path://M200.753 408.251c-57.062 0-103.749 46.687-103.749 103.749s46.687 103.749 103.749 103.749S304.502 569.062 304.502 512s-46.687-103.749-103.749-103.749z m622.494 0c-57.062 0-103.749 46.687-103.749 103.749s46.687 103.749 103.749 103.749S926.996 569.062 926.996 512s-46.687-103.749-103.749-103.749z m-311.247 0c-57.062 0-103.749 46.687-103.749 103.749S454.938 615.749 512 615.749 615.749 569.062 615.749 512 569.062 408.251 512 408.251z', //这个是阿里icon svg 后 b的全部字符串
            onclick: () => {
              more();
            },
          },
        },
      },

      tooltip: {
        trigger: 'axis',
      },
      grid: {
        top: '15%',
        left: '5%',
        bottom: '10%',
        right: '5%',
      },
      xAxis: [
        {
          type: 'category',
          data: xAxisData.value,
          axisLine: {
            lineStyle: {
              color: '#33BBFF',
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            textStyle: {
              color: '#5FBBEB',
            },
            // 默认x轴字体大小
            fontSize: 12,
            // margin:文字到x轴的距离
            margin: 10,
          },
          axisPointer: {
            label: {
              // padding: [11, 5, 7],
              padding: [0, 0, 0, 0],
              // 这里的margin和axisLabel的margin要一致!
              margin: 10,
              // 移入时的字体大小
              fontSize: 12,
              backgroundColor: 'rgba(0,0,0,0)',
            },
          },
          boundaryGap: false,
        },
      ],
      yAxis: [
        {
          name: '',
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#05D5FF',
            },
          },
          axisLabel: {
            textStyle: {
              color: '#5FBBEB',
            },
          },
          splitLine: {
            show: false,
          },
        },
      ],
      series: [
        {
          name: '净利润',
          type: 'line',
          data: profitData.value,
          symbolSize: 1,
          symbol: 'circle',
          smooth: true,
          showSymbol: false,
          lineStyle: {
            width: 5,
            color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
              {
                offset: 0,
                color: '#50b0d4',
              },
              {
                offset: 1,
                color: '#50b0d4',
              },
            ]),
            shadowColor: '#5b80f7',
            shadowBlur: 2,
            shadowOffsetY: 2,
          },
          itemStyle: {
            normal: {
              color: colorList[0],
              borderColor: colorList[0],
            },
          },
        },
        {
          name: '流水',
          type: 'line',
          data: waterData.value,
          symbolSize: 1,
          symbol: 'circle',
          smooth: true,
          showSymbol: false,
          lineStyle: {
            width: 5,
            color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
              {
                offset: 0,
                color: '#5b80f7',
              },
              {
                offset: 1,
                color: '#5b80f7',
              },
            ]),
            shadowColor: '#50afd4',
            shadowBlur: 2,
            shadowOffsetY: 2,
          },
          itemStyle: {
            normal: {
              color: colorList[1],
              borderColor: colorList[1],
            },
          },
        },
      ],
    };

    earnings.setOption(option);
  };
  onMounted(() => {
    initEcharts();
  });
}

// 饼图

export function usePieChart() {
  const initEcharts = async () => {
    const earningsDom = <HTMLElement>document.getElementById('piehart');
    const earnings = echarts.init(earningsDom);
    const option = {
      title: {
        text: '支付通道分析',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: [
        {
          bottom: 30,
          icon: 'pin',
          left: 'center',
          data: ['rose 1', 'rose 2'],
          lineStyle: {},
          padding: [0, 20, 0, 20],
        },
        {
          bottom: 0,
          icon: 'pin',
          left: 'center',
          data: ['rose 3', 'rose 4'],
          lineStyle: {},
        },
      ],
      color: ['rgba(59, 218, 255, 1)', 'rgba(0, 158, 255, 1)', 'rgba(0, 115, 255, 1)', 'rgba(20, 72, 245, 1)'],
      series: [
        {
          name: 'Radius Mode',
          type: 'pie',
          radius: [50, 150],
          center: ['50%', '50%'],
          roseType: 'radius',
          itemStyle: {
            borderRadius: 5,
          },
          label: {
            show: false,
          },
          emphasis: {
            label: {
              show: true,
            },
          },
          data: [
            { value: 40, name: 'rose 1' },
            { value: 33, name: 'rose 2' },
            { value: 28, name: 'rose 3' },
            { value: 22, name: 'rose 4' },
          ],
        },
      ],
    };
    earnings.setOption(option);
  };
  onMounted(() => {
    initEcharts();
  });
}
