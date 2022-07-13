<template>
    <div>
        <h1>DataBinding</h1>
        <!-- Methods를 활용-->
        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>카테고리</th>
                    <th>배송료</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, idx) in productList" :key="idx"> 
                <!--vue에서 for문 돌릴때, :key값이 반드시 필요하다, for문이 돌때 id값을 부여하는데 key기준으로 쏴줌-->
                <td>{{item.product_name}}</td>
                <td>{{numberComma(item.price)}}</td> <!--methods에 천 단위당 ,기능 추가-->
                <td>{{item.category}}</td>
                <td>{{numberComma(item.delivery_price)}}</td>

                </tr>
            </tbody>
        </table>
        <hr>
        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>카테고리</th>
                    <th>배송료</th>
                </tr>
            </thead>
            <tbody>
                <product-item :item="item" v-for="(item, idx) in productList" :key="idx" />>
                <!-- :item="item"에서 :item이 ProductItem의 item이된다, 
                    "item"은 v-for="(item)에 해당" -->
            </tbody>
        </table>
    </div>
</template>

<script>
import ProductItem from '../components/ProductItem.vue';
export default {
    components:{ ProductItem },
    methods:{
        numberComma(num) {
            return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    },
    data(){
        return{
            productList:[
                {
                    product_name:'fender original tele 60s',
                    price: 3000000,
                    category: 'Guitar',
                    delivery_price: 'none'
                },
                {
                    product_name: 'PRS',
                    price: 2000000,
                    category: 'Guitar',
                    delivery_price: 2500
                },
                {
                    product_name: '튜너',
                    price: 23000,
                    category: 'Acc',
                    delivery_price: 2500
                },
                {
                    product_name: '엘릭서 스트링',
                    price: 18000,
                    category: 'String',
                    delivery_price: 2500
                },
            ]
        }
    }
}
</script>

<style>
table { font-family: arial, sans-serif; border-collapse: collapse; width:100%}
td, th{border:1px solid #ddd; text-align: left; padding: 8px}
</style>