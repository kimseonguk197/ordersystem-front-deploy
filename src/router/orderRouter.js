import OrderListComponet from "@/components/OrderListComponet.vue";
import OrderCart from "@/views/OrderCart.vue";

export const orderRouter = [
    {
        path: "/order/list",
        name: "OrderList",
        component: OrderListComponet
    },
    {
        path: "/order/cart",
        name: "OrderCart",
        component: OrderCart
    },
]
