# Vue MapX

A really lite Vue plugin to get a Mapbox GL / Maplibre in your App.

##### Some content extracted from https://github.com/geospoc/v-mapbox.

## Why another library ?
 As always, support is the main reason you'll choose a library. 
 
 Now we have lighter version with the same awesome Vue integration (and more).

## Preview & Demo
a demo is avaliable as a package script.
`yarn preview` or `npx preview`

content can be adjusted in `demo/index.html`

you can access the demo from the package built here : [Demo](./demo/index.html)

## Installation
Install via npm:
```sh
    yarn add vue-mapbox
```

You should have mapbox or maplibre already present in the scope :
```javascript
import MyMapGl from "mapbox-gl";
// or
import MyMapGl from "maplibre-gl";
```

Then, plug vue-mapx into Vue with the reference to the library you want to use :
```javascript
import VueMapX from "vue-mapx";

Vue.use(VueMapX, MyMapGl, apiKey);
```

You can set your apiKey once and for all or set it later.

TODO : try and get the apiKey from process.env

## API
### $mapx

* `$mapx` is your reference to the library. You can access it everywhere.

```js
  export default {
    created: function() {
      new this.$mapx;
    }
  }
```

### the Map component as `mx-map`

```html
<section class="mpx-map-wrapper">
  <mx-map v-bind="map" @load="displayEvent" @dragend="displayEvent" @mousemove="pointerPosition = $event.lngLat">
    <template #loader>{{ message }}</template>
...
  </mx-map>
</section>
```
* map events are forwarded untouched to the app. TODO : allow for conditional bindings
* default slot holds map related componnents
* `#loader` slot is displayed until the map is ready.
* the component introduces two css classes : `mpx-map-wrapper`, `mpx-map`
* remember that mapbox & maplibre require you set an absolute height for the parent container.
* there is an `accessToken` option if you do not want to set it globaly

More at : 
* https://docs.mapbox.com/mapbox-gl-js/api/map
* https://maplibre.org/maplibre-gl-js-docs/api/map/

### Markers & Popup as `mx-marker` & `mx-popup`

```html
<mx-map v-bind="map" >
  ...
  <mx-popup v-bind="{ offset: 15, lngLat: { lat: 33.22195, lng: 44.31930 } }">{{  message }}</mx-popup>

  <mx-marker v-bind="{ draggable: true, color: 'red', lngLat: { lat: 33.32442, lng: 44.26575 } }">
    <mx-popup v-bind="{ closeOnMove:true }">{{ message }}</mx-popup>
  </mx-marker>
  
  <mx-popup v-bind="{ closeButton: false, trackPointer: true }">This is a toolip</mx-popup>
...
</mx-map>
```

* Markers can hold a Popup in there default slot.
* TODO : `#element` slot is redirected to the `element` option, which allow for custom icons.
* Popups can be on there own, they need a `lngLat` attribute.
* Popups could be attached to a marker.
* with `trackPointer:true` the popup will follow the pointer device.

more at :
* https://docs.mapbox.com/mapbox-gl-js/api/markers/#marker-parameters
* https://maplibre.org/maplibre-gl-js-docs/api/markers/#marker

### Controls

Every control needs a position on the map canvas, set it with `position` with one of the four corners eg: `top-left`, `bottom-right` ...

#### Attribution Control as `mx-attribution-control`
See the mapbox/maplibre doc for more details
* https://docs.mapbox.com/mapbox-gl-js/api/markers/#attributioncontrol

#### Scale Control as `mx-scale-control`
See the mapbox/maplibre doc for more details
* https://docs.mapbox.com/mapbox-gl-js/api/markers/#scalecontrol

#### Fullscreen Control as `mx-fullscreen-control`
See the mapbox/maplibre doc for more details
* https://docs.mapbox.com/mapbox-gl-js/api/markers/#fullscreencontrol

#### Geolocate Control as `mx-geolocate-control`
* You can register specific events too

See the mapbox/maplibre doc for more details
* https://docs.mapbox.com/mapbox-gl-js/api/markers/#geolocatecontrol

#### Navigation Control as `mx-navigation-control`
See the mapbox/maplibre doc for more details

#### any other Control as `mx-i-control`

```html
<mx-map v-bind="map" >
  ...
  <mx-i-control :position="top-left">
    <h4>{{ some title}}</h4>
    <button>some value</button>
...
  </mx-i-control>
...
</mx-map>
```
* Use the default slot to populate the control with any HTML
* it receive standart mapbox classes for styling : `mapboxgl-ctrl mapboxgl-ctrl-group`
* TODO : should set the malibre equivalent classes too.

### Source & Layer as `mx-source` & `mx-layer`

```html
<mx-map v-bind="map" >
  ...
  <mx-layer v-bind="walk" :source="{...options, data:geojson }" @click="walk.paint['line-color'] = randomColor()" />

  <mx-layer v-bind="sky"/>

  <mx-source id="flight" :data="geojson" v-bind="options">
    <mx-layer v-bind="fly.layer" @click="fly.layer.paint['line-color'] = randomColor()" />
    <mx-layer v-bind="fly.layer" .../>
  </mx-source>

  <mx-source id="sourceId" ...>
  <mx-layer id="SoloLayer" source="sourceID" .../>
...
</mx-map>
```
* Layers can hold there own source, but is not reactive
* Layers without a source is allowed eg:sky
* TODO: Layers have a v-visibility directive for ... visibility
* Sources hold the data/image/video/tiles ... and is reactive
* Sources can hold several Layers, allowing for filtering and specific styling
* You can reference a Source for Layer by `id`, but without reactivity.

More at :
* https://docs.mapbox.com/mapbox-gl-js/api/sources/
* https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/
* https://docs.mapbox.com/mapbox-gl-js/api/#map#addlayer
* https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/


### Image
TODO : addImage, ...

### Feature state

TODO: setFeatureState, removeFeatureState

### Style 

```html
<section class="mpx-map-wrapper">
  <mx-map v-bind="map">
    <mx-style v-bind="style"/>
...
  </mx-map>
</section>
```

```js
{
  style: {
    light: {
      anchor: 'viewport',
      color: 'white',
      intensity: 0.4
    },
    terrain: {
      "source": {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
        'tileSize': 512,
        'maxzoom': 14
      },
      "exaggeration": 2
    },
    fog: {
      "range": [-0.5, 3],
      "color": "white",
      "horizon-blend": 0.1
    }
  }
}
```

* Allow to set Light, Terrain & Fog
* If you need a sky set it as a layer.
* TODO : allow to change style dynamicaly

## Coordinates notations

If you come from other web map librairies you know that there no convention for coordinates notations. Mapbox use the `lngLat` parameter so do we. this could be an `Array<Number, Number>` or an `Object<{lat, lng}>`

## Differences with `v-mapbox` or `vue-mapbox` or `vue-mapbox-gl`
