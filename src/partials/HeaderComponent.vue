<template>
    <div :class="{'header': true}">
        <img class="logo__image" src="@/assets/img/icon_image.png"/>
        <div class="menu__status">
           <i :class="{'fa': true, 'fa-bars': true, 'display_none': open_menu}" aria-hidden="true" @click="showMenu()"></i>
           <i :class="{'fa': true, 'fa-times': true, 'display_none':!open_menu}" aria-hidden="true" @click="showMenu()"></i>
        </div>
        <div :class="{'menu': true, 'display_none': !open_menu}">
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
        open_menu: true,
        width: 0,
        height: 0,
        txt: null
      }
    },
    watch: {
      width(newWidth) {
        if (newWidth >= 710) {
          this.open_menu = true;
        } else {
          this.open_menu = false;
        }
      }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },

    methods: {
      showMenu: function () {
        this.open_menu=!this.open_menu;
      },
      onResize() {
            this.windowHeight = screen.width
        },
        handleResize() {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
        }
    }
  }
</script>