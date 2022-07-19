<template>
<<<<<<< HEAD
    <main class="mt-3">
        <div class="container">
            <div class="float-end mb-1">
                <router-link class="nav-link" to="/create">
                <button type="button" class="btn btn-dark">상품등록</button>
                </router-link>
            </div>
        </div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th></th>
                    <th>제품명</th>
                    <th>제품가격</th>
                    <th>배송비</th>
                    <th>추가 배송비</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr :key="item.id" v-for="item in productList" >
                    <td></td>
                    <td>{{item.product_name}}</td>
                    <td>{{item.product_price}}</td>
                    <td>{{item.delivery_price}}</td>
                    <td>{{item.add_delivery_price}}</td>
                    <td>
                        <router-link class="nav-link" :to="{path: '/image_insert', query: {product_id: item.id} } ">
                        <button type="button" class="btn btn-info me-1"><i class="fa-solid fa-cat"></i></button>
                        </router-link>
                        <router-link class="nav-link" :to="{path: '/update', query: {product_id: item.id} }">
                        <button type="button" class="btn btn-warning me-1"><i class="fa-solid fa-paw"></i></button>
                        </router-link>
                        <button type="button" class="btn btn-danger me-1"><i class="fa-solid fa-paw"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </main>
=======
    <h1>SalesList</h1>
>>>>>>> 082fbdad9ba574456689a2b7fa13163662a2a2ae
</template>

<script>
export default {
<<<<<<< HEAD
data() {
    return {
        productList:[]
    };
    },
    created() {
    this.productList2();//this < data에 있는 걸 사용
    },
    methods: {
    async productList2() {
        const productList2 = await this.$get('/api/productList2', {});
        this.productList = productList2
        }
    }
=======

>>>>>>> 082fbdad9ba574456689a2b7fa13163662a2a2ae
}
</script>

<style>
<<<<<<< HEAD
    i{color:white};
=======

>>>>>>> 082fbdad9ba574456689a2b7fa13163662a2a2ae
</style>