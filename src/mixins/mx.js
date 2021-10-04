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
    bindEvents(listeners, events) {
      Object.keys(listeners, events).forEach((name) => {
        if (events.includes(name)) this.mxObject.on(name, (e) => this.$emit(name, e));
      });
    },
  },
};
