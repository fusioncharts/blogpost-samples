
window.loadApp = function (data) {
  Vue.use(VueFusionCharts);

  const app = new Vue({
    el: '#app',
    data: {
      type: 'mscolumn2d',
      width: '100%',
      height: '400',
      dataFormat: 'json',
      dataSource: data
    }
  });
};
