<template>
    <div>
        <header-component></header-component>
        <router-view></router-view>
        <footer-component></footer-component>
      
    </div>
</template>

<script>

import FooterComponent from '../partials/FooterComponent.vue'
import HeaderComponent from '../partials/HeaderComponent.vue'

  export default {
  components: { FooterComponent, HeaderComponent },
    data () {
      return {
      }
    },
    mounted: function () {
      this.$router.push({name: "home"})
    },
    methods: {
    }
  }
</script>