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
      if (this.map && this.mxObject) {
        this.map.removeControl(this.mxObject);
        this.map.addControl(this.mxObject, n);
      }
    },
  },
  mounted() {
    if (this.map && this.mxObject) this.map.addControl(this.mxObject, this.position);
  },
  beforeDestroy() {
    if (this.map && this.mxObject) this.map.removeControl(this.mxObject);
  },
  destroyed() {
    this.mxObject = undefined;
  },
};
