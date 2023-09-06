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
                <div class="d-flex flex-row justify-content-between">
                    <div class="input-group col-md-3 col-4 p-0">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Cantidad</span>
                        </div>
                        <input type="number" class="form-control" v-model="quantity" />
                    </div>
                    <div class="input-group col-md-3 col-4 p-0">
                        <button class="btn" id="add-to-cart-button" @click="addToCart">Añadir al carrito</button>
                    </div>
                </div>
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
                <button id="wishlist-button" class="btn mr-3 p-1 py-0" @click="addToWishList()">{{ wishListString }}</button>
            </div>
        </div>
    </div>
    <footer>
        <Footer />
    </footer>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: "ShowDetails",
    components: { Navbar, Footer },
    data() {
        return {
            product: {},
            category: {},
            wishListString: "Añadir a favoritos",
            quantity: 1
        }
    },
    props: ["baseURL", "products", "categories"],
    mounted() {
        this.id = this.$route.params.id;
        this.product = this.products.find((product) => product.id == this.id);
        this.category = this.categories.find(category => category.id == this.product.categoryId);
        this.token = localStorage.getItem("token");
    },
    methods: {
        addToWishList() {
            if (!this.token) {
                swal({
                    text: "Por favor, inicia sesión para añadir productos a favoritos",
                    icon: "error"
                });
                return;
            }
            axios.post(`${this.baseURL}wishlist/add?token=${this.token}`, {
                id: this.product.id
            }).then((res) => {
                if (res.status === 201) {
                    this.wishListString = "Añadido a favoritos";
                    swal({
                        text: "Añadido a favoritos",
                        icon: "success"
                    });
                }
            }).catch((err) => {
                console.log("err", err);
            });
        },
        addToCart() {
            if (!this.token) {
                swal({
                    text: "Por favor, inicia sesión para añadir productos al carrito",
                    icon: "error"
                });
            }

            axios.post(`${this.baseURL}/cart/add?token=${this.token}`, {
                productId: this.id,
                quantity: this.quantity
            }).then((res) => {
                if (res.status == 201) {
                    swal({
                        text: "Producto añadido a la cesta",
                        icon: "success",
                    });
                }
            }).catch((err) => console.log("err", err));
        },
    },
};
</script>
  
<style>
.category {
    font-weight: 400;
}

#wishlist-button {
    background-color: #b9b9b9;
}

#add-to-cart-button {
    background-color: #febd69;
}
</style>
  