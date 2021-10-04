// https://docs.mapbox.com/mapbox-gl-js/api/markers/#scalecontrol
export default {
  props: {
    unit: {
      type: String,
      validator: (val) => ['imperial', 'metric', 'nautical'].includes(val),
    },
    maxWidth: Number,
  },
  watch: {
    unit(n) { this.mapObject.setUnit(n); },
  },
};
