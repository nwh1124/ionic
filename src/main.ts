import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

// 전역 css 불러오기
import './index.css'

// 폰트어썸 불러오기
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faUser, faList, faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faUser, faList, faCog);

// 전역 상태 불러오기
import { createGlobalState, globalStateSymbol } from '@/stores'

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .provide(globalStateSymbol, createGlobalState());
  
router.isReady().then(() => {
  app.mount('#app');
});