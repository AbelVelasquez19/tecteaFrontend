import { defineStore } from 'pinia'
const useAuth = defineStore('auth',{
    state: () => {
        return {
            token: null,
            baseUrl: 'http://127.0.0.1:8000/api',
        }
    },
    actions:{
        async register(documento:string, nombre:string,email:string, password:string){
            try {
                const url = `${this.baseUrl}/create/user`;
                const rowResponse = await fetch(url,{
                    method:'POST',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({
                        'PERS_DOCUMENTO': documento,
                        'PERS_NOMCOM': nombre,
                        'USUA_USERNAME': email,
                        'USUA_PASSWORD': password
                    })
                });
                const response = await rowResponse.json();
                let result:any[] = [];
                if(response['STATUS'] != 0){
                    if(response.DATA.STATUS == 0){
                        this.token = null;
                        return result = [{'error' : 0,'smg':'error'}];
                    }else{
                        this.token = response.DATA.TOKEN;
                        return result = [{'error':1,'msg':'ok'}];
                    }
                }else{
                    return result = [{'error':2, 'msg':response['ERROR']}];
                }
               
            } catch (error) {
                console.log(error);
            }
        },
        async login(email:string, password:string) {
            try {
                const url = `${this.baseUrl}/login`;
                const rowResponse = await fetch(url,{
                    method:'POST',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({
                        'USUA_USERNAME': email,
                        'USUA_PASSWORD': password
                    })
                });
                const response = await rowResponse.json();
                let result:any[] = [];
                if(response['STATUS'] != 0){
                    if(response.DATA.STATUS == 0){
                        this.token = null;
                        return result = [{'error' : 0, 'smg':'error'}];
                    }else{
                        this.token = response.DATA.TOKEN;
                        return result = [{'error':1,'msg':'ok'}];
                    }
                }else{
                    return result = [{'error':2, 'msg':response['ERROR']}];
                }
            } catch (error) {
                console.log(error);
            }
        },
        async getListUser(){
            try {
                const url = `${this.baseUrl}/list/user`;
                const rowResponse = await fetch(url,{
                    method:'POST',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json',
                        'Authorization':`Bearer ${this.token}`,
                    },
                });
                const response = await rowResponse.json();
                
            } catch (error) {
                console.log(error);
            }
        },
        async updateInfoUser() {
            //falta pensar
        }
    }
});

export default useAuth;