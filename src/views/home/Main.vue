<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>홈</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">홈</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="asdf"/>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { useGlobalState } from '@/stores'
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'Main',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, ExploreContainer },
  setup() {
    const globalState = useGlobalState();
    return {
      globalState,
    }
  }
}
</script>