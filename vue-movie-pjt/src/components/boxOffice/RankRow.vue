<template>
    <tr>
        <td>{{items.rank}}</td>
        <td @click="getInfoNum">{{items.movieNm}}</td>
        <td v-if="items.openDt !== ' '">{{items.openDt}}, {{getDate}}요일</td>
        <td v-else></td>
        <td>{{getaudiAcc}}</td>
        <td>{{getsalesAcc}}</td>
    </tr>
</template>

<script>
export default {
    props:{
        items: Object
    },
    computed:{
        getaudiAcc(){
            return this.numberComma(this.items.audiAcc);
        },
        getsalesAcc(){
            return this.numberComma(this.items.salesAcc);
        },
        getDate(){
            return this.setDay(this.items.openDt);
        }
    },
    methods:{
        numberComma(num) {
            return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        setDay(num){
            console.log(num);
            const weeklist = ['일', '월', '화', '수', '목', '금', '토'];
            const DOW = weeklist[new Date(num).getDay()];
            return DOW;
        },
        getInfoNum(){
            const movieCd = this.items.movieCd;
            this.getData(movieCd);
        },
        //영화정보 불러오기
        async getData(movieCd){
            const infodata = await this.getboxOfficeByInfo(movieCd);
            this.infolist = infodata.movieInfoResult.movieInfo;
            //console.log(this.infolist);
        }

    }
}
</script>

<style>

</style>