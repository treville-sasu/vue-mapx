// https://docs.mapbox.com/mapbox-gl-js/api/markers/#marker-parameters
export default {
  props: {
    lngLat: {
      type: [Array, Object],
      required: true,
    },
    popup: [Object, Boolean],
    element: HTMLElement,
    offset: {
      type: [Object, Array],
    },
    anchor: {
      type: String,
      validator: (val) => ['center', 'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(val),
    },
    color: String,
    scale: Number,
    draggable: {
      type: Boolean,
      default: undefined,
    },
    rotation: Number,
    pitchAlignment: {
      type: String,
      validator: (v) => ['auto', 'viewport', 'map'].includes(v),
    },
    rotationAlignment: {
      type: String,
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
};
