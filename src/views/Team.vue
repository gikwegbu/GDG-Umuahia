<template>
    <div>
        <v-container fluid>
            <v-row justify="end" align="center">
                <div>
                    <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs> 
                </div> 
            </v-row> 
            <v-row justify="center" align="center">
                <div class="text-center" >
                    <h1 class="blue--text lighten-4">Our Community Leads & Co-Leads</h1> 
                </div>
            </v-row>
            <hr>
        </v-container>
        
        <v-container >
            <TeamTimeline/>
        </v-container>
    </div>
</template>

<script>
import TeamTimeline from '../components/TeamTimeline.vue'

export default {
    name: 'co-leads',
    components: {
        TeamTimeline
    },
    data: () => ({
      items: [
        {
          text: 'Home',
          disabled: false, 
        },
        {
          text: 'Team',
          disabled: true, 
        }, 
      ],
    }),
}
</script>