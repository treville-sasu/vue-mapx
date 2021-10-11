<script>
// https://docs.mapbox.com/mapbox-gl-js/api/#map#addlayer
// https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/
import baseMixin from '../mixins/mx';

export default {
  name: 'MxLayer',
  mixins: [baseMixin],
  props: {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      validator: (v) => ['fill', 'line', 'symbol', 'circle', 'heatmap', 'fill-extrusion', 'raster', 'hillshade', 'background', 'sky'].includes(v),
    },
    source: [String, Object],
    filter: Array,
    layout: Object,
    maxzoom: Number,
    metadata: Object,
    minzoom: Number,
    paint: Object,
    sourceLayer: String,
    renderingMode: String,
    beforeId: String,
  },
  watch: {
    minzoom(n) { this.map.setLayerZoomRange(this.id, n, this.maxzoom); },
    maxzoom(n) { this.map.setLayerZoomRange(this.id, this.minzoom, n); },
    // for setFilter/setPaintProperty/setLayoutProperty options is omitted
    // and default to {validate:true} in mapbox 2.5
    filter(n) { this.map.setFilter(this.id, n); },
    paint: {
      deep: true,
      // as new and old value are the same (reference to the same object)
      // we have to set each property again.
      handler(n) {
        Object.entries(n)
          .forEach(([name, value]) => this.map.setPaintProperty(this.id, name, value));
      },
    },
    layout: {
      deep: true,
      // as new and old value are the same (reference to the same object)
      // we have to set each property again.
      handler(n, o) {
        Object.entries(this.diff(o, n))
          .forEach(([name, value]) => this.map.setLayoutProperty(this.id, name, value));
      },
    },

    beforeId(n) { this.map.moveLayer(this.id, n); },
  },
  computed: {
    curatedOptions() {
      const { beforeId, ...opts } = this.$props;
      // eslint-disable-next-line no-unused-expressions
      opts.source || (opts.source = this.parent); //      opts.source ||= this.parent;
      this.removeUndefined(opts);
      return opts;
    },
    mxLayer() {
      return this.map.getLayer(this.id);
    },
  },
  methods: {
    diff(a, b) {
      const r = {};
      const keys = new Set([...Object.keys(a), ...Object.keys(b)]);

      keys.forEach((k) => {
        if (a[k] !== b[k] && (a[k] !== undefined || b[k] !== undefined)) r[k] = b[k];
      });
      return r;
    },
  },
  mounted() {
    this.map.addLayer(this.curatedOptions, this.beforeId);
    // this.mxObject = this.map.getLayer(this.id);
    this.bindEvents(this.map, this.id);
  },
  destroyed() {
    if (this.map.getLayer(this.id)) {
      this.map.removeLayer(this.id);
      this.unbindEvents(this.map, this.id);
    }
    // this.mxObject = undefined;
  },
  render() {
    return undefined;
  },
  directives: {
    visible(_, { value }) {
      this.map.setLayoutProperty(this.id, 'visibility', value ? 'visible' : 'none');
    },
  },
};
</script>
