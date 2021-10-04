// https://docs.mapbox.com/mapbox-gl-js/api/markers/#marker-parameters
export default {
  props: {

    lngLat: {
      type: [Array, Object],
      required: true,
    },
    popup: {
      type: [Object, Boolean],
      default: false,
    },
    element: {
      type: HTMLElement,
      default: null,
    },
    offset: {
      type: [Object, Array],
      default: null,
    },
    anchor: {
      type: String,
      validator: (val) => ['center', 'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(val),
    },
    color: {
      type: String,
      default: null,
    },
    scale: {
      type: Number,
      default: 1,
    },
    draggable: {
      type: Boolean,
      default: false,
    },
    rotation: {
      type: Number,
      default: 0,
    },
    pitchAlignment: {
      type: String,
      default: 'auto',
      validator: (v) => ['auto', 'viewport', 'map'].includes(v),
    },
    rotationAlignment: {
      type: String,
      default: 'auto',
      validator: (v) => ['auto', 'viewport', 'map'].includes(v),
    },
  },
  watch: {
    lngLat(n) { this.mxObject.setLngLat(n); },
    popup(n) { this.mxObject.setPopup(n); },
    offset(n) { this.mxObject.setOffset(n); },
    draggable(n) { this.mxObject.setDraggable(n); },
    rotationAlignment(n) { this.mxObject.setRotationAlignment(n); },
    pitchAlignment(n) { this.mxObject.setPitchAlignment(n); },
  },
  computed: {
    events() { return ['dragstart', 'drag', 'dragend']; },
  },

};
