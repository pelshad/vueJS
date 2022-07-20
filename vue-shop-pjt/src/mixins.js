import axios from 'axios';

export default {
    methods: {
        async $post(url, param) {
            return (await axios({
                method: 'post',
                url,
                data: param  //post 방식으로 보낼때 사용
            }).catch(e => {
                console.error(e);
            })).data;
        },

        async $get(url, param) {
            return (await axios.get(url, {
                params: param //get 방식으로 보낼때 사용
            }).catch(e => {
                console.error(e);
            })).data;
        },

        async $delete(url, param) {
            return (await axios(url, {
                method: 'DELETE',
                params: param
            }).catch(e => {
                console.error(e);
            })).data;
        },

        $base64(file) {
            return new Promise(resolve => {
                const fr = new FileReader();
                fr.onload = e => {             //로딩이 끝나면 e 실행
                    resolve(e.target.result);  //파일 로드의 결과값
                }
                fr.readAsDataURL(file);        //imageInsert의 101line image에 값이 들어간다.
            });
        }
    }
}