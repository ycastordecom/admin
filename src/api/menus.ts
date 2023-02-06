import http from './request';

export const getMenus = () => {
  return http.request({
    url: '/menus',
  });
};
