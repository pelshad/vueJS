<template>
    <h1>너의 이름은 홍길동입니다.</h1>
    <input type="number" v-model.number="numberModel">
    {{printNumber}}<!-- computed 사용단 -->
    <div>
        <label>여성<input type="radio" v-model.number="gender" value="0"></label>
        <label>남성<input type="radio" v-model.number="gender" value="1"></label>
    </div>
    <div>{{gender}}</div>
    <div>{{printGender}}</div>
    <hr>

    <!--html 출력-->
    <div>
        <div>{{htmlString}}</div> <!--글 내용부가 그대로 찍힘-->
        <div v-html="htmlString"></div><!-- html의 태그 형태로 출력-->
    </div>

    <hr>
    
    <div>
        <!--<textarea> {{message}} </textarea> 에러터짐-->
        <textarea v-model="message"></textarea> <!--v-model형태로 사용해야됨-->
    </div>

    <hr>
    <h3>{{value}}{{city}}</h3>
    <select v-model="city">
        <option value="02">서울</option>
        <option value="21">부산</option>
        <option value="064">제주</option>
    </select>

    <hr>
    <h3>농구 : {{basketball}} 축구 : {{football}}</h3>
    <label> <input type="checkbox" v-model="basketball">농구</label>
    <label> <input type="checkbox" v-model="football"
            true-value="선택됨" false-value="선택안됨">축구</label>

    <hr>
    <div>
        <!--1번칸이 빈칸이거나 1번과 2번이 내용이 다르면 활성화 막기-->
        <input type="text" v-model="textValue1">
        <br>
        <input type="text" v-model="textValue2">
        <br>
        <button type="button" v-bind:disabled="textValue1 === '' || textValue1 !== textValue2">전송</button>
    </div>
    <hr>
        <!--클래스 추가 바인드-->
    <div>
        <div class="container" :class="{'active' : isActive, 'text-red': hasError}"> <!--v-bind 축약형 :-->
            Class Binding
        </div>
        <div class="container" :class="[activeClass, errorClass]"> <!-- 배열형으로 클래스 지정 ver1 -->
            Class Binding2
        </div>
        <div class="container" :class="clsArr"> <!--배열형으로 클래스 지정 ver2-->
            Class Binding2
        </div>
    </div>
    <hr>
    <div>
        <div :style="styleObj">인라인 스타일 바인딩</div>
    </div>
</template>
<style>
    .container{width: 100%; height:200px;}
    .active{ background-color: rgb(225, 255, 200); font-weight: bold;}
    .text-red{ color: rgb(255, 106, 106);}
    .active2{ background-color: rgb(200, 201, 255); font-weight: bold }
    .text-white{ color: rgb(255, 255, 255);}
</style>

<script>
export default {
    data(){
        return {
            styleObj:{
                color:'red',
                fontSize: '16px' //캐스케이딩 방식에서 카멜케이스 방식으로 바꿔서 적어야됨
            },
            clsArr: ['active', 'text-white'],
            isActive: true,
            hasError:true,
            activeClass: 'active2',
            errorClass: 'text-white',
            numberModel: 3,
            gender: 0,
            htmlString: '<p style="color:red">This is a red string</p>',
            message: 'textarea입니다.',
            city: '064', //select단에 기본값으로 잡혀있음,
            basketball: false,
            football: '선택안됨',
            textValue2: '',
            textValue1 : '',
        }
    },

    computed : { //값이 바뀌면 연산하여 반환
    printNumber(){
        return this.numberModel + 3;
       },
    printGender(){
        return this.gender == 0 ? '여성' : '남성';
    }
    }
}
</script>

