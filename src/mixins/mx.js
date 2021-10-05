export default {
  inject: {
    mxMap: {
      default: 'undefined',
    },
    mxParent: {
      default: 'undefined',
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
        if (props[name] === undefined) delete props[name];
      });
    },
    bindEvents(mx, id) {
      Object.keys(this.$listeners).forEach((name) => {
        if (id) mx.on(name, id, (e) => this.$emit(name, e));
        else mx.on(name, (e) => this.$emit(name, e));
      });
    },
    unbindEvents(mx, id) {
      Object.keys(this.$listeners).forEach((name) => {
        if (id) mx.off(name, id, (e) => this.$emit(name, e));
        else mx.off(name, (e) => this.$emit(name, e));
      });
    },
  },
};
