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
                           <label for="txtUSER_NAME" class="form-label-tec">Nombre Completo</label> 
                           <input type="text" id="txtUSER_NAME" class="form-control-tec" placeholder="Introduce tu nombre completo">
                        </div>
                        <div class="form-colum-tec  mt-1">
                           <label for="txtUSER_NAME" class="form-label-tec">Correo electrónico</label> 
                           <input type="text" id="txtUSER_NAME" class="form-control-tec" placeholder="Introduce tu correo electrónico">
                        </div>
                        <div class="form-colum-tec mt-1">
                           <label for="txtUSER_NAME" class="form-label-tec">Contraseña</label> 
                           <input type="text" id="txtUSER_NAME" class="form-control-tec" placeholder="Ingresar tu contraseña">
                        </div>
                        <div class="form-colum-tec mt-1">
                            <button type="submit" class="btn-primary-tec">Iniciar Sesión</button>
                        </div>
                        <div class="form-colum-tec">
                            <span>¿Ya tienes cuenta? <router-link to="/login">Iniciar Sesión</router-link></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
    import router from '@/router';
</script>

<style src="./login.scss" lang="scss" scoped />