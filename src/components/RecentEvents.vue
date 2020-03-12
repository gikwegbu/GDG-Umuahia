<template>
    <div>
        <div class="header pa-4 grey lighten-1" dark>
                <h3 class="ml-4 " dark color="grey lighten-2">Recent Event</h3>
            </div>  
        <v-row>
            <v-col cols="sm-4" v-for="(n,i) in 3" :key="i">
                <v-card class="mx-auto" ripple >
                    <br>
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"   height="200px" ></v-img>

                    <v-card-title>
                    I/O Extended 2019
                    </v-card-title>

                    <v-card-subtitle>
                        <span>Speakers</span>
                        <!-- use a vfor loop, to decongest this page. -->
                        <v-list-item class="grow">
                            <v-list-item-avatar v-for="(speaker, index) in speakers" :key="index" :color="speaker.color+' darken-6'">
                                <v-img @click="showImg(speaker.color)" class="elevation-6" :src="speaker.img"
                                ></v-img>
                            </v-list-item-avatar>

                            
                        </v-list-item>
                        Ikwegbu George, Mezie, Ugo Queen
                    </v-card-subtitle>

                    <v-card-actions> 
                    <v-btn color="purple" text >
                        Explore
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn icon @click="show = !show" >
                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                    <div v-show="show">
                        <v-divider></v-divider>

                        <v-card-text>
                        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                        </v-card-text>
                    </div>
                    </v-expand-transition>
                </v-card>
            </v-col> 
            
        </v-row>
        
       <!--  <div align="center" justify="center" class="mb-4">
            <v-btn rounded color="primary" @click="loadMore = !loadMore">
                Load more
                <v-icon> {{loadMore? "mdi-arrange-bring-forward" : "mdi-arrange-send-backward"}}  </v-icon> 
            </v-btn>
        </div> -->

        <!-- For modal dialogs -->
      <v-dialog  v-model="speakerImg" max-width="500px" >
        <v-card>
           <v-img
            :src="speakerImg"
            height="auto"
            ></v-img>
        </v-card>
      </v-dialog>

      <!-- <img :src="team.img" @click="showImg(team.img)"> -->
    </div>
</template>

<script>
  export default {
    data: () => ({
      show: false,
      loadMore: false,
      speakerImg: '',
      speakers: [
          {img: require('../assets/GDGBanner.jpeg'),color: 'red'},
          {img: require('../assets/img/speakers/Chime.jpeg'),color: 'green'},
          {img: require('../assets/img/speakers/Queen.jpeg'),color: 'yellow'},
          {img: require('../assets/img/speakers/My avatar.png'),color: 'blue'},
      ]
    }),
    methods: {
        showImg: function(src){
            const _ = this; 
            _.speakerImg = src;
            _.speakerImg = true;
        }
    },
  }
</script>