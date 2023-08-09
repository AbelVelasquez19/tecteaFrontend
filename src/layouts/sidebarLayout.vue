<template>
    <div class="sidebar">
        <div class="sidebar-content">
            <a href="#" class="sidebar-brand">
                <span class="sidebar-brand-text">
                    Admin TecTea
                    <sup>
                        <small class="bg-primary text-uppercase">Pro</small>
                    </sup>
                </span>
            </a>
            <div class="sidebar-user">
                <div class="sidebar-user-content">
                    <div class="sidebar-user-logo">
                        <img class="me-1" src="../assets/images/logo/avatar.jpg" alt="logo-tectea">
                    </div>
                    <div class="sidebar-user-detalle ps-2">
                        <a href="#" class="sidebar-user-title dropdup-toggle-after">Abel Velasquez</a>
                        <div class="sidebar-user-subtitle">
                            Full stack
                        </div>
                    </div>
                </div>
            </div>
            <ul class="sidebar-nav">
                <li class="sidebar-header"> Pages</li>
                <li class="sidebar-item active">
                    <a href="#" class="sidebar-link dropdup-toggle-sidebar-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders align-middle"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
                        <span class="align-middle">Dashboard</span>
                    </a>
                    <ul class="sidebar-dropdown list-unstyled" style="display:block">
                       <li class="sidebar-item active">
                            <router-link :to="{name:'Person'}" class="sidebar-link">Reportes</router-link>
                            <!-- <a href="#" class="sidebar-link">
                                Reportes
                            </a> -->
                        </li> 
                       <li class="sidebar-item">
                            <a href="#" class="sidebar-link">
                                Reporte de Ventas
                            </a>
                        </li> 
                    </ul>
                </li>
                <li class="sidebar-item">
                    <a href="#" class="sidebar-link dropdup-toggle-sidebar-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layout align-middle"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                        <span class="align-middle">Configuración</span>
                    </a>
                    <ul class="sidebar-dropdown list-unstyled" style="display:none">
                       <li class="sidebar-item active">
                            <a href="#" class="sidebar-link">
                                Reportes
                            </a>
                        </li> 
                       <li class="sidebar-item">
                            <a href="#" class="sidebar-link">
                                Reporte de Ventas
                            </a>
                        </li> 
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts" setup>

</script>
<style src="./sidebar.scss" lang="scss" scoped />