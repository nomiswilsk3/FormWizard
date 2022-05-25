import { ref,computed } from 'vue';

  interface Order {
    name: string,
    age: number,
    location: string,
    package: string,
    premium:string
  }

  const clientOrder = ref<Order>()

  export default function useClientOrder() {

    function setClientOrder(order:Order) :void {
        clientOrder.value = order
    }
    return{
        clientOrder: computed(() => clientOrder.value),
        setClientOrder

    }
  }

