<template>
    <div>
        <v-container fluid>
           <v-row justify="end" align="center">
                <div>
                    <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs> 
                </div> 
            </v-row> 
            <div class="blue--text lighten-4 text-center" >
                <h1>Our Event Catalogue</h1>
            </div>
            <hr>

        <Upcoming/>
        <Recent/>

        </v-container>
    </div>
</template>

<script>
import Recent from '@/components/RecentEvents.vue'
import Upcoming from '@/components/UpcomingEvents.vue'

export default {
    name: 'events',
    components: {
        Recent,
        Upcoming
    },
    data(){
        return{
            items: [
                {
                text: 'Home',
                disabled: false, 
                },
                {
                text: 'Events',
                disabled: true, 
                }, 
            ],
        }
    }
}
</script>