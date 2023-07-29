import { defineStore } from 'pinia'
const useAuth = defineStore('auth',{
    state: () => {
        return {
            token: null,
            baseUrl: 'http://127.0.0.1:8000/api'
        }
    },
    actions:{
        async register(persCodigo:number, email:string, password:string){
            try {
                const url = `${this.baseUrl}/create/user`;
                const rowResponse = await fetch(url,{
                    method:'POST',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({
                        'PERS_CODIGO': persCodigo,
                        'USUA_USERNAME': email,
                        'USUA_PASSWORD': password
                    })
                });

                const response = await rowResponse.json();
                console.log(response);
                return;
                if(response.status == false){
                    return false;
                }else{
                    this.token = response.token;
                    return true;
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