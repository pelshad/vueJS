<template>
    <div>
        <h1>{{title}}</h1>
        <div>
            <input type="date" v-model="selectedDate">
            <button @click="search">검색</button>
        </div>
        <rank-table :list="list"/> <!--v-vind list를 (return에 있는) list로 바인딩-->
</div>
</template>

<script>
//RankTable을 사용하기 위해 Import
import RankTable from '../components/boxOffice/RankTable.vue'; 

export default {
    components:{ //import한 RankTable을 사용
        RankTable
    },
    data(){
        return {
            title:'Weekly BoxOffice',
            selectedDate:``,
            list:[],
            weekGb:0
        }
    },
    methods:{
        search(){
            const targetDt = this.selectedDate.replaceAll('-','');
            this.getData(targetDt);
        },
        async getData(targetDt){
            const data = await this.getBoxOfficeByWeek(targetDt);
            this.list = data.boxOfficeResult.weeklyBoxOfficeList;
        }
    },
    created(){
        const d = new Date();
        d.setDate(d.getDate() - 1);
        this.selectedDate = this.getOnlyDateStr(d);
    }
}
</script>

<style scoped>

</style>