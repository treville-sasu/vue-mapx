# Vue MapX

A really lite Vue plugin to get a Mapbox GL / Maplibre in yout App.

##### Some content extracted from https://github.com/geospoc/v-mapbox with a lot of api changes though.

## Installation
Install via npm:
```sh
    yarn add vue-mapbox
```

You should have `PouchDB` already present in the scope :
```javascript
import MyMapGl from "mapbox-gl";
// or
import MyMapGl from "maplibre-gl";
```

Then, plug vue-mapbox into Vue with the reference to the library you want to use (mapbox-gl or maplibre):
```javascript
import VueMapX from "vue-mapx";

Vue.use(VueMapX, MyMapGl);
```

## API
### $mapx

* `$mapx` is your reference to the library. You can access it everywhere.

```vue
<script>
  export default {
    created: function() {
      new this.$mapx;
    }
  }
</script>
```

