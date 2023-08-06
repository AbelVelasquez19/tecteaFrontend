<template>
    <div class="container-tec">
        <div class="container-tec-card">
            <div class="card-header">
                <img src="../../assets/images/logo/ordenador-personal.png" alt="">
                <h4>Regístrate para Iniciar sesión</h4>
            </div>
            <div class="card-body mt-4">
                <form action="#" method="post">
                    <div class="form-row-tec">
                        <div class="form-colum-tec mt-1">
                           <label for="txtUSER_NAME" class="form-label-tec">N° DNI</label> 
                           <input type="text" id="txtUSER_NAME" v-model="documento" class="form-control-tec" placeholder="Introduce tu DNI">
                           <span style="color:red">{{vali_documento}}</span>
                        </div>
                        <div class="form-colum-tec mt-1">
                           <label for="txtUSER_NAME" class="form-label-tec">Nombre Completo</label> 
                           <input type="text" id="txtUSER_NAME" v-model="name" class="form-control-tec" placeholder="Introduce tu nombre completo">
                            <span style="color:red">{{vali_nombre}}</span>
                        </div>
                        <div class="form-colum-tec  mt-1">
                           <label for="txtUSER_NAME" class="form-label-tec">Correo electrónico</label> 
                           <input type="text" id="txtUSER_NAME" v-model="email" class="form-control-tec" placeholder="Introduce tu correo electrónico">
                            <span style="color:red">{{vali_correo}}</span>
                        </div>
                        <div class="form-colum-tec mt-1">
                           <label for="txtUSER_NAME" class="form-label-tec">Contraseña</label> 
                           <input type="text" id="txtUSER_NAME" v-model="password" class="form-control-tec" placeholder="Ingresar tu contraseña">
                            <span style="color:red">{{vali_contrasena}}</span>
                        </div>
                        <div class="form-colum-tec mt-1">
                           <p style="color:red">{{feedback}}</p>
                        </div>
                        <div class="form-colum-tec mt-1">
                            <button type="submit" class="btn-primary-tec" @click.prevent="createUser">Crear cuenta</button>
                        </div>
                        <div class="form-colum-tec">
                            <span>¿Ya tienes cuenta? <router-link :to="{name:'Login'}">Iniciar Sesión</router-link></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
    import {ref} from 'vue';
    import router from '../../router';
    import useAuth from '../../store/auth';

    const store = useAuth();
    const documento = ref('');
    const name = ref('');
    const email = ref('');
    const password = ref('');
    const feedback = ref('');
    const vali_documento= ref('');
    const vali_nombre = ref('');
    const vali_correo = ref('');
    const vali_contrasena = ref('');

    const createUser = async() => {
        feedback.value = "Sending..."
        const response = await store.register(documento.value, name.value, email.value, password.value);
        if(response[0].error == 2){
            if(response[0].msg.PERS_DOCUMENTO !== undefined){
                response[0].msg.PERS_DOCUMENTO.forEach(element => {
                    vali_documento.value = element;
                });
            }else{
                vali_documento.value = ''
            }
            if(response[0].msg.PERS_NOMCOM !== undefined){
                response[0].msg.PERS_NOMCOM.forEach(element => {
                    vali_nombre.value = element;
                });
            }else{
                vali_nombre.value = '';
            }
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
            //error.PERS_DOCUMENTO.value = store.$state.error['PERS_DOCUMENTO'][0];
        }else{
            if(response[0].error == 0){
                feedback.value = "Error al registrar usuario";
            }else{
                router.push({name:'Login'})
            } 
        }
    }

</script>

<style src="./login.scss" lang="scss" scoped />