<template>
    <div class="home">
      <div class="home__slider">
        <img class="home__slider_img" src="@/assets/img/home_slider1.png"/>
      </div>
      <div class="home__content">
        <div class="home__content_img">
          <img class="home__image_img-willkomen" src="@/assets/img/bachsbinasWillkommen.png"/>
        </div>
        <div class="home__content_img">
          <img class="home__image_img-coffe" src="@/assets/img/azul.png"/>
          <img class="home__image_img-coffe" src="@/assets/img/azuco.png"/>
          <img class="home__image_img-coffe" src="@/assets/img/logo_keo.png"/>
        </div>
        <div class="home__content_text">
          <p>Wir heißen Sie herzlich willkommen im "Bach's und Bina's - Konditorei, Café und Bistro" und möchten Sie mit selbstgemachten, regionalen Leckerein und einem tollen Service im Herzen von Lindlar begrüßen.</p>
          <h2>Jessi & Bina</h2>
        </div>
        <div class="home__content_img">
          <img class="home__image_img" src="@/assets/img/theowners.png"/>
        </div>
        <div class="home__content_text">
          <h1>Besondere Anlässe</h1>
          <p>Für besondere Anlässe, wie zum Beispiel Hochzeiten, Taufen, Kommunion, Konfirmation, Geburtstage setzen wir Ihre Vorstellungen individuel um.</p>
        </div>
      </div>
      <div class="home__image">
      </div>
      <div class="home__contact">
        <contact-info></contact-info>
      </div>
    </div>
</template>

<script>
import ContactInfo from '../../partials/ContactInfo.vue'

  export default {
  components: { ContactInfo },
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