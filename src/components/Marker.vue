<template>
  <div>
    <slot />
  </div>
</template>

<script>
import baseMixin from '../mixins/mx';
import markerMixin from '../mixins/marker';

export default {
  name: 'Marker',
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
      return opts;
    },
  },
  created() {
    this.mxObject = new this.$mapx.Marker(this.curatedOptions).setLngLat(this.lngLat);
    this.bindEvents(this.$listeners, this.events);
  },
  mounted() {
    this.mxObject
      .addTo(this.map);
  },
  beforeDestroy() {
    this.mxObject.remove();
  },
};
</script>
