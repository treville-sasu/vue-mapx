<script>
// https://docs.mapbox.com/mapbox-gl-js/api/markers/#navigationcontrol
import baseMixin from '../mixins/mx';
import controlMixin from '../mixins/control';

export default {
  name: 'NavigationControl',
  mixins: [baseMixin, controlMixin],
  props: {
    fitBoundsOptions: Object,
    positionOptions: Object,
    showCompass: {
      type: Boolean,
      default: undefined,
    },
    showZoom: {
      type: Boolean,
      default: undefined,
    },
    visualizePitch: {
      type: Boolean,
      default: undefined,
    },
  },
  computed: {
    curatedOptions() {
      const { position, ...opts } = this.$props;
      this.removeUndefined(opts);
      return opts;
    },
  },
  created() {
    this.mxObject = new this.$mapx.NavigationControl(this.curatedOptions);
  },
  render() {
    return undefined;
  },
};
</script>
