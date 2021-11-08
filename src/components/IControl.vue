<script>
// https://docs.mapbox.com/mapbox-gl-js/api/markers/#icontrol
import baseMixin from '../mixins/mx';
import controlMixin from '../mixins/control';

class SlotControl {
  constructor(el) {
    this.el = el;
  }

  onAdd() {
    return this.el;
  }

  // eslint-disable-next-line class-methods-use-this
  onRemove() {}
}

export default {
  name: 'MxIControl',
  mixins: [baseMixin, controlMixin],
  mounted() {
    this.mxObject = new SlotControl(this.$el);
    if (this.map && this.mxObject) this.map.addControl(this.mxObject, this.position);
  },
  render(h) {
    return h('div', { attrs: { class: 'mapboxgl-ctrl mapboxgl-ctrl-group' } }, this.$slots.default);
  },

};
</script>
