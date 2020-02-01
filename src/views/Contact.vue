<template>
  <div>
    <v-container>
      <v-row justify="end" align="center">
        <div>
            <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs> 
        </div> 
      </v-row> 
      <Contact/>
    </v-container>
  </div>
</template>

<script>
import Contact from '@/components/Contact.vue'

export default {
  name: 'contact',
  components: {
    Contact
  },
  data(){
        return{
            items: [
                {
                text: 'Home',
                disabled: false, 
                },
                {
                text: 'Contact Us',
                disabled: true, 
                }, 
            ],
        }
    }
}
</script>