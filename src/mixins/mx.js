export default {
  inject: {
    mxMap: {
      default: undefined,
    },
    mxParent: {
      default: undefined,
    },
  },
  data() { return { mxObject: undefined }; },
  computed: {
    map() {
      return typeof this.mxMap === 'function' ? this.mxMap() : undefined;
    },
    parent() {
      return typeof this.mxParent === 'function' ? this.mxParent() : undefined;
    },
  },
  destroyed() {
    this.mxObject = undefined;
  },
  methods: {
    removeUndefined(props) {
      Object.keys(props).forEach((name) => {
        // eslint-disable-next-line no-param-reassign
        if (props[name] === undefined) delete props[name];
      });
    },
    bindEvents(mx, layerId) {
      Object.keys(this.$listeners).forEach((name) => {
        if (layerId) mx.on(name, layerId, (e) => this.$emit(name, e));
        else mx.on(name, (e) => this.$emit(name, e));
      });
    },
    unbindEvents(mx, layerId) {
      Object.keys(this.$listeners).forEach((name) => {
        if (layerId) mx.off(name, layerId, (e) => this.$emit(name, e));
        else mx.off(name, (e) => this.$emit(name, e));
      });
    },
  },
};
