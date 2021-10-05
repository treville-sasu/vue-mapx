# Vue MapX

A really lite Vue plugin to get a Mapbox GL / Maplibre in your App.

##### Some content extracted from https://github.com/geospoc/v-mapbox.

## Why another library ?
 As always, support is the main reason you'll choose a library. 
 
 Now we have lighter version with the same awesome Vue integration (and more).

## Preview & Demo
a Demo is avaliable as a package script.
`yarn preview` or `npx preview`

content can be adjusted in `demo/index.html`

you can access the demo from the package built here : [Demo](./demo/index.html)

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

### Components

#### the Map `mx-map`

```html
<section class="mpx-map-wrapper">
  <mx-map v-bind="map" @load="displayEvent" @dragend="displayEvent" @mousemove="pointerPosition = $event.lngLat">
    <template #loader>{{ message }}</template>
...
  </mx-map>
</section>
```
Do not forget to wrap your map in a container with 

#### Markers `mx-marker`

```html
<mx-map v-bind="map" 
...>
  <mx-marker v-bind="marker" @dragend="displayEvent">
    <mx-popup v-bind="popup">{{ message }}</mx-popup>
  </mx-marker>
...
</mx-map>
```
#### Popup `mx-popup`

```html
<mx-map v-bind="map">
  <mx-marker v-bind="marker">
    <mx-popup v-bind="popup">{{ message }}</mx-popup>
    </mx-marker>
  <mx-popup v-bind="tooltip">{{  pointerPosition }}</mx-popup>
</mx-map>
```
Popups could be attached to a marker or displayed freely on the map by giving coordinates.
with `trackPointer:true` the popup will follow the pointer device

#### Attribution Control `mx-attribution-control`
`position` is one of the four corner eg: 'top-left', ...
See the mapbox/maplibre doc for more details

#### Scale Control `mx-scale-control`
`position` is one of the four corner eg: 'top-left', ...
See the mapbox/maplibre doc for more details

#### Fullscreen Control `mx-fullscreen-control`
`position` is one of the four corner eg: 'top-left', ...
See the mapbox/maplibre doc for more details

#### Geolocate Control `mx-geolocate-control`
`position` is one of the four corner eg: 'top-left', ...
See the mapbox/maplibre doc for more details
You can lister for events too

#### Navigation Control `mx-navigation-control`
`position` is one of the four corner eg: 'top-left', ...
See the mapbox/maplibre doc for more details

#### any other Control `mx-i-control`
Use the slot to populate the control

### Coordinates notations

If you come from other web map librairies you know that there no convention for coordinates notations. Mapbox use the `lngLat` parameter so do we. this could be an `Array<Number, Number>` or an `Object<{lat, lng}>`

## Differences with `v-mapbox` or `vue-mapbox` or `vue-mapbox-gl`
