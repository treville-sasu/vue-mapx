<template>
  <div class="mpx-map" v-if="isLoaded">
    <slot />
  </div>
  <div class="mpx-map" v-else>
    <slot name="loader" />
  </div>
</template>

<style>
  .mpx-map-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
  }
  .mpx-map-wrapper .mpx-map { position: absolute; top: 0; bottom: 0; width: 100%; }
</style>

<script>
import baseMixin from '../mixins/mx';
import mapMixin from '../mixins/map';

export default {
  name: 'Map',
  mixins: [baseMixin, mapMixin],
  provide() {
    return {
      mxMap: () => this.mxObject,
      mxElement: () => this.$el,
    };
  },
  data() {
    return {
      isLoaded: false,
    };
  },
  computed: {
    curatedOptions() {
      const {
        mapStyle: style,
        container = this.$el,
        ...opts
      } = this.$props;
      this.removeUndefined(opts);
      return { style, container, ...opts };
    },
  },
  mounted() {
    this.mxObject = new this.$mapx.Map(this.curatedOptions);
    this.mxObject.on('load', () => {
      this.isLoaded = true;
    });

    this.bindEvents(this.mxObject);
  },
  beforeDestroy() {
    this.unbindEvents(this.mxObject);
    this.mxObject.remove();
  },
};
</script>
