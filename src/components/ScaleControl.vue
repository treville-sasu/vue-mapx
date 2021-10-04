<script>
import baseMixin from '../mixins/mx';
import controlMixin from '../mixins/control';
import scaleControlMixin from '../mixins/scale-control';

export default {
  name: 'ScaleControl',
  mixins: [baseMixin, controlMixin, scaleControlMixin],

  computed: {
    curatedOptions() {
      const { position, ...opts } = this.$props;
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
