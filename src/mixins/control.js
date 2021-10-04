// https://docs.mapbox.com/mapbox-gl-js/api/map/#map#addcontrol
export default {
  props: {
    position: {
      type: String,
      validator: (v) => ['top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(v),
    },
  },
  watch: {
    position(n) {
      this.map.removeControl(this.mxObject);
      this.map.addControl(this.mxObject, n);
    },
  },
  mounted() {
    this.map.addControl(this.mxObject, this.position);
  },
  beforeDestroy() {
    this.map.removeControl(this.mxObject);
  },
  destroyed() {
    this.mxObject = undefined;
  },
};
