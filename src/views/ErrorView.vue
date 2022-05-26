<script lang="ts">
  import { defineComponent } from 'vue'
  import CButtonWide from '@/components/CButtonWide.vue'
  import { useRouter } from 'vue-router'
  export default defineComponent({
    name:'ErrorView',
    components:{
      CButtonWide
    },
    setup() {
      const router = useRouter()
      function routeToHome(): void{
        router.push({
          name: 'home'
        })
      }
      return{routeToHome}
    }
  })

</script>

<template>
  <div>
    <div class="row top-pad">
      <div class="side-column"></div>
      <div class="middle-column">
        <h2 class="color-black">Ooops</h2>
        <p>Your age is over our accepted limit.</p>
        <p>We are sorry but we can not insure you now.</p>
        <CButtonWide @click="() =>{routeToHome()}" displayText="Ok :(" cssClass="btn-black-bg-wide" />
      </div>
      <div class="side-column"></div>
    </div>
  </div>
</template>

<style>
  .top-pad {
    margin-top:130px;
  }
</style>
