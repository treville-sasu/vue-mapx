export default {
  install: (Vue, constructor) => {
    Vue.prototype.$mapx = constructor;
  }
}