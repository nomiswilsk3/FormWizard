<script setup lang="ts">
  import { ref } from 'vue';

  interface Props {
    label: string,
    input_type?: string,
    min?: number,
    max?: number,
    placeholder?: string,
  }

  const props = defineProps<Props>()
  const emit = defineEmits(['input'])

  let inputValue = ref<String | null>()

</script>

<template>
  <div>
    <label>{{props.label}}</label>
    <input 
      :type="props.input_type || 'text'"
      :min="props.min"
      :max="props.max"
      :placeholder="(props.placeholder)? props.placeholder :''" 
      v-model="inputValue" @input="() => emit('input',inputValue)"
    />
  </div>
</template>

<style scoped>
  label {
    text-align: left !important;
    float: left;
  }
  input{
    height:25px;
    border:0px;
    width: 95%;
    border:  1px solid rgb(209, 202, 202);
    margin-bottom:10px
  }
</style>