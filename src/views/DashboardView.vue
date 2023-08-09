<template>
    <div class="wrapper">
        <sidebarLayout />
        <div class="main">
            <navbarLayout />
            <main class="content">
                <slot></slot>
            </main>
            <footerLayout />
        </div>
    </div>
</template>
<script lang="ts" setup>
    import sidebarLayout from '../layouts/sidebarLayout.vue'
    import navbarLayout from '../layouts/navbarLayout.vue'
    import footerLayout from '../layouts/footerLayout.vue'
</script>
<style src="./dashboard.scss" scoped lang="scss"/>