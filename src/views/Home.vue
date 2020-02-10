<template>
  <div class="home"> 
    <!-- This is the section for the carousel slide  -->
    <v-container fluid>
       <Slide /> 
    </v-container>
    <!-- This is the section for the carousel slide  -->

    <!-- This section is for upcomming events -->
    <UpcomingEvents/>
    <!-- This section is for upcomming events -->
    <!-- This section is for Recent events -->
    <RecentEvents/>
    <div align="center" justify="center" class="mb-4">
        <v-btn rounded color="primary" to="/events">
            Event History
            <v-icon>mdi-code-braces</v-icon>
        </v-btn>
    </div>
    <!-- This section is for Recent events --> 
    <!-- This section is for Sponsors events -->
    <Sponsors/>
    <!-- This section is for Sponsors events -->
    
    


     
  </div>
</template>

<script>
// @ is an alias to /src 
import Slide  from '@/components/Slide.vue'
import UpcomingEvents  from '@/components/UpcomingEvents.vue'
import RecentEvents  from '@/components/RecentEvents.vue' 
import Sponsors  from '@/components/Sponsors.vue'

export default {
  name: 'home',
  components: { 
    Slide,
    UpcomingEvents,
    RecentEvents, 
    Sponsors,
  }
}
</script>
