// https://docs.mapbox.com/mapbox-gl-js/api/markers/#popup
export default {
  props: {
    anchor: {
      type: String,
      validator: (val) => ['center', 'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(val),
    },
    className: {
      type: String,
      default: null,
    },
    closeButton: {
      type: Boolean,
      default: true,
    },
    closeOnClick: {
      type: Boolean,
      default: true,
    },
    closeOnMove: {
      type: Boolean,
      default: false,
    },
    focusAfterOpen: {
      type: Boolean,
      default: true,
    },
    maxWidth: {
      type: String,
      default: '240px',
    },
    offset: {
      type: [Number, Array, Object],
      default: null,
    },
    lngLat: {
      type: [Array, Object],
    },
    trackPointer: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    offset(n) { this.mxObject.setOffset(n); },
    maxWidth(n) { this.mxObject.setHtml(n); },
    lngLat(n) { this.mxObject.setLngLat(n); },
    trackPointer(n) { this.mxObject.trackPointer(n); },
  },
  computed: {
    events() { return ['open', 'close']; },
  },

};
