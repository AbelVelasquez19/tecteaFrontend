<template>
    <div class="navbar">
        <a href="#" class="sidebar-toggle">
            <i>=</i>
        </a>
        <form class="d-none d-sm-inline-block">
            <div class="input-group input-group-navbar">
                <input type="text" class="form-control" placeholder="Search…" aria-label="Search">
                <button class="btn" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search align-middle"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </button>
            </div>
        </form>
        <div class="navbar-collapse">
            <ul class="navbar-nav navbar-align">
                <li class="nav-item dropdown">
                    <a class="nav-icon dropdown-toggle" href="#">
                        <img class="me-1" style="width: 100%;" src="../../assets/images/logo/avatar.jpg" alt="logo-tectea">
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts" setup>

</script>
<style src="./navbar.scss" lang="scss" scoped />