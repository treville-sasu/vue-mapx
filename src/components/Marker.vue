<script>
import baseMixin from '../mixins/mx';
import markerMixin from '../mixins/marker';

export default {
  name: 'MxMarker',
  mixins: [baseMixin, markerMixin],
  provide() {
    return {
      mxParent: () => this.mxObject,
    };
  },
  computed: {
    curatedOptions() {
      const {
        lngLat,
        ...opts
      } = this.$props;
      this.removeUndefined(opts);
      return opts;
    },
  },
  methods: {
    updateLngLat({ target }) {
      this.$emit('update:lngLat', target.getLngLat());
    },
  },
  created() {
    this.mxObject = new this.$mapx.Marker(this.curatedOptions).setLngLat(this.lngLat);
    this.bindEvents(this.mxObject);
  },
  mounted() {
    if (this.$listeners['update:lngLat']) { this.mxObject.on('drag', this.updateLngLat); }

    this.mxObject
      .addTo(this.map);
  },
  beforeDestroy() {
    this.unbindEvents(this.mxObject);
    if (this.$listeners['update:lngLat']) { this.mxObject.off('drag', this.updateLngLat); }
    this.mxObject.remove();
  },
  render() {
    return this.$slots.default;
  },
};
</script>
