/* eslint-disable no-param-reassign */
import Map from './components/Map.vue';
import Marker from './components/Marker.vue';
import ScaleControl from './components/ScaleControl.vue';
import AttributionControl from './components/AttributionControl.vue';
import FullscreenControl from './components/FullscreenControl.vue';
import GeolocateControl from './components/GeolocateControl.vue';
import NavigationControl from './components/NavigationControl.vue';
import IControl from './components/IControl.vue';
import Popup from './components/Popup.vue';
import Style from './components/Style.vue';
import Source from './components/Source.vue';
import Layer from './components/Layer.vue';

export default {
  install: (app, constructor, apiKey) => {
    app.component('MxMap', Map);
    app.component('MxMarker', Marker);
    app.component('MxScaleControl', ScaleControl);
    app.component('MxAttributionControl', AttributionControl);
    app.component('MxFullscreenControl', FullscreenControl);
    app.component('MxGeolocateControl', GeolocateControl);
    app.component('MxNavigationControl', NavigationControl);
    app.component('MxIControl', IControl);
    app.component('MxPopup', Popup);
    app.component('MxStyle', Style);
    app.component('MxSource', Source);
    app.component('MxLayer', Layer);

    app.prototype.$mapx = constructor;
    app.prototype.$mapx.accessToken = apiKey;
  },
};
