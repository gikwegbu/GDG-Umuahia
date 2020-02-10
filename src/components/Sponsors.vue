<template>
  <v-parallax  dark src="https://i0.wp.com/codemyui.com/wp-content/uploads/2019/06/Shooting-Star-Background-in-Pure-CSS-1.gif?fit=880%2C440&ssl=1">
  <!-- <v-parallax  dark src="https://i.gifer.com/76YS.gif"> -->
  <!-- <v-parallax  dark src="https://img.freepik.com/free-vector/abstract-technology-particle-background_52683-25766.jpg?size=626&ext=jpg" > -->
    <div class="header pa-4 mt-4 text-center" dark>
        <h3 class="ml-4 " dark color="grey lighten-2">Sponsors</h3>
    </div>
   <v-row align="center" justify="center">
        <v-col cols="sm-4" v-for="(n,i) in 3" :key="i">
            <!-- <v-card class="mx-auto" ripple > -->
                <v-img src="https://pluspng.com/img-png/google-logo-png-open-2000.png" width="100%" height="200px"></v-img>
            <!-- </v-card> -->
        </v-col> 
    </v-row> 
    <div class="header pa-4 mt-4 text-center" dark>
        <v-btn rounded light color="yellow">
            Be a sponsor
            <v-icon>mdi-account-cash-outline</v-icon>
        </v-btn>
    </div>
  </v-parallax>
</template> 