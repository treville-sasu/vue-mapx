/* eslint-disable no-param-reassign */
import Map from './components/Map.vue';
import Marker from './components/Marker.vue';
import ScaleControl from './components/ScaleControl.vue';
import Popup from './components/Popup.vue';

export default {
  install: (app, constructor, apiKey) => {
    app.component('MxMap', Map);
    app.component('MxMarker', Marker);
    app.component('MxScaleControl', ScaleControl);
    app.component('MxPopup', Popup);

    app.prototype.$mapx = constructor;
    app.prototype.$mapx.accessToken = apiKey;
  },
};
