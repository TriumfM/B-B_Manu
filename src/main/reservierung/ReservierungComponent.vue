<template>
    <div>
<div class="reservierung__content">
        <div class="reservierung__content-title">
          <h1 class="reservierung__content-title--t1">RESERVIERUNGANFRAGE</h1>
          <h2 class="reservierung__content-title--t2">Ihr Platz im Bach's & Bina's</h2>
          <p class="reservierung__content-title--details">Bei Onlinereservierungen erhalten Sie (in der Regel innerhalb von wenigen Stunden) eine Bestätigung per E-Mail. Bitte füllen Sie das Formular vollständig aus. Fur mehr anrufen Sie bitte!</p>
        </div>
        
        <form  class="reservierung__form" @submit.prevent="sendEmail">
          <div class="form__element">
            <p class="form__element-name">Name</p>
            <input class="form__element-value" placeholder="Dein Name" type="text" v-model="name" name="name"/>
          </div>
          <div class="form__element">
            <p class="form__element-name">Email</p>
            <input class="form__element-value" type="email" v-model="email" name="email" placeholder="Deine Email"/>
          </div>
          <div class="form__element">
            <p class="form__element-name">Telefonnummer</p>
            <input class="form__element-value" type="text" v-model="tel" name="tel" placeholder="Deine Telefonnummer"/>
          </div>
          <div class="form__element">
            <p class="form__element-name">Message</p>
            <textarea class="form__element-value value_message" rows="9" name="message" v-model="message" placeholder="Deine Message">
            </textarea>
          </div>
          
          <div class="form__element">
            <button class="form__element-button" type="submit" value="Senden">Senden</button>
          </div>
        </form >
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
  import emailjs from 'emailjs-com';
  import swal from 'sweetalert2/dist/sweetalert2.js'

  export default {
    name: 'MainView',
    data () {
      return {
        name: '',
        email: '',
        message: '',
        tel: ''
      }
    },
    mounted: function () {
    },
    methods: {
      sendEmail(e) {

        if (this.name != '' && this.email != '' && this.message != '' && this.tel != '') {
          try {
            emailjs.sendForm('service_x3x2xmo', 'template_1nrf8xc', e.target,
            'user_LOk1HWrFjmDepAAYiqogO', {
              name: this.name,
              email: this.email,
              message: this.message
            }).then(() => {
              swal.fire(
                'Die Bestellung ist eingegangen',
                '',
                'success'
              )
              this.name = ''
              this.email = ''
              this.message = ''
              this.tel = ''
          }, () => {
              swal.fire(
                'Die Bestellung ist nicht eingegangen',
                'Bitte rufen an +49 2266 6516',
                'error'
              )
          });

          } catch(error) {
              console.log({error})
          }
        } else {
          swal.fire(
            'Bitte füllen Sie die Eingaben aus',
            '',
            'error'
          )
        }
      },
    }
  }
</script>