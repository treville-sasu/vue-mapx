// https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters
export default {
  props: {
    container: {
      type: [String, HTMLElement],
      required: false,
    },
    minZoom: {
      type: Number,
      default: 0,
      required: false,
    },
    maxZoom: {
      type: Number,
      default: 22,
      required: false,
    },
    minPitch: {
      type: Number,
      default: 0,
      required: false,
    },
    maxPitch: {
      type: Number,
      default: 0,
      required: false,
    },
    // using 'mapStyle' for 'style' because it's a reserved word.
    mapStyle: {
      type: [String, Object],
      default: undefined,
      required: true,
    },
    hash: {
      type: [Boolean, String],
      default: false,
      required: false,
    },
    interactive: {
      type: Boolean,
      default: true,
      required: false,
    },
    bearingSnap: {
      type: Number,
      default: 7,
      required: false,
    },
    pitchWithRotate: {
      type: Boolean,
      default: true,
      required: false,
    },
    clickTolerance: {
      type: Number,
      default: 3,
      required: false,
    },
    attributionControl: {
      type: Boolean,
      default: true,
      required: false,
    },
    customAttribution: {
      type: [String, Array],
      default: null,
      required: false,
    },
    logoPosition: {
      type: String,
      default: 'bottom-left',
      validator: (v) => ['top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(v),
      required: false,
    },
    failIfMajorPerformanceCaveat: {
      type: Boolean,
      default: false,
      required: false,
    },
    preserveDrawingBuffer: {
      type: Boolean,
      default: false,
      required: false,
    },
    antialias: {
      type: Boolean,
      default: false,
      required: false,
    },
    refreshExpiredTiles: {
      type: Boolean,
      default: true,
      required: false,
    },
    maxBounds: {
      type: [Array, Object],
      default: undefined,
      required: false,
    },
    scrollZoom: {
      type: [Boolean, Object],
      default: true,
      required: false,
    },
    boxZoom: {
      type: Boolean,
      default: true,
      required: false,
    },
    dragRotate: {
      type: Boolean,
      default: true,
      required: false,
    },
    dragPan: {
      type: Boolean,
      default: true,
      required: false,
    },
    keyboard: {
      type: Boolean,
      default: true,
      required: false,
    },
    doubleClickZoom: {
      type: Boolean,
      default: true,
      required: false,
    },
    touchZoomRotate: {
      type: [Boolean, Object],
      default: () => true,
      required: false,
    },
    touchPitch: {
      type: [Boolean, Object],
      default: () => true,
      required: false,
    },
    trackResize: {
      type: Boolean,
      default: true,
      required: false,
    },
    center: {
      type: [Object, Array],
      default: undefined,
      required: false,
    },
    zoom: {
      type: Number,
      default: 0,
      required: false,
    },
    bearing: {
      type: Number,
      default: 0,
      required: false,
    },
    pitch: {
      type: Number,
      default: 0,
      required: false,
    },
    bounds: {
      type: [Object, Array],
      default: undefined,
      required: false,
    },
    fitBoundsOptions: {
      type: Object,
      default: undefined,
      required: false,
    },
    renderWorldCopies: {
      type: Boolean,
      default: true,
      required: false,
    },
    maxTileCacheSize: {
      type: Number,
      default: null,
      required: false,
    },
    localIdeographFontFamily: {
      type: String,
      default: 'sans-serif',
      required: false,
    },
    transformRequest: {
      type: Function,
      default: null,
      required: false,
    },
    collectResourceTiming: {
      type: Boolean,
      default: false,
      required: false,
    },
    fadeDuration: {
      type: Number,
      default: 300,
      required: false,
    },
    crossSourceCollisions: {
      type: Boolean,
      default: true,
      required: false,
    },
    accessToken: {
      type: String,
      default: undefined,
      required: false,
    },
    locale: {
      type: Object,
      default: undefined,
      required: false,
    },
    testMode: {
      type: Boolean,
      default: false,
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

    // Layer Oriented
    // setLayerZoomRange
    // setFilter
    // setPaintProperty
    // setLayoutProperty

    // Environnement oriented
    // light(v) { this.mxObject.setLight(v); },
    // terrain(v) { this.mxObject.setTerrain(v); },
    // fog(v) { this.mxObject.setFog(v); },
  },
  computed: {
    events() {
      return [
        'resize',
        'remove',
        // Interaction
        'mousedown',
        'mouseup',
        'mouseover',
        'mousemove',
        'preclick',
        'click',
        'dblclick',
        'mouseenter',
        'mouseleave',
        'mouseout',
        'contextmenu',
        'wheel',
        'touchstart',
        'touchend',
        'touchmove',
        'touchcancel',
        // Movement
        'movestart',
        'move',
        'moveend',
        'dragstart',
        'drag',
        'dragend',
        'zoomstart',
        'zoom',
        'zoomend',
        'pitchstart',
        'pitch',
        'pitchend',
        'boxzoomstart',
        'boxzoomend',
        'boxzoomcancel',
        // Lifecycle
        'load',
        'render',
        'idle',
        'error',
        'webglcontextlost',
        'webglcontexrestored',
        // Data loading
        'data',
        'styledata',
        'sourcedata',
        'dataloading',
        'styledataloading',
        'sourcedataloading',
        'styleimagemissing'];
    },
  },
};
