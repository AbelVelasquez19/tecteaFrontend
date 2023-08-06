<template>
    <div class="container-tec">
        <div class="container-tec-card">
            <div class="card-header">
                <img src="../../assets/images/logo/ordenador-personal.png" alt="">
                <h4>Inicia sesión en tu cuenta para continuar</h4>
            </div>
            <div class="card-body mt-4">
                <form action="#" method="post" @submit.prevent="loginHandler">
                    <div class="form-row-tec">
                        <div class="form-colum-tec">
                           <label for="txtUSER_NAME" class="form-label-tec">Correo electrónico</label> 
                           <input type="text" id="txtUSER_NAME" v-model="email" class="form-control-tec" placeholder="Introduce tu correo electrónico">
                           <span style="color:red">{{vali_correo}}</span>
                        </div>
                        <div class="form-colum-tec mt-1">
                           <label for="txtUSER_NAME" class="form-label-tec">Contraseña</label> 
                           <input type="text" id="txtUSER_NAME" v-model="password" class="form-control-tec" placeholder="Ingresar tu contraseña">
                           <span style="color:red">{{vali_contrasena}}</span>
                           <a href="#">¿Has olvidado tu contraseña?</a>
                        </div>
                        <div class="form-colum-tec mt-1">
                           <p style="color:red">{{feedback}}</p>
                        </div>
                        <div class="form-colum-tec mt-1">
                            <button type="submit" class="btn-primary-tec" @click.prevent="starSesion">Iniciar Sesión</button>
                        </div>
                        <div class="form-colum-tec">
                            <span>¿No tienes cuenta? <router-link :to="{name:'Register'}">Regístrate</router-link></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
    import {ref} from 'vue'
    import router from "../../router";
    import useAuth from '../../store/auth';

    const store = useAuth();
    const email = ref('');
    const password = ref('');
    const feedback = ref('');
    const vali_correo = ref('');
    const vali_contrasena = ref('');

    const starSesion = async() => {
        const response = await store.login(email.value, password.value);
        if(response[0].error == 2){
            if(response[0].msg.USUA_USERNAME !== undefined){
                response[0].msg.USUA_USERNAME.forEach(element => {
                    vali_correo.value = element;
                });
            }else{
                vali_correo.value = '';
            }
            if(response[0].msg.USUA_PASSWORD !== undefined){
                response[0].msg.USUA_PASSWORD.forEach(element => {
                    vali_contrasena.value = element;
                });
            }else{
                vali_contrasena.value = '';
            }
             feedback.value = response[0].msg.MENSSAJE;
        }else{
            if(response[0].error == 0){
                feedback.value = 'Error al iniciar sesión';
            }else{
                router.push({name : 'Dashboard'});
            }
        }
    }
</script>

<style src="./login.scss" lang="scss" scoped />