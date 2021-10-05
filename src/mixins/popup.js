// https://docs.mapbox.com/mapbox-gl-js/api/markers/#popup
export default {
  props: {
    anchor: {
      type: String,
      validator: (val) => ['center', 'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(val),
    },
    className: String,
    closeButton: {
      type: Boolean,
      default: undefined,
    },
    closeOnClick: {
      type: Boolean,
      default: undefined,
    },
    closeOnMove: {
      type: Boolean,
      default: undefined,
    },
    focusAfterOpen: {
      type: Boolean,
      default: undefined,
    },
    maxWidth: String,
    offset: [Number, Array, Object],
    lngLat: [Array, Object],
    trackPointer: {
      type: Boolean,
      default: undefined,
    },
  },
  watch: {
    offset(n) { this.mxObject.setOffset(n); },
    maxWidth(n) { this.mxObject.setHtml(n); },
    lngLat(n) { this.mxObject.setLngLat(n); },
    trackPointer(n) { this.mxObject.trackPointer(n); },
  },
};
