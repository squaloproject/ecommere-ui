<template>
    <header>
        <Navbar />
    </header>
    <div class="container">
        <div class="row">
            <div class="col-12 justify-content-center d-flex pt-3">
                <div id="signin" class="flext-item">
                    <h2 class="pt-4 pl-4">Iniciar sesión</h2>
                    <form @submit="signin" class="pt-4 pl-4 pr-4">
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" v-model="email" class="form-control" required />
                        </div>
                        <div class="form-group">
                            <label>Contraseña</label>
                            <input type="password" v-model="password" class="form-control" required />
                        </div>
                        <button class="btn btn-primary mt-2">Continuar</button>
                    </form>
                </div>
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
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
export default {
    props: ["baseURL"],
    name: "Signin",
    components: { Navbar, Footer },
    data() {
        return {
            email: null,
            password: null,
        };
    },
    methods: {
        async signin(e) {
            e.preventDefault();
            const body = {
                email: this.email,
                password: this.password,
            };
            await axios
                .post(`${this.baseURL}user/signIn`, body)
                .then((res) => {
                    this.$router.replace("/");
                    localStorage.setItem("token", res.data.token);
                    swal({
                        text: "Inicio de sesión correcto",
                        icon: "success"
                    });
                })
                .catch(err => console.log('err', err));
        }
    }
};
</script>

<style scoped>
.btn-primary {
    background-color: #f0c14b;
    color: black;
}
</style>
  