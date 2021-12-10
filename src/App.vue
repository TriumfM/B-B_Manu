<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
  head: {
       link: [
             {
                 rel: "icon",
                 href: require("@/assets/img/icon_image.png")
             },
          ]
       },
  computed: {
    route () {
      return this.$route.path
    }
  },
  watch: {
    route: function () {
      console.log(this.$route.path)
    }
  },
  methods: {
  }
}
</script>
