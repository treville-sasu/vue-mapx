// https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters
export default {
  props: {
    container: {
      type: [String, HTMLElement],
    },
    minZoom: Number,
    maxZoom: Number,
    minPitch: Number,
    maxPitch: Number,
    // using 'mapStyle' for 'style' because it's a reserved word.
    mapStyle: {
      type: [String, Object],
      required: true,
    },
    hash: {
      type: [Boolean, String],
      default: undefined,
    },
    interactive: {
      type: Boolean,
      default: undefined,
    },
    bearingSnap: Number,
    pitchWithRotate: {
      type: Boolean,
      default: undefined,
    },
    clickTolerance: Number,
    attributionControl: {
      type: Boolean,
      default: undefined,
    },
    customAttribution: [String, Array],
    logoPosition: {
      type: String,
      validator: (v) => ['top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(v),
    },
    failIfMajorPerformanceCaveat: {
      type: Boolean,
      default: undefined,
    },
    preserveDrawingBuffer: {
      type: Boolean,
      default: undefined,
    },
    antialias: {
      type: Boolean,
      default: undefined,
    },
    refreshExpiredTiles: {
      type: Boolean,
      default: undefined,
    },
    maxBounds: [Array, Object],
    scrollZoom: {
      type: [Boolean, Object],
      default: undefined,
    },
    boxZoom: {
      type: Boolean,
      default: undefined,
    },
    dragRotate: {
      type: Boolean,
      default: undefined,
    },
    dragPan: {
      type: Boolean,
      default: undefined,
    },
    keyboard: {
      type: Boolean,
      default: undefined,
    },
    doubleClickZoom: {
      type: Boolean,
      default: undefined,
    },
    touchZoomRotate: {
      type: [Boolean, Object],
      default: undefined,
    },
    touchPitch: {
      type: [Boolean, Object],
      default: undefined,
    },
    trackResize: {
      type: Boolean,
      default: undefined,
    },
    center: [Object, Array],
    zoom: Number,
    bearing: Number,
    pitch: Number,
    bounds: [Object, Array],
    fitBoundsOptions: Object,
    renderWorldCopies: {
      type: Boolean,
      default: undefined,
    },
    maxTileCacheSize: Number,
    localIdeographFontFamily: String,
    transformRequest: Function,
    collectResourceTiming: {
      type: Boolean,
      default: undefined,
    },
    fadeDuration: Number,
    crossSourceCollisions: {
      type: Boolean,
      default: undefined,
    },
    accessToken: String,
    locale: Object,
    testMode: {
      type: Boolean,
      default: undefined,
    },
  },
  // https://docs.mapbox.com/mapbox-gl-js/api/map/#map-instance-members
  // only the ones that can be set
  watch: {
    maxBounds(v) { this.mxObject.setMaxBounds(v); },
    minZoom(v) { this.mxObject.setMinZoom(v); },
    maxZoom(v) { this.mxObject.setMaxZoom(v); },
    minPitch(v) { this.mxObject.setMinPitch(v); },
    maxPitch(v) { this.mxObject.setMaxPitch(v); },
    renderWorldCopies(v) { this.mxObject.setRenderWorldCopies(v); },
    mapStyle(v) { this.mxObject.setStyle(v); },

    bounds(v) { this.mxObject.fitBounds(v, this.fitBoundsOptions); },
    center(v) { this.mxObject.setCenter(v); },
    zoom(v) { this.mxObject.setZoom(v); },
    bearing(v) { this.mxObject.setBearing(v); },
    pitch(v) { this.mxObject.setPitch(v); },
  },
};
