<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3 class="pt-3">Añadir Categoría</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form>
                    <div class="form-group">
                        <label>Nombre</label>
                        <input type="text" class="form-control" v-model="categoryName">
                    </div>
                    <div class="form-group">
                        <label>Descripción</label>
                        <textarea type="text" class="form-control" v-model="description"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Imagen</label>
                        <input type="text" class="form-control" v-model="imageUrl">
                    </div>
                    <button type="button" class="btn btn-primary" @click="addCategory">Enviar</button>
                </form>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import sweetalert from 'sweetalert';
export default {
    data() {
        return {
            categoryName: "",
            description: "",
            imageUrl: ""
        }
    },
    methods: {
        addCategory() {
            console.log(this.categoryName, this.description);
            const newCategory = {
                categoryName: this.categoryName,
                description: this.description,
                imageUrl: this.imageUrl,
            };

            const baseURL = "https://limitless-lake-55070.herokuapp.com";

            axios({
                method: "post",
                url: `${baseURL}/category/create`,
                data: JSON.stringify(newCategory),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(() => {
                    sweetalert({
                        text: "Categoría añadida con éxito",
                        icon: "success",
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
};
</script>

<style scoped></style>
  