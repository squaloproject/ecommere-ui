<template>
  <router-view v-if="categories && products" :baseURL="baseURL" :categories="categories" :products="products" style="min-height: 60vh;"
    @fetchData="fetchData">
  </router-view>
</template>

<script>
import axios from 'axios';
export default {
  name: "App",
  components: {},
  data() {
    return {
      baseURL: "https://limitless-lake-55070.herokuapp.com/",
      products: null,
      categories: null
    }
  },
  methods: {
    // Api call to get the categories
    async fetchData() {
      await axios.get(this.baseURL + "category/")
        .then(res => {
          this.categories = res.data
        }).catch((err) => console.log('err', err));

      // Api call to get the products
      await axios.get(this.baseURL + "product/")
        .then(res => {
          this.products = res.data
        }).catch((err) => console.log('err', err));

    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>