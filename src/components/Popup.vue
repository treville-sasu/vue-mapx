<script>
import baseMixin from '../mixins/mx';
import popupMixin from '../mixins/popup';

export default {
  name: 'MxPopup',
  mixins: [baseMixin, popupMixin],
  computed: {
    curatedOptions() {
      const {
        trackPointer,
        lngLat,
        ...opts
      } = this.$props;
      this.removeUndefined(opts);
      return opts;
    },
  },
  created() {
    this.mxObject = new this.$mapx.Popup(this.curatedOptions);
    this.bindEvents(this.mxObject);
  },
  mounted() {
    this.mxObject.setDOMContent(this.$el);

    if (this.lngLat) {
      this.mxObject
        .setLngLat(this.lngLat);
    } else if (this.trackPointer) this.mxObject.trackPointer();

    if (this.parent) this.parent.setPopup(this.mxObject);
    else {
      this.mxObject
        .addTo(this.map);
    }
  },
  beforeDestroy() {
    this.mxObject.remove();
  },
  render() {
    return this.$slots.default;
  },
};
</script>
