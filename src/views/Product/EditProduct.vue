<template>
    <header>
        <Navbar />
    </header>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3">Editar producto</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form v-if="product">
                    <div class="form-group">
                        <label>Categoría</label>
                        <select class="form-control" v-model="product.categoryId" required>
                            <option v-for="category of categories" :key="category.id" :value="category.id">{{ category.categoryName }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Nombre</label>
                        <input type="text" class="form-control" v-model="product.name" required>
                    </div>
                    <div class="form-group">
                        <label>Descripción</label>
                        <input type="text" class="form-control" v-model="product.description" required>
                    </div>
                    <div class="form-group">
                        <label>Imagen URL</label>
                        <input type="text" class="form-control" v-model="product.imageUrl" required>
                    </div>
                    <div class="form-group">
                        <label>Precio</label>
                        <input type="number" class="form-control" v-model="product.price" required>
                    </div>
                    <button type="button" class="btn btn-primary" @click="editProduct">Actualizar</button>
                </form>
            </div>
            <div class="col-3"></div>
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
    name: "EditProduct",
    components: { Navbar, Footer },
    data() {
        return {
            category: null,
            id: null
        }
    },
    props: ["baseURL", "categories", "products"],
    methods: {
        async editProduct() {
            delete this.category["products"]
            console.log('product', this.product)
            await axios.post(`${this.baseURL}/product/update/${this.id}`,
                this.product)
                .then(() => {
                    this.$emit("fetchData");
                    this.$router.push({ name: 'Product' });
                    swal({
                        text: "El producto ha sido actualizado con éxito",
                        icon: "success"
                    })
                }).catch(err => console.log('err', err));
        }
    },
    mounted() {
        this.id = this.$route.params.id;
        this.product = this.products.find(product => product.id == this.id)
    }
};
</script>