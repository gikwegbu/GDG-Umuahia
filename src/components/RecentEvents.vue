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
                            <v-list-item-avatar color="blue darken-6">
                                <v-img class="elevation-6" src="../assets/GDGBanner.jpeg"
                                ></v-img>
                            </v-list-item-avatar>

                            <v-list-item-avatar color="teal darken-2">
                                <v-img
                                    class="elevation-6"  src="../assets/img/speakers/Chime.jpeg"
                                ></v-img>
                            </v-list-item-avatar>.

                            <v-list-item-avatar color="yellow darken-1">
                                <v-img class="elevation-6" src="../assets/img/speakers/Queen.jpeg"
                                ></v-img>
                            </v-list-item-avatar> 

                            <v-list-item-avatar color="teal darken-1">
                                <v-img class="elevation-6" src="../assets/img/speakers/My avatar.png"
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
        
        <div align="center" justify="center" class="mb-4">
            <v-btn rounded color="primary">
                Event History
                <v-icon>mdi-code-braces</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script>
  export default {
    data: () => ({
      show: false,
    }),
  }
</script>