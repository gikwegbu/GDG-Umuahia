<template>
    <div>
       <v-card class="mx-auto mt-5 text-center" max-width="80%" outlined > 
           
           <v-card-subtitle>
               dev. George
               <v-icon dark left color="black lighten-1">mdi-face-outline</v-icon>
               <!-- <v-icon dark left color="black lighten-1">mdi-face-woman-outline</v-icon> -->
           </v-card-subtitle>
           <v-card-text>
               What's good huh <b v-show="blink"> ! </b>
               <v-icon color="green darken-2">mdi-emoticon-cool-outline</v-icon>
           </v-card-text>
       </v-card>
    </div>
</template>


<script>
export default {
    name: 'dashboard',
    data: ()=>({
        blink: false,
    }),
    created(){ 
        this.blinkCursor()
        
    },
    methods: {
        blinkCursor: function(){
            // alert('dfadsfsa')
            // if (1==1) {
            //     setInterval(() => { 
            //      this.blink = !this.blink
            //     }, 5000);
            //     this.blinkCursor()
            // } 
        }
    },
}
</script>