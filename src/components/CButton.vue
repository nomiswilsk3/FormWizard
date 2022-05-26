<script setup lang="ts">

  interface Props {
    displayText: String,
    cssClass?: String
  }

  const props = defineProps<Props>()
  const emit = defineEmits(['click'])

</script>

<template>
  <div>
    <button 
      :class="(props.cssClass)? props.cssClass: 'btn-black-bg'" 
      @click="(e) => emit('click',e)">
      {{props.displayText}}
    </button>
  </div>
</template>

<style scoped>
  button{
    height:30px;
    border:0px;
    min-width: 60px;
    font-size:14px;
    cursor:pointer;
  }
  .btn-black-bg{
    color: #ffffff;
    background-color: #1a1a1a;
  }
  .btn-red-bg{
    color: #ffffff;
    background-color: #e42020;
  }
  .btn-white-bg{
    color: #1a1a1a;
    background-color: #ffffff;
    border:  1px solid rgb(209, 202, 202);
  }
</style>