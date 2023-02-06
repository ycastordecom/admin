import Mock from 'mockjs';
Mock.BaseURL = process.env.VUE_APP_BASE_URL;
import menus from './menus';
menus(Mock);
import page from './page';
page(Mock);

export default Mock;
