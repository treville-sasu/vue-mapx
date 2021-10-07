<script>
// https://docs.mapbox.com/mapbox-gl-js/api/map/#instance-members-style-properties
import baseMixin from '../mixins/mx';

export default {
  name: 'Environment',
  mixins: [baseMixin],
  props: {
    light: Object,
    terrain: Object,
    fog: Object,
  },
  watch: {
    light: {
      immediate: true,
      handler(n) {
        const { validate, ...opts } = n;
        this.map.setLight(opts, { validate });
      },
    },
    terrain: {
      immediate: true,
      handler(n) { this.map.setTerrain(n); },
    },
    fog: {
      immediate: true,
      handler(n) { this.map.setFog(n); },
    },
  },
  mounted() {
    this.$emit('update:light', this.map.getLight());
    this.$emit('update:terrain', this.map.getTerrain());
    this.$emit('update:fog', this.map.getFog());
  },
  render() {
    return undefined;
  },
};
</script>
