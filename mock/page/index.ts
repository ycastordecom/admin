export default (Mock) => {
  Mock.mock(Mock.BaseURL + '/getBalance', 'get', {
    code: 200,
    data: {
      balance: 100000.0,
      data: [
        {
          id: 0,
          income: 6321,
          pens: 10,
          sell: 10,
        },
        {
          id: 1,
          income: 1289,
          pens: 10,
          sell: 10,
        },
        {
          id: 2,
          income: 6321,
          pens: 10,
          sell: 10,
        },
      ],
    },
  });
  Mock.mock(Mock.BaseURL + '/getProfit', 'get', {
    code: 200,
    data: {
      xAxisData: ['2022.08.02', '2022.08.02', '2022.08.02', '2022.08.02', '2022.08.02', '2022.08.02', '2022.08.02', '2022.08.02'],
      waterData: [0.2, 0.3, 0.5, 0.2, 0.9, 0.5, 0.6, 0.5],
      profitData: [0.2, 0.5, 0.3, 0.2, 0.5, 0.6, 0.5, 0.7],
    },
  });
};
