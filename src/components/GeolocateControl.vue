<script>
// https://docs.mapbox.com/mapbox-gl-js/api/markers/#geolocatecontrol
import baseMixin from '../mixins/mx';
import controlMixin from '../mixins/control';

export default {
  name: 'MxGeolocateControl',
  mixins: [baseMixin, controlMixin],
  props: {
    fitBoundsOptions: Object,
    positionOptions: Object,
    showAccuracyCircle: {
      type: Boolean,
      default: undefined,
    },
    showUserHeading: {
      type: Boolean,
      default: undefined,
    },
    showUserLocation: {
      type: Boolean,
      default: undefined,
    },
    trackUserLocation: {
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
    this.mxObject = new this.$mapx.GeolocateControl(this.curatedOptions);
    this.bindEvents(this.mxObject);
  },
  render() {
    return undefined;
  },
};
</script>
