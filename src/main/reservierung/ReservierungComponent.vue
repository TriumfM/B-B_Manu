<template>
    <div>
<div class="reservierung__content">
        <div class="reservierung__content-title">
          <h1 class="reservierung__content-title--t1">RESERVIERUNGANFRAGE</h1>
          <h2 class="reservierung__content-title--t2">Ihr Platz im Bach's & Bina's</h2>
          <p class="reservierung__content-title--details">Bei Onlinereservierungen bitten wir um eine Vorlaufzeit von 12 Stunden. Nach der Anfrage erhalten Sie (in der Regel innerhalb von wenigen Stunden) eine Bestätigung per E-Mail. Bitte füllen Sie das Formular vollständig aus. Falls Sie einen Lieblingsplatz bei uns haben, können Sie uns diesen gerne im Nachrichtenfeld mitteilen. ??????</p>
        </div>
        
        <div class="reservierung__form">
          <div class="form__element">
            <p class="form__element-name">Name</p>
            <input class="form__element-value"/>
          </div>
          <div class="form__element">
            <p class="form__element-name">Firma</p>
            <input class="form__element-value"/>
          </div>
          <div class="form__element">
            <p class="form__element-name">E-mail</p>
            <input class="form__element-value"/>
          </div>
          <div class="form__element">
            <p class="form__element-name">Telefon</p>
            <input class="form__element-value"/>
          </div>
          <div class="form__element">
            <p class="form__element-name">Anzahl Personen</p>
            <input class="form__element-value"/>
          </div>
          <div class="form__element">
            <p class="form__element-name">Datum</p>
            <input class="form__element-value"/>
          </div>
          <div class="form__element">
            <p class="form__element-name">Uhrzeit</p>
            <input class="form__element-value"/>
          </div>
          <div class="form__element">
            <p class="form__element-name">Nachricht</p>
            <input class="form__element-value"/>
          </div>
          <div class="form__element">
            <button class="form__element-button">Senden</button>
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
            <span>+49 2266 6516</span>
          </div>
          <div class="contact__box-content">
            <span>Email</span>
          </div>
        </div>
        <div class="contact__box_social-network">
          <p class="contact__box_social-network--title">We ❤️ new Friends!</p>
          <div class="contact__box_social-network--icons">
            <a class="social-network__box facebook" href="https://www.facebook.com/bachsbinas/">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <div class="social-network__box instagram">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </div>
          </div>
      </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'MainView',
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