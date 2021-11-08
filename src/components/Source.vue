<script>
// https://docs.mapbox.com/mapbox-gl-js/api/map/#instance-members-sources
// https://docs.mapbox.com/mapbox-gl-js/api/sources/
// https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/
import baseMixin from '../mixins/mx';

export default {
  name: 'MxSource',
  mixins: [baseMixin],
  props: {
    type: {
      type: String,
      required: true,
      validator: (v) => ['vector', 'raster', 'raster-dem', 'geojson', 'image', 'video', 'canvas'].includes(v),
    },
    id: { type: String, required: true },

    // VectorTile options (and Raster & Raster-dem)
    // setTiles / setUrl
    attribution: String,
    bounds: Array,
    maxzoom: Number,
    minzoom: Number,
    promoteId: [String, Object],
    scheme: {
      type: String,
      validator: (v) => ['xyz', 'tms'].includes(v),
    },
    tiles: Array,
    url: String,
    volatile: {
      type: Boolean,
      default: undefined,
    },

    tileSize: Number,

    buffer: Number,
    cluster: {
      type: Boolean,
      default: undefined,
    },
    clusterMaxZoom: Number,
    clusterMinPoints: Number,
    clusterProperties: Object,
    clusterRadius: Number,
    filter: Array, // object?
    generateId: {
      type: Boolean,
      default: undefined,
    },
    lineMetrics: {
      type: Boolean,
      default: undefined,
    },
    tolerance: Number,

    // Geojson options
    data: [Object, String],

    // Image options
    // url: String,
    // coordinates: Array,

    // Video options
    urls: Array,
    // coordinates: Array,

    // Canvas options
    canvas: [String, HTMLCanvasElement],
    animate: {
      type: Boolean,
      default: undefined,
    },
    coordinates: Array,
  },
  provide() {
    return {
      mxParent: () => this.id,
    };
  },
  watch: {
    coordinates(n) { this.mxObject.setCoordinates(n); },
    data: {
      deep: true,
      handler(n) { this.mxObject.setData(n); },
    },
    tiles(n) { this.mxObject.setTiles(n); },
    url(n) {
      if (this.type === 'image') this.mxObject.updateImage({ url: n });
      else this.mxObject.setUrl(n);
    },
  },
  computed: {
    curatedOptions() {
      const { id, ...opts } = this.$props;
      this.removeUndefined(opts);
      return opts;
    },
  },
  created() {
    this.map.addSource(this.id, this.curatedOptions);
    this.mxObject = this.map.getSource(this.id);
  },
  destroyed() {
    if (this.map.getSource(this.id)) this.map.removeSource(this.id);
    this.mxObject = undefined;
  },

  // Needed for Vue 2 "[Vue warn]: Multiple root nodes " issue
  render(h) {
    return h('div', this.$slots.default);
  },
};
</script>
