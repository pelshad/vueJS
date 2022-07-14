
<!--데일리, 위클리에서 공통으로 사용되는 테이블을 분리하여-->
<template>
  <table>
            <thead>
                <tr>
                    <th>순위</th>
                    <th>제목</th>
                    <th>개봉일</th>
                    <th>누적관객수</th>
                    <th>누적매출액</th>
                </tr>
            </thead>
            <tbody>
                <rank-row :items="item" v-for="(item) in list" :key="item.movieCd" />
            </tbody>
        </table>
</template>

<script>
import RankRow from './RankRow.vue'
export default {
    components:{
        RankRow
    },
    props:{
        list: Array, //list는 tr의 list, :는 타입을 입력( 지금은 Array ),
    },
    mothods:{
        
    }
}
</script>

<style>

</style>