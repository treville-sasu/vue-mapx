/* eslint-disable no-param-reassign */
import MxMap from './components/Map.vue';
import MxMarker from './components/Marker.vue';
import MxScaleControl from './components/ScaleControl.vue';
import MxAttributionControl from './components/AttributionControl.vue';
import MxFullscreenControl from './components/FullscreenControl.vue';
import MxGeolocateControl from './components/GeolocateControl.vue';
import MxNavigationControl from './components/NavigationControl.vue';
import MxIControl from './components/IControl.vue';
import MxPopup from './components/Popup.vue';
import MxStyle from './components/Style.vue';
import MxSource from './components/Source.vue';
import MxLayer from './components/Layer.vue';

export default {
  install: (app, constructor, apiKey) => {
    app.component('MxMap', MxMap);
    app.component('MxMarker', MxMarker);
    app.component('MxScaleControl', MxScaleControl);
    app.component('MxAttributionControl', MxAttributionControl);
    app.component('MxFullscreenControl', MxFullscreenControl);
    app.component('MxGeolocateControl', MxGeolocateControl);
    app.component('MxNavigationControl', MxNavigationControl);
    app.component('MxIControl', MxIControl);
    app.component('MxPopup', MxPopup);
    app.component('MxStyle', MxStyle);
    app.component('MxSource', MxSource);
    app.component('MxLayer', MxLayer);

    app.prototype.$mapx = constructor;

    if (typeof process !== 'undefined' && process.env && process.env.VUE_APP_MAPBOX_TOKEN) app.prototype.$mapx.accessToken = process.env.VUE_APP_MAPBOX_TOKEN;
    if (apiKey) app.prototype.$mapx.accessToken = apiKey;
  },
};
