<template>
    <div>
        <div>
            <h1>EventClick</h1>
            <button type="button" @click="increaseCnt(); printConsole()">Add 1</button>
            <p> the counter is : {{cnt}} </p>
        </div>
        <div>
            <select v-model="selectedValue" @change="chageSelect">
                <option>서울</option>
                <option>부산</option>
                <option>대구</option>
                <option>제주</option>
            </select>
        </div>
        <div>
            {{txtVal}}
            <input type="txtVal" v-model="txtVal" @keyup.enter="changeTxtVal">
            <div class="creDiv"></div>
            <button @click="removeP">P 지우기</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            txtVal:'',
            selectedValue: '',
            cnt: 0
        }
    },
    methods:{
        increaseCnt(){
            this.cnt++;
        },
        printConsole(){
            console.log(this.cnt);
        },
        chageSelect(){
            alert(`${this.selectedValue}을(를) 선택하였습니다.`);
        },
        changeTxtVal(){
            console.log(this.txtVal);
            const creDiv = document.querySelector('.creDiv');
            const newDiv = document.createElement('p');
            newDiv.innerText = `${this.txtVal}`
            creDiv.append(newDiv);
            this.txtVal = '';
            
        },
        removeP(){
            const creDiv = document.querySelector('.creDiv');
            creDiv.remove('p');
            }
        
    }
}
</script>

<style>

</style>