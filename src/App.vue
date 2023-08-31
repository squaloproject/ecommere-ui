<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
    name: "App",
    components: { Navbar },
    data() {
        return {};
    },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>