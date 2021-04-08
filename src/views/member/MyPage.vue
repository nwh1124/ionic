<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>회원 마이페이지</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">회원 마이페이지</ion-title>
        </ion-toolbar>
      </ion-header>

      <div>
        <span>  
          마이페이지
        </span>
      </div>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { useGlobalState } from '@/stores'

export default  {
  name: 'MyPage',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    const globalState = useGlobalState();
    return {
      globalState,
    }
  }
}
</script>