<template>
    <div :class="{'header': true}">
        <img class="logo__image" src="@/assets/img/icon_image.png"/>
        <div class="menu">
            <router-link class="menu__link" :to="{name: 'home'}">Home</router-link>
            <router-link class="menu__link" :to="{name: 'speisekarte'}">Unsere Speisekarte</router-link>
            <router-link class="menu__link" :to="{name: 'kontakt'}">Kontakt</router-link>
            <router-link class="menu__link" :to="{name: 'reservierung'}">Reservierung</router-link>
        </div>
        
    </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    mounted: function () {
    },
    methods: {
    }
  }
</script>