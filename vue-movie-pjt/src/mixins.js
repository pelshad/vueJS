import axios from 'axios';

export default {
    data(){
        return {
            key: '590b052e12ed1ab2a7bba684f594a247',
            baseUrl: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/',
            boxOfficeByDay : 'boxoffice/searchDailyBoxOfficeList.json',
            boxOfficeByWeek : 'boxoffice/searchWeeklyBoxOfficeList.json'
        }
    },
    methods:{
        async $api(url, parameter){
            return (
                //axios 통신의 결과물
                await axios.get(url,{ 
                params: parameter
            }).catch(e => {
                console.log(e);
            })).data; //(await axios.g ... })) -> 객체, .data;
        },
        async getBoxOfficeByDay(targetDt){
            const parameter ={
                key: this.key,
                targetDt
            }
            const url = this.baseUrl + this.boxOfficeByDay;
            return await this.$api(url, parameter);
        },
        async getBoxOfficeByWeek(targetDt){
            const parameter ={
                key: this.key,
                targetDt
            }
            const url = this.baseUrl + this.boxOfficeByWeek;
            return await this.$api(url, parameter);
        },
        getOnlyDateStr(date){
            return date.toISOString().split('T')[0];
        },
    }
}