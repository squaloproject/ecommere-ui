<template>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <div class="container">
            <!-- Logo -->
            <a class="navbar-brand fs-4" href="#">Squalo project</a>
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
                        Squalo project
                    </h5>
                    <button type="button" class="btn-close btn-close-dark shadow-none" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <!-- SideBar Body -->
                <div class="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
                    <ul class="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
                        <li class="nav-item mx-2">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item mx-2">
                            <!--<router-link :to="Category" class="nav-link"></router-link>-->
                            <a class="nav-link" href="#about">About</a>
                        </li>
                        <li class="nav-item mx-2">
                            <a class="nav-link" href="#services">Servicios</a>
                        </li>
                        <li class="nav-item mx-2">
                            <a class="nav-link" href="#contact">Contacto</a>
                        </li>
                    </ul>
                    <!-- Login / Sign up -->
                    <div class="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                        <a href="#login" class="text-dark">Login</a>
                        <a href="#signup" class="text-white text-decoration-none px-3 py-1 rounded-4"
                            style="background-color: brown;">Registrarse</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <router-view />
</template>