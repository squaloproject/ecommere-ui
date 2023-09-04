<template>
    <header>
        <Navbar />
    </header>
    <div class="container">
        <div class="row">
            <div class="col-12 justify-content-center d-flex pt-3">
                <div id="signup" class="flex-item">
                    <h2 class="pt-4 pl-4">Crear cuenta</h2>
                    <form @submit="signup" class="pt-4 pl-4 pr-4">
                        <div class="form-group">
                            <label for="Email">Email</label>
                            <input type="email" v-model="email" class="form-control" required />
                        </div>
                        <div class="form-row">
                            <div class="col">
                                <div class="form-group">
                                    <label>Nombre</label>
                                    <input type="text" v-model="firstName" class="form-control" required />
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label>Apellidos</label>
                                    <input type="text" v-model="lastName" class="form-control" required />
                                </div>
                            </div>
                        </div>
                        <!-- Password -->
                        <div class="form-group">
                            <label for="Password">Contraseña</label>
                            <input type="password" v-model="password" class="form-control" required />
                        </div>
                        <!-- Repetir password -->
                        <div class="form-group">
                            <label for="Password">Repetir contraseña</label>
                            <input type="password" v-model="confirmPassword" class="form-control" required />
                        </div>
                        <button class="btn btn-primary mt-2">Crear cuenta</button>
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
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: "Signup",
    components: { Navbar, Footer },
    data() {
        return {
            email: null,
            firstName: null,
            lastName: null,
            password: null,
            confirmPassword: null
        }
    },
    props: ["baseURL"],
    methods: {
        async signup(e) {
            e.preventDefault();
            if (this.password === this.confirmPassword) {
                // call signup api
                const user = {
                    email: this.email,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    password: this.password,
                    confirmPassword: this.confirmPassword
                };
                console.log('user', user);
                await axios.post(`${this.baseURL}user/signup`, user)
                    .then(() => {
                        this.$router.replace("/");
                        swal({
                            text: "Registro completado, inicia sesión",
                            icon: "success"
                        });
                    })
                    .catch(err => console.log('err', err));
            } else {
                swal({
                    text: "Las contraseñas no coinciden",
                    icon: "error"
                });
            }
        }
    }
};
</script>
  
<style scoped>
.btn-primary {
    background-color: #f0c14b;
    color: #000;
}
</style>
  