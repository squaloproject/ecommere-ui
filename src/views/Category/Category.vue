<template>
    <header>
        <Navbar />
    </header>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3 class="pt-3">Mis categorías</h3>
                <router-link :to="{ name: 'AddCategory' }">
                    <button class="btn btn-secondary" style="float: right">Añadir nueva categoría</button>
                </router-link>
            </div>
        </div>
        <div class="row">
            <div v-for="category of categories" :key="category.id" class="col-xl-4 col-md-6 col-12 pt-3 d-flex">
                <CategoryBox :category="category"></CategoryBox>
            </div>
        </div>
    </div>
    <footer>
        <Footer />
    </footer>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import CategoryBox from '@/components/Category/CategoryBox.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: "Category",
    props: ["categories"],
    components: { Navbar, CategoryBox, Footer },
    data() {
        return {
            baseURL: "https://limitless-lake-55070.herokuapp.com",
        };
    }
};
</script>