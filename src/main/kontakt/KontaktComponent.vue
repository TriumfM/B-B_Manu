<template>
    <div>
      <GmapMap
        :center="{lat:51.0193052, lng:7.3750875}"
        :zoom="14"
        style="width: 100%; height: 500px"
        :options="mapOptions"
      >
        <GmapMarker :position="{lat: 51.0193052, lng:7.3750875}"/>
      </GmapMap>
      <contact-info></contact-info>
    </div>
</template>

<script>
import ContactInfo from '../../partials/ContactInfo.vue'

  export default {
  components: { ContactInfo },
    name: 'KontaktView',
    data () {
      return {
        mapOptions: {
          disableDefaultUI: true
        },
      }
    },
    mounted: function () {
    },
    methods: {
    }
  }
</script>