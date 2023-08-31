<template>
    <header>
        <Navbar />
    </header>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3 class="pt-3">Mis productos</h3>
                <router-link :to="{ name: 'AddProduct' }">
                    <button class="btn btn-secondary" style="float: right">Añadir nuevo producto</button>
                </router-link>
            </div>
        </div>
        <div class="row">
            <div v-for="product of products" :key="product.id" class="col-md-6 col-xl-4 col-12 pt-3 d-flex">
                <ProductBox :product="product"></ProductBox>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import ProductBox from '@/components/ProductBox.vue';
export default {
    name: "Product",
    props: ["products"],
    components: { Navbar, ProductBox },
    data() {
        return {
            baseURL: "https://limitless-lake-55070.herokuapp.com",
        };
    }
};
</script>