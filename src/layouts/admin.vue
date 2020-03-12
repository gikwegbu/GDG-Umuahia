<template>
  <v-app id="inspire" >
    <v-navigation-drawer v-model="drawer" app >
        <template v-slot:prepend>
          <div class="hidden-md-and-up">

              <v-list-item two-line>
                <v-list-item-avatar>
                  <img src="../assets/img/speakers/My avatar.png">
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>George Ikwegbu</v-list-item-title>
                  <v-list-item-subtitle>
                    Logged In
                    <v-icon dark left color="blue"> mdi-cloud  </v-icon>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
          </div> 
        </template>

        <v-divider></v-divider>

      <v-list dense>
        <v-list-item link :to="item.link" v-for="(item, index) in menuItems" :key="index">  
            <v-list-item-action>
              <v-icon :color="item.color">{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content> 
        </v-list-item> 
        <v-spacer></v-spacer>
        <v-list-item absolute class="lastLink" link router to="/admin/">
          <v-list-item-action>
            <v-icon color="red" class="fa-pulse">
               mdi-power  
            </v-icon> 
            <!-- <v-icon color="red">
               mdi-lock-open-variant
            </v-icon> -->
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item> 
      </v-list>
    </v-navigation-drawer>
 
    <v-app-bar  app >
      <v-app-bar-nav-icon class=""  @click.stop="drawer = !drawer" />
      <v-img  alt="GDG LOGO"  class="shrink mr-2"  contain src="../assets/GDG-Logo.png" to="/"  transition="scale-transition" width="40"  />
      <v-toolbar-title>GDG Umuahia</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-md-and-down"> 
        <v-list>
          <v-list-item class="grow">
          <v-list-item-content>
            <v-list-item-subtitle color="red ">Welcome</v-list-item-subtitle>
          </v-list-item-content> 
          <v-list-item-avatar color="#eee lighten-1" >
              <v-img class="elevation-6" src="../assets/img/speakers/My avatar.png"
              ></v-img>
          </v-list-item-avatar> 

          </v-list-item>
        </v-list> 
      </v-toolbar-items> 
       
    </v-app-bar> 

     <v-content class="body">
      <slot />
    </v-content>  
 

    <v-footer  color="primary">
      <div>
        <span class="white--text ">&copy; GDG Umuahia 2020</span>  
      </div>
      <v-spacer></v-spacer>
      <div >
          <v-btn class="white--text" text href="https://ng.linkedin.com/in/george-ikwegbu-56ab43156?trk=people-guest_people_search-card" target="_blank">Designed By George Ikwegbu</v-btn>
        <!-- <v-switch class="white--text"  v-model="$vuetify.theme.dark"  secondary label="Dark Mode" />  -->
      </div>
    </v-footer> 
  </v-app>
</template>

<style> 
.lastLink{
  position: absolute;
  bottom: 0px;
  width: 100%;
}
#inspire{
  padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
}
</style>

<script> 
import { mapActions  } from 'vuex' 



export default {

    components: { 
    }, 
    data: () => ({ 
      drawer: false, 
      menuItems: [
        { icon: ' mdi-desktop-mac-dashboard', color: 'grey darken-4', link: '/admin/views/dashboard', title: 'Dashboard'}, 
        { icon: 'mdi-code-braces', color: 'yellow darken-1', link: '/admin/views/addevents', title: 'Events'},
        { icon: 'mdi-share', color: 'blue', link: '/admin/views/eventhistory', title: 'Event History'},
        { icon: 'mdi-account-group-outline', color: 'red darken-4', link: '/admin/views/team', title: 'Team'},
        { icon: 'mdi-android-messages', color: 'teal', link: '/admin/views/message', title: 'Message'},
        { icon: 'mdi-account-badge-horizontal', color: 'grey', link: '/admin/views/profile', title: 'Profile'},
      ]
    }),
     mounted(){  
        this.Load_Events()  

    },
    methods: {
        ...mapActions(["Load_Events"]), 
    },
  }
</script>
