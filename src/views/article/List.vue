<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>게시물 리스트</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">게시물 리스트</ion-title>
        </ion-toolbar>
      </ion-header>

      <div>
        <span>
          리스트
        </span>
      </div>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { useGlobalState } from '@/stores'

export default  {
  name: 'List',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    const globalState = useGlobalState();
    return {
      globalState,
    }
  }
}
</script>