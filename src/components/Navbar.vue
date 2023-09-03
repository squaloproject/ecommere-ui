<template>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <div class="container">
            <!-- Logo -->
            <router-link to="/">
                <img src="../assets/logo.png" class="navbar-brand" style="width: 85px;" alt="Squalo Project Logo">
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
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                        Colecciones Squalo
                    </h5>
                    <button type="button" class="btn-close btn-close-dark shadow-none" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <!-- SideBar Body -->
                <div class="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
                    <ul class="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
                        <li class="nav-item mx-2 h6">
                            <!--<router-link :to="Category" class="nav-link"></router-link>-->
                            <a class="font-weight-bold text-decoration-none text-dark" style="letter-spacing: 1px; font-size: 14px;" href="#about">HOMBRE</a>
                        </li>
                        <li class="nav-item mx-3 h6">
                            <!--<router-link :to="Category" class="nav-link"></router-link>-->
                            <a class="font-weight-bold text-decoration-none text-dark" style="letter-spacing: 1px; font-size: 14px;" href="#about">MUJER</a>
                        </li>
                        <li class="nav-item mx-2 h6">
                            <!--<router-link :to="Category" class="nav-link"></router-link>-->
                            <a class="font-weight-bold text-decoration-none text-dark" style="letter-spacing: 1px; font-size: 14px;" href="#about">NIÑO</a>
                        </li>
                        <li class="nav-item mx-2 h6">
                            <a class="nav-link font-weight-bold" style="letter-spacing: 1px; font-size: 14px;" href="#services">NOVEDADES</a>
                        </li>
                        <li class="nav-item mx-2 h6">
                            <a class="nav-link font-weight-bold" style="letter-spacing: 1px; font-size: 14px;" href="#contact">COLECCIONES</a>
                        </li>
                        <li class="nav-item mx-2 h6">
                            <a style="letter-spacing: 1px; font-size: 14px;"><router-link class="nav-link font-weight-bold active" to="/admin">Admin Panel</router-link></a>
                        </li>
                    </ul>
                    <!-- Login / Sign up -->
                    <div class="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                        <a href="#login" class="text-dark">Login</a>
                        <a href="#signup" class="text-white text-decoration-none px-3 py-1 rounded-4"
                            style="background-color: #0c141f;">Registrarse</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <router-view />
</template>
  