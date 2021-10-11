<script>
// https://docs.mapbox.com/mapbox-gl-js/api/markers/#fullscreencontrol
import baseMixin from '../mixins/mx';
import controlMixin from '../mixins/control';

export default {
  name: 'MxFullscreenControl',
  mixins: [baseMixin, controlMixin],
  props: {
    container: HTMLElement,
  },
  computed: {
    curatedOptions() {
      const { position, ...opts } = this.$props;
      this.removeUndefined(opts);
      return opts;
    },
  },
  created() {
    this.mxObject = new this.$mapx.FullscreenControl(this.curatedOptions);
  },
  render() {
    return undefined;
  },
};
</script>
