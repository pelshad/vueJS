<template>
<<<<<<< HEAD
    <main class="mt-3">
        <div class="container">
            <h2 class="text-center">제품 사진 등록</h2>

            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">제품 ID</label>
                <div class="col-md-9">{{ productId }}</div>
            </div>

            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">제품명</label>
                <div class="col-md-9">{{ productDetail.product_name }}</div>
            </div>

            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">섬네일 이미지</label>
                <div class="col-md-9">
                    <div class="row">
                        TODO: 섬네일 이미지 리스트 가져오는 로직 후 구현
                    </div>

                    <input type="file" class="form-control" accept="image/png, image/jpeg" @change="uploadFile($event.target.files, 1)">
                    <div class="alert alert-secondary" role="alert">
                        <ul>
                            <li>이미지 사이즈 : 350 * 350</li>
                            <li>파일 사이즈 : 1Mb 이하</li>
                            <li>파일 확장자 : png, jpg만 가능</li>
                        </ul>
                    </div>

                </div>
            </div>

            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">제품 이미지</label>
                <div class="col-md-9">
                    <div class="row">
                        TODO: 제품 이미지 리스트 가져오는 로직 후 구현
                    </div>

                    <input type="file" class="form-control" accept="image/png, image/jpeg" @change="uploadFile($event.target.files, 2)">
                    <div class="alert alert-secondary" role="alert">
                        <ul>
                            <li>최대 5개 가능</li>
                            <li>이미지 사이즈 : 700 * 700</li>
                            <li>파일 사이즈 : 1Mb 이하</li>
                            <li>파일 확장자 : png, jpg만 가능</li>
                        </ul>
                    </div>

                </div>
            </div>

            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">제품설명 이미지</label>
                <div class="col-md-9">
                    <div class="row">
                        TODO: 제품설명 이미지 리스트 가져오는 로직 후 구현
                    </div>

                    <input type="file" class="form-control" accept="image/png, image/jpeg" @change="uploadFile($event.target.files, 3)">
                    <div class="alert alert-secondary" role="alert">
                        <ul>
                            <li>파일 사이즈 : 5Mb 이하</li>
                            <li>파일 확장자 : png, jpg만 가능</li>
                        </ul>
                    </div>

                </div>
            </div>

            <div class="mb-3 row m-auto">
                <router-link class="nav-link" to="/sales">
                <button type="button" class="btn btn-lg btn-dark">확인</button>
                </router-link>
            </div>

        </div>
    </main>
=======
    <h1>ImageInsert</h1>
>>>>>>> 082fbdad9ba574456689a2b7fa13163662a2a2ae
</template>

<script>
export default {
<<<<<<< HEAD
    data(){
        return{
            productId:0,
            productName: '',
            productDetail:{},
            productImage:[]
        }
    },
    created() {
        this.productId = this.$route.query.product_id;
        this.getProductDetail();
    },

    methods: {
        async getProductDetail() {
            this.productDetail = await this.$get(`/api/productDetail/${this.productId}`,{});
            console.log(productDetail);
        }
    }
=======

>>>>>>> 082fbdad9ba574456689a2b7fa13163662a2a2ae
}
</script>

<style>

</style>