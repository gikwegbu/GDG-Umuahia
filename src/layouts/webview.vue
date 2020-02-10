<template>
  <v-app id="inspire" >
    <v-navigation-drawer v-model="drawer" app >
      <v-list dense>
        <v-list-item link :to="item.link" v-for="(item, index) in menuItems" :key="index">  
            <v-list-item-action>
              <v-icon :color="item.color">{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content> 
        </v-list-item>  
      </v-list>
    </v-navigation-drawer>
 
    <v-app-bar  app >
      <v-app-bar-nav-icon class="d-lg-none"  @click.stop="drawer = !drawer" />
      <v-img  alt="GDG LOGO"  class="shrink mr-2"  contain src="../assets/GDG-Logo.png" to="/"  transition="scale-transition" width="40"  />
      <v-toolbar-title>GDG Umahia</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn text @click="navBtn(item)"  v-for="(item, index) in menuItems" :key="index">
        <!-- <v-btn color="white black--text" @click="item.title == 'Contact' ? dialog = true : ''"  dark v-for="(item, index) in menuItems" :key="index"> -->
          <v-icon left dark :color="item.color" > {{ item.icon }} </v-icon>
          {{ item.title }}
        </v-btn>
        <!-- <v-btn text href="https://developers.google.com/community/gdg" target="_blank">
        <v-icon left dark color="blue">
          mdi-account-alert
        </v-icon>
          About
        </v-btn> -->
      </v-toolbar-items> 
       
    </v-app-bar> 

     <v-content class="body">
      <slot />
    </v-content>  

    <!-- This is the social media platform buttons -->
    <Dial/>
    <!-- This is the social media platform buttons --> 

    <v-footer  color="primary">
      <div>
        <span class="white--text ">&copy; GDG Umuahia 2020</span>  
      </div>
      <v-spacer></v-spacer>
      <div >
        <v-switch class="white--text"  v-model="$vuetify.theme.dark"  secondary label="Dark Mode" /> 
      </div>
    </v-footer>



      <!-- For modal dialogs -->
        <v-dialog  v-model="dialog" max-width="500px" >
          <v-card :loading='form.loader' loader-height="5px">
            <v-card-title>
              <span class="headline">Contact GDG Umuahia</span>
            </v-card-title>
            <v-form @submit.prevent="sendMessage"> 
              <v-card-text>
                <v-container>
                  <v-row> 
                    <v-col cols="12">
                      <v-text-field label="Name*" v-model="form.name" required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field label="Email*" v-model="form.email" required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea    label="Message*" v-model="form.message"  rows="2"  ></v-textarea>
                    </v-col>
                    
                  </v-row>
                </v-container>
                <small v-show="form.error" class="red--text">PLEASE PROVIDE ALL INFORMATION</small>
                <small v-show="form.success" class="teal--text">Delivered</small>
                  <br>
                <small >*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text @click="dialog = false">Close</v-btn>
                <v-btn color="blue darken-1" rounded dark type="submit">Send</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-dialog>
  </v-app>
</template>

<style> 
</style>

<script>
import Dial from '@/components/SpeedDial.vue' 


export default {
    components: {
      Dial, 
    },
    props: {
      source: String,
    },
    data: () => ({
      dialog: false,  
      drawer: false,
      
      form: {
        name: '',
        email: '',
        message: '',
        loader: false,
        error: false,
        success: false,
      },
      menuItems: [
        { icon: 'mdi-home', color: 'black', link: '/', title: 'Home'}, 
        { icon: 'mdi-account-alert', color: 'blue', link: '/about', title: 'About'}, 
        { icon: 'mdi-code-braces', color: 'yellow', link: '/events', title: 'Events'},
        { icon: 'mdi-account-group-outline', color: 'red', link: '/team', title: 'Team'},
        { icon: 'mdi-account-convert', color: 'teal', link: '/contact', title: 'Contact'},
      ]
    }),
    methods: {
      navBtn: function(item){ 
        item.title == 'Contact' ? this.dialog = true : 
        item.title == 'Home' ? this.$router.push({path: '/'}) :  
        item.title == 'About' ? this.$router.push({path: '/about'}) :  
        item.title == 'Team' ? this.$router.push({path: '/team'}) : 
        item.title == 'Events' ? this.$router.push({path: '/events'}) : '' 
      },
      sendMessage: function(){
        let { name, email, message  } = this.form
        if( (name.length != 0) && (email.length != 0) && message.length !=0   ){
          this.form.loader = true;
          // This will be sent to database with axios, but for now am setting a timeout
          setTimeout(() => {
            this.form = {};
            this.form.success = true;
          }, 3000);
         
          setTimeout(() => {
            this.form.success = false;
          }, 4000);
        }else{
          this.form.error = true;
          setTimeout(() => {
            this.form.error = false;
          }, 2000);
        }
      }
    },
  }
</script>
