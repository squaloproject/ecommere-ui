<template>
    <header>
        <Navbar />
    </header>
    <div class="container">
        <div class="row">
            <div class="col-12 text-left">
                <h3 class="pt-3">Mi Carrito</h3>
            </div>
        </div>
        <!-- Display card items -->
        <div v-for="cartItem in cartItems" :key="cartItem.id" class="row mt-2 pt-3">
            <div class="col-2"></div>
            <div class="col-md-3">
                <img :src="cartItem.product.imageURL" class="w-100 card-image-top embed-responsive-16by9"
                    style="object-fit: cover">
            </div>
            <!-- Display product name, quantity -->
            <div class="col-md-5 px-3">
                <div class="card-block px-3">
                    <h6 class="card-title">
                        {{ cartItem.product.name }}
                    </h6>
                    <p class="mb-0 font-weight-bold" id="item-price">
                        {{ cartItem.product.price }} €
                    </p>
                    <p class="mb-0">
                        Cantidad: {{ cartItem.quantity }}
                    </p>
                </div>
                <p class="mb-0">
                    Total: <span class="font-weight-bold">{{ cartItem.product.price * cartItem.quantity }} €</span>
                </p>
            </div>
            <div class="col-2"></div>
            <div class="col-12">
                <hr>
            </div>
        </div>
        <!-- Display price -->
        <div class="total-cost pt-2 text-right">
            <h5>Total: {{ totalCost }} €</h5>
        </div>
    </div>
    <footer>
        <Footer />
    </footer>
</template>

<script>
import axios from "axios";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
    name: "Cart",
    components: { Navbar, Footer },
    data() {
        return {
            cartItems: [],
            token: null,
            totalCost: 0
        };
    },
    props: ["baseURL"],
    methods: {
        listCartItems() {
            axios.get(`${this.baseURL}cart/?token=${this.token}`)
                .then((res) => {
                    const result = res.data;
                    this.cartItems = result.cartItems;
                    this.totalCost = result.totalCost;
                }).catch((err) => console.log("err", err));
        }
    },
    mounted() {
        this.token = localStorage.getItem("token");
        this.listCartItems();
    }
};
</script>
  