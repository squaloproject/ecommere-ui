<template>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <div class="container">
            <!-- Logo -->
            <router-link to="/">
                <img src="../assets/logo.png" class="navbar-brand">
            </router-link>
            <!-- Toggle Btn -->
            <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- SideBar -->
            <div class="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel">
                <!-- SideBar Header -->
                <div class="offcanvas-header text-dark border-bottom">
                    <img src="../assets/logo.png" class="navbar-brand offcanvas-title" id="offcanvasNavbarLabel">
                    <button type="button" class="btn-close btn-close-dark shadow-none" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <!-- SideBar Body -->
                <div class="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
                    <ul class="navbar-nav justify-content-center align-items-start fs-5 flex-grow-1 pe-3 mt-3">
                        <li class="nav-item mx-2 h6">
                            <!--<router-link :to="Category" class="nav-link"></router-link>-->
                            <a class="nav-link font-weight-bold text-decoration-none text-dark"
                                style="letter-spacing: 1px; font-size: 14px;" href="#about">HOMBRE</a>
                        </li>
                        <li class="nav-item mx-2 h6">
                            <!--<router-link :to="Category" class="nav-link"></router-link>-->
                            <a class="nav-link font-weight-bold text-decoration-none text-dark"
                                style="letter-spacing: 1px; font-size: 14px;" href="#about">MUJER</a>
                        </li>
                        <li class="nav-item mx-2 h6">
                            <!--<router-link :to="Category" class="nav-link"></router-link>-->
                            <a class="nav-link font-weight-bold text-decoration-none text-dark"
                                style="letter-spacing: 1px; font-size: 14px;" href="#about">NIÑO</a>
                        </li>
                        <li class="nav-item mx-2 h6">
                            <a class="nav-link font-weight-bold" style="letter-spacing: 1px; font-size: 14px;"
                                href="#services">NOVEDADES</a>
                        </li>
                        <li class="nav-item mx-2 h6">
                            <a class="nav-link font-weight-bold" style="letter-spacing: 1px; font-size: 14px;"
                                href="#contact">COLECCIONES</a>
                        </li>
                    </ul>
                    <!-- Login / Sign up -->
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <!-- Dropdown for browse -->
                        <!-- Dropdown for account -->
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarAccount"
                                    data-bs-toggle="dropdown">Cuenta</a>
                                <div class="dropdown-menu" aria-labelledby="navbarAccount">
                                    <router-link class="dropdown-item" :to="{ name: 'Signup' }">Crear cuenta</router-link>
                                    <router-link class="dropdown-item" :to="{ name: 'Signin' }">Iniciar sesión</router-link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <router-view />
</template>
  
<style scoped>
.navbar-brand {
    width: 85px;
}

@media screen and (max-width: 575px) {
    .navbar-brand {
        width: 60px;
        margin-left: 10px;
    }
}
</style>