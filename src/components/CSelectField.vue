<script setup lang="ts">
  import { ref } from 'vue';

  interface Country {
        code:string,
        name:string
    }

  interface Props {
    label: string,
    option_values: Country []
  }

  const props = defineProps<Props>()
  const emit = defineEmits(['change'])

  let inputValue = ref<String | null>()

  let selectedCountryInfo = () =>{
    
    emit('change',inputValue)
  }

</script>

<template>
  <div>
    <label>{{props.label}}</label>
    <select v-model="inputValue" 
      @change="(e) => selectedCountryInfo()"
    >
      <option 
        v-for="prop, in props.option_values" 
        :key="prop.code" 
        :value="prop.code">{{prop.name}}
      </option>
    </select>
  </div>
</template>

<style scoped>
  label {
    text-align: left !important;
    float: left;
  }
  select{
    height:30px;
    border:0px;
    width: 100%;
    border:  1px solid rgb(209, 202, 202);
    margin-bottom:10px;
    background-color: #ffffff;
  }
</style>