<script>
// https://docs.mapbox.com/mapbox-gl-js/api/markers/#scalecontrol
import baseMixin from '../mixins/mx';
import controlMixin from '../mixins/control';

export default {
  name: 'MxScaleControl',
  mixins: [baseMixin, controlMixin],
  props: {
    unit: {
      type: String,
      validator: (val) => ['imperial', 'metric', 'nautical'].includes(val),
    },
    maxWidth: Number,
  },
  watch: {
    unit(n) { this.mapObject.setUnit(n); },
  },
  computed: {
    curatedOptions() {
      const { position, ...opts } = this.$props;
      this.removeUndefined(opts);
      return opts;
    },
  },
  created() {
    this.mxObject = new this.$mapx.ScaleControl(this.curatedOptions);
  },
  render() {
    return undefined;
  },
};
</script>
