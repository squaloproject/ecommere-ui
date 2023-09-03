<template>
    <header>
        <Navbar />
    </header>
    <div class="container p-4">
        <router-link :to="{name: 'Category'}">
            <button class="btn btn-primary btn-lg">Mis Categorías</button>
        </router-link>

        <router-link :to="{name: 'Product'}">
            <button class="btn btn-primary btn-lg">Mis Productos</button>
        </router-link>
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
    margin-bottom: 20px;
}
</style>
  