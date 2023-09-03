<template>
    <header>
        <Navbar />
    </header>
    <div class="container">
        <div class="row">
            <div class="col-md-1"></div>

            <div class="col-md-4 col-12">
                <img :src="product.imageURL" class="img-fluid">
            </div>
            <div class="col-md-6 col-12 pt-3 pt-md-0">
                <h4>{{ product.name }}</h4>
                <h6 class="category font-italic">{{ category.categoryName }}</h6>
                <h6 class="font-weight-bold">{{ product.price }} €</h6>
                <p>
                    {{ product.description }}
                </p>
                <div class="features pt-3">
                    <h5><strong>Características</strong></h5>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <Footer />
    </footer>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: "ShowDetails",
    components: { Navbar, Footer },
    data() {
        return {
            product: {},
            category: {}
        }
    },
    props: ["baseURL", "products", "categories"],
    mounted() {
        this.id = this.$route.params.id;
        this.product = this.products.find((product) => product.id == this.id);
        this.category = this.categories.find(category => category.id == this.product.categoryId);
    }
};
</script>
  
<style>
    .category {
        font-weight: 400;
    }
</style>