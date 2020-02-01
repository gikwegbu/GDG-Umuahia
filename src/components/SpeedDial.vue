<template>
  <v-card id="create"> 
    <v-speed-dial v-model="fab" fixed  bottom  right   direction="left"  transition="slide-x-reverse-transition" >
      <template v-slot:activator>
        <v-btn v-model="fab" color="yellow darken-2" dark fab >
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-notification-clear-all</v-icon>
        </v-btn>
      </template>
      <v-btn fab  dark small color="blue" href="https://web.facebook.com/GDGumuahia/" target="_blank">
        <v-icon>mdi-facebook</v-icon>
      </v-btn>

      <v-btn fab dark small color="green" href="https://chat.whatsapp.com/7fKcckVrp18GsWJo5LDIPM" target="_blank">
        <v-icon>mdi-whatsapp</v-icon>
      </v-btn>

      <v-btn fab dark small color="black" href="https://medium.com/gdgumuahia" target="_blank">
        <v-icon>mdi-medium</v-icon>
      </v-btn>

      <v-btn fab  dark  small color="blue" href="https://twitter.com/umuahiagdg" target="_blank">
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      
    </v-speed-dial>
  </v-card>
</template>

<style>
#create .v-speed-dial{
    bottom: 90px;
}
</style>

<script>
  export default {
    data: () => ({
      direction: 'top',
      fab: false,
      fling: false, 
      tabs: null,  
    }),
    
  }
</script>