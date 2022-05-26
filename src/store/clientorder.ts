import { ref,computed } from 'vue';

  interface Order {
    name: string,
    age: number,
    clientCountry: string,
    clientCountryCode: string,
    package: string,
    premium:number
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

