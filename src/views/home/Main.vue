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

      <div>
        <span>
          홈 메인
        </span>
        <span>
          <div class="bg-red-500">테일윈드</div>
        </span>
      </div>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { createGlobalState, useGlobalState } from '@/stores'

export default  {
  name: 'Main',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    const globalState = createGlobalState();
    return {
      globalState,
    }
  }
}
</script>