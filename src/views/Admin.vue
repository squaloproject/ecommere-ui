<template>
    <router-link :to="{name: 'Category'}">
        <button class="btn btn-primary btn-lg">Mis Categorías</button>
    </router-link>

    <router-link :to="{name: 'Category'}">
        <button class="btn btn-primary btn-lg">Mis Productos</button>
    </router-link>
</template>

<script>
export default {

}
</script>

<style scoped>
.btn {
    margin-bottom: 20px;
}
</style>