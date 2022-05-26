<template>
  <div>
  <div class="row">
      <div class="side-column"></div>
      <div class="middle-column">
        <h2>Tell us about yourself</h2>
        <div class="container" >

            <CInput 
              label="Name" 
              @input="(val) => state.clientName = val" />

            <CInput 
              label="Age" 
              input_type="number" 
              @input="(val) => state.clientAge = val" />

            <CSelectField 
              label="Where do you live" 
              :option_values ="countries" 
              @input="(val) => state.clientCountryCode = val.target.value" />

            <CRadioField label="Select Package"
              :option_values ="packages"
              :callBack = "func_morePremium"
              @change="(val) => {state.selectedPackage = val}" />
        </div>
        <h4>Your Premium is : {{calculatePremium}}{{state.clientCountryCode }}</h4>

        <div class="btn-wrapper container">
            <CButton 
              class="first-btn" 
              @click="() => {routeBack()}" 
              cssClass="btn-white-bg" 
              displayText="Back" />

            <CButton 
              class="second-btn" 
              displayText="Next" 
              @click="() =>{recordClientOrder()}" />
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
  import CSelectField from '@/components/CSelectField.vue'
  import { useRouter } from 'vue-router'

  import useClientOrder  from '@/store/clientorder'

  export default defineComponent({
    name:'AboutView',
    components: {
      CButton,
      CInput,
      CRadioField,
      CSelectField
    },
    setup() {
      const router = useRouter()
      const state = reactive <{clientName:string;clientAge:number,clientCountry:string,clientCountryCode:string,selectedPackage:string, finalPremium: number}>({
        clientName:"",
        clientAge:0,
        clientCountry:"",
        clientCountryCode:"",
        selectedPackage:"",
        finalPremium:0
      })

      let packages = [
        {id:1,name:'Standard',selected:true,extraPercentagePremium:0},
        {id:2,name:'Sale',selected:false,extraPercentagePremium:50},
        {id:3,name:'Super Sale',selected:false,extraPercentagePremium:75}
      ]

      let countries = [
        {code:'HKD',name:'Hong Kong',rate:1},
        {code:'USD',name:'USA',rate:2},
        {code:'AUD',name:'Austraria',rate:3}
      ]

    const {clientOrder,setClientOrder} = useClientOrder()

      function routeBack(): void{
        router.back()
      }

      function recordClientOrder(): void{
        // Route to error page if user age is greeter than 100
        if(state.clientAge >100) {
            router.push({
              name: 'error'
            })
        }else{
        
          let countrySelected = countries.find((item) => item.code == state.clientCountryCode)
          let selectedPackageInfo = packages.find((item) => item.id == parseInt(state.selectedPackage))
          
          setClientOrder({
            age: state.clientAge,
            clientCountry: (countrySelected)? countrySelected.name :'',
            package: (selectedPackageInfo)? selectedPackageInfo.name : '',
            clientCountryCode: state.clientCountryCode,
            premium:state.finalPremium,
            name: state.clientName
          })

          // Go to summary view
          router.push({
            name: 'summary'
          }) 
        }
      }

      const  calculatePremium =computed(() =>{
        let countrySelected = countries.find((item) => item.code == state.clientCountryCode)
        let rate:number = (countrySelected)? countrySelected.rate : 1

        let selectedPackageInfo = packages.find((item) => item.id == parseInt(state.selectedPackage))
        let percentageMore:number = (selectedPackageInfo)? selectedPackageInfo.extraPercentagePremium : 0

        let standardPremium = state.clientAge * 10 * rate
        if(percentageMore >0){
          standardPremium =  standardPremium + ((percentageMore/100)*standardPremium)
        }
        state.finalPremium = standardPremium
        
        return standardPremium
      })

      const  func_morePremium =(id:number):any =>{
        let checkedPackage = packages.find((item) => item.id == id)
        let percentageMore:number = (checkedPackage)? checkedPackage.extraPercentagePremium : 0

        if(percentageMore <=0){
          return ''
        }else{
          return `+${((percentageMore/100)*state.finalPremium)} ${state.clientCountryCode} , ${percentageMore}%`
        }
      }

      return {
        state,
        routeBack,
        order: computed(() => clientOrder.value),
        recordClientOrder,
        packages,
        countries,
        calculatePremium,
        func_morePremium
      }
    }
  })

</script>

<style scoped>
  .container {
    width: 35%;
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

