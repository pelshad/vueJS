export default{//외부에 import하기 위해 사용, export를 빼면 해당 페이지에서만 스코프를 가짐
    getTimeStamp: function(date){ //date 파라미터는 Date객체
        date.setHours(date.getHours() + 9);
        return date.toISOString().replace('T', ' ').substring(0, 19);
    }
}