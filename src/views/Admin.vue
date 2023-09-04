<template>
    <header>
        <Navbar />
    </header>
    <div class="container p-4">
        <div class="row row-cols-2">
            <router-link :to="{ name: 'Category' }">
                <button class="btn btn-dark col">Categorías</button>
            </router-link>
            <router-link :to="{ name: 'Product' }">
                <button class="btn btn-secondary col">Productos</button>
            </router-link>
            <router-link :to="{ name: 'Category' }">
                <button class="btn btn-warning col">Building...</button>
            </router-link>
            <router-link :to="{ name: 'Category' }">
                <button class="btn btn-warning col">Building...</button>
            </router-link>
        </div>
    </div>
    <footer>
        <Footer />
    </footer>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from '@/components/Footer.vue';
export default {
    name: "Admin",
    components: { Navbar, Footer },
    data() {

    }
};
</script>

<style scoped>
.btn {
    margin-bottom: 25px;
    padding-top: 50px;
    padding-bottom: 50px;
}
</style>
  