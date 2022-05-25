<template>
  <div>
  <div class="row">
      <div class="side-column"></div>
      <div class="middle-column">
        <h2>Summary</h2>
        <p><label>Currency</label> : <label>HKCG</label></p>
        <p><label>Name</label> : <label v-if="order">{{order.name}}</label></p>
        <p><label>Age</label> : <label v-if="order">{{order.age}}</label></p>
        <p><label>Where do you live</label> : <label v-if="order">{{order.location}}</label></p>
        <p><label>Package</label> : <label v-if="order">{{order.package}}</label></p>
        <p><label>Premium</label> : <label v-if="order">{{order.premium}}</label></p>
        <div class="btn-wrapper">
            <CButton class="first-btn" @click="() => {routeBack()}" cssClass="btn-white-bg" displayText="Back" />

            <CButton class="second-btn" displayText="Buy" />
        </div>
      </div>
      <div class="side-column"></div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent,reactive,computed } from 'vue'
  import { useRouter } from 'vue-router'
  import CButton from '@/components/CButton.vue'
  import useClientOrder  from '@/store/clientorder'

  export default defineComponent({
    name:'SummaryView',
    components:{
      CButton
    },
    setup() {
      const router = useRouter()
      const state = reactive <{clientName:string;clientAge:number,clientLocation:string,selectedPackage:string}>({
        clientName:"",
        clientAge:0,
        clientLocation:"",
        selectedPackage:""
      })

      let packages = [
        {id:'1',name:'Standard'},
        {id:'2',name:'Sale'},
        {id:'3',name:'Super Sale'}
      ]

    const {clientOrder} = useClientOrder()

      function routeBack(): void{
        router.back()
      }

      return {
        state,
        routeBack,
        order: computed(() => clientOrder.value)
      }
    }
  })

</script>

<style scoped>
  
  .btn-wrapper {
    width:180px;
    border: none;
    overflow: hidden;
    margin:auto;
    width: 50%;
  }
  .first-btn {
    display: inline-block;
    margin-right: 15px;
  }
  .second-btn {
    display: inline-block;
  }
</style>

