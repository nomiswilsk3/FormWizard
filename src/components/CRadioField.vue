<script setup lang="ts">
  import { ref } from 'vue';
    interface Package {
        id:string,
        name:string,
        selected:boolean
    }

  interface Props {
    label: string,
    option_values: Package [],
    callBack:(arg1: number) => number
  }

  const props = defineProps<Props>()
  const emit = defineEmits(['change'])

  let picked = ref<String | null>()

</script>

<template>
  <label 
    class="container" 
    v-for="prop in props.option_values" 
    :key="prop.id"> {{prop.name}} 
    <template v-if="prop.id !=1">({{props.callBack(prop.id)}}) </template>

    <input 
      type="radio" 
      :checked="prop.selected"
      :id="prop.id" 
      :value="prop.id" 
      v-model="picked" 
      v-on:change="(e) => emit('change',picked)">
  <span class="checkmark"></span>
</label>
</template>

<style scoped>
  .container {
    display: block;
    position: relative;
    padding-left: 0px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 15px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    background-color: #eee;
    border-radius: 50%;
    font-size: 12px;;
  }
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }
  .container input:checked ~ .checkmark {
    background-color: #3a45af;
  }
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  .container input:checked ~ .checkmark:after {
    display: block;
  }
  .container .checkmark:after {
    top: 5px;
    left: 5px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: white;
  }
</style>