import axios from 'axios';

export default {
    data(){
        return {
            key: '590b052e12ed1ab2a7bba684f594a247',
            baseUrl: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/',
            boxOfficeByDay : 'boxoffice/searchDailyBoxOfficeList.json',
            boxOfficeByWeek : 'boxoffice/searchWeeklyBoxOfficeList.json',
            boxOfficeByInfo : 'movie/searchMovieInfo.json'//영화 상세정보 링크
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
        async getBoxOfficeByWeek(targetDt, weekGb){
            const parameter ={
                key: this.key,
                targetDt,
                weekGb
                //api 기준 주간/주말/주중을 선택 입력,0:주간 1:주말 2:주중
            }
            const url = this.baseUrl + this.boxOfficeByWeek;
            return await this.$api(url, parameter);
        },
        //클릭시 영화 상세 정보 정보 보기 기능(RankRow와 연동)
        async getboxOfficeByInfo(movieCd){
            const parameter = {
                key: this.key,
                movieCd
            }
            const url = this.baseUrl + this.boxOfficeByInfo;
            return await this.$api(url, parameter);
        },
        //

        getOnlyDateStr(date){
            return date.toISOString().split('T')[0];
        },
    }
}