<template>
    <div :class="{'contact': true}">
      <div class="contact__box">
          <div class="contact__box-icon">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
          </div>
          <div class="contact__box-title">
            <span>Hier sind wir:</span>
          </div>
          <div class="contact__box-content">
            <span>Bach und Lochtenbergh</span>
          </div>
          <div class="contact__box-content">
            <span>Kirchplatz 7</span>
          </div>
          <div class="contact__box-content">
            <span>51789 Lindlar</span>
          </div>
        </div>
         <div class="contact__box">
          <div class="contact__box-icon">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
          </div>
          <div class="contact__box-title">
            <span>Öffnungszeiten:</span>
          </div>
          <div class="contact__box-content">
            <span>Montag: Ruhetag</span>
          </div>
          <div class="contact__box-content">
            <span>Dienstag - Donnerstag: 09:00-18:30 Uhr</span>
          </div>
          <div class="contact__box-content">
            <span>Freitag und Samstag: 09:00-23:00 Uhr</span>
          </div>
          <div class="contact__box-content">
            <span>Sonntag und Feiertags: 10:00-18:30 Uhr</span>
          </div>
        </div> 
         <div class="contact__box">
          <div class="contact__box-icon">
            <i class="fa fa-phone" aria-hidden="true"></i>
          </div>
          <div class="contact__box-title">
            <span>Kontakt:</span>
          </div>
          <div class="contact__box-content">
            <span>Tel. 02266/6516</span>
          </div>
        </div>
        <div class="contact__box_social-network">
          <p class="contact__box_social-network--title">We ❤️ new Friends!</p>
          <div class="contact__box_social-network--icons">
            <a class="social-network__box facebook" href="https://www.facebook.com/bachsbinas/">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a class="social-network__box instagram" href="https://www.instagram.com/bachs_und_binas">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          
          </div>
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