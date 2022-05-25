<template>
  <div>
  <div class="row">
      <div class="side-column"></div>
      <div class="middle-column">
        <h2>Tell us about yourself</h2>
        <div class="container" >

            <CInput label="Name" @input="(val) => state.clientName = val" />

            <CInput label="Age" input_type="number" @input="(val) => state.clientAge = val" />

            <CInput label="Where do you live" @input="(val) => state.clientLocation = val" />

            <CRadioField label="Select Package"
              :option_values ="packages"
              @change="(val:string) => state.selectedPackage = val" />
        </div>
        <h4>Your Premium is : 500HKD</h4>

        <div class="btn-wrapper container">
            <CButton class="first-btn" @click="() => {routeBack()}" cssClass="btn-white-bg" displayText="Back" />

            <CButton class="second-btn" displayText="Next" @click="() =>{recordClientOrder()}" />
        </div>
      </div>
      <div class="side-column"></div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent,reactive,computed } from 'vue'
  import CButton from '@/components/CButton.vue'
  import CInput from '@/components/CInputField.vue'
  import CRadioField from '@/components/CRadioField.vue'
  import { useRouter } from 'vue-router'

  import useClientOrder  from '@/store/clientorder'

  export default defineComponent({
    name:'AboutView',
    components: {
      CButton,
      CInput,
      CRadioField
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

    const {clientOrder,setClientOrder} = useClientOrder()

      function routeBack(): void{
        router.back()
      }

      function recordClientOrder(): void{
        setClientOrder({
          age: state.clientAge,
          location: state.clientLocation,
          package: state.selectedPackage,
          premium:"",
          name: state.clientName,
        })

        // Go to summary view
        router.push({
          name: 'summary'
        }) 
      }

      return {
        state,
        routeBack,
        order: computed(() => clientOrder.value),
        recordClientOrder,
        packages
      }
    }
  })

</script>

<style scoped>
  .container {
    width: 32%;
    margin-left: 32%;
  }
  
  .btn-wrapper {
    width:180px;
    border: none;
    overflow: hidden;
    display: block;
    align-items: flex;
  }
  .first-btn {
    display: inline-block;
    margin-right: 15px;
  }
  .second-btn {
    display: inline-block;
  }
</style>

