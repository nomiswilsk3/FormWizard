<script lang="ts">
  import { defineComponent } from 'vue'
  import CButtonWide from '@/components/CButtonWide.vue'
  import { useRouter } from 'vue-router'

  export default defineComponent({
    name:'HomeView',
    components: {
      CButtonWide
    },
    setup() {
      const router = useRouter()

      const gotNext = ():void =>{
        router.push({
          name: 'about'
        })
      }
      return {gotNext}
    }
  })

</script>

<template>
  <div>
    <div class="row top-pad">
      <div class="side-column"></div>
      <div class="middle-column">
        <h3 class="color-black">Hello There!</h3>
        <p>Let's buy some insurance. It's going to take only a few steps.</p>
        <CButtonWide @click="gotNext()" displayText="Start" />
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
