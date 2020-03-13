<template>
    <div>
        <v-timeline class="hidden-sm-and-down">
            <v-timeline-item v-for="(team, index) in teamDetails" :key="index" large >
            <template v-slot:icon>
                <v-avatar>
                    <!-- To write a function, where when the image avatar is click, it stores the particular image clicked, then rendered in the dialog -->
                     
                <img :src="team.img" @click="showImg(team.img)">
                <!-- <img :src="team.img"> -->
                </v-avatar>
            </template>
            <template v-slot:opposite>
                <span>{{ team.position }}</span>
            </template>
            <v-card class="elevation-2">
                <v-card-title class="headline">{{ team.name  }}</v-card-title>
                <v-card-subtitle> <i>{{ team.business  }}</i> </v-card-subtitle>
                <v-card-text>{{ team.quote  }}</v-card-text>
                <v-card-actions>
                    <!-- I rendered the different social media href to the buttons
                    Then each co-lead's socialMedia details, if provided is displayed, else won't show. -->
                    <v-btn v-show="team.socialMedia.facebook" :tittle="team.socialMedia.facebook"  icon :href="'//'+team.socialMedia.facebook" target="_blank">
                        <v-icon left dark color="blue">mdi-facebook</v-icon> 
                    </v-btn> 
                    <v-btn v-show="team.socialMedia.twitter" :tittle="team.socialMedia.twitter"  icon :href="'//'+team.socialMedia.twitter" target="_blank">
                        <v-icon color="blue">mdi-twitter</v-icon> 
                    </v-btn> 
                    <v-btn v-show="team.socialMedia.whatsapp"  :tittle="team.socialMedia.whatsapp" icon >
                        <v-icon color="green">mdi-whatsapp</v-icon> 
                    </v-btn> 
                    {{ team.socialMedia.whatsapp  }}
                    <v-btn v-show="team.socialMedia.medium"  :tittle="team.socialMedia.medium" icon :href="'//'+team.socialMedia.medium" target="_blank">
                        <v-icon color="black">mdi-medium</v-icon> 
                    </v-btn> 
                </v-card-actions>
            </v-card>
            </v-timeline-item>
        </v-timeline>

        <!-- This is for smaller screen -->
        <v-timeline dense class="hidden-md-and-up">
            <v-timeline-item v-for="(team, index) in teamDetails" :key="index" large >
            <template v-slot:icon>
                <v-avatar>
                    <!-- To write a function, where when the image avatar is click, it stores the particular image clicked, then rendered in the dialog -->
                    
                <img :src="team.img" @click="showImg(team.img)">
                <!-- <img :src="team.img"> -->
                </v-avatar>
            </template>
            <template v-slot:opposite>
                <span>{{ team.position }}</span>
            </template>
            <v-card class="elevation-2">
                <v-card-title class="headline">{{ team.name  }}</v-card-title>
                <v-card-subtitle> <i>{{ team.business  }}</i> </v-card-subtitle>
                <v-card-text>{{ team.quote  }}</v-card-text>
                <v-card-actions>
                    <!-- I rendered the different social media href to the buttons
                    Then each co-lead's socialMedia details, if provided is displayed, else won't show. -->
                    <v-btn v-show="team.socialMedia.facebook" :tittle="team.socialMedia.facebook"  icon :href="'//'+team.socialMedia.facebook" target="_blank">
                        <v-icon left dark color="blue">mdi-facebook</v-icon> 
                    </v-btn> 
                    <v-btn v-show="team.socialMedia.twitter" :tittle="team.socialMedia.twitter"  icon :href="'//'+team.socialMedia.twitter" target="_blank">
                        <v-icon color="blue">mdi-twitter</v-icon> 
                    </v-btn> 
                    <v-btn v-show="team.socialMedia.whatsapp"  :tittle="team.socialMedia.whatsapp" icon disabled :href="'//'+team.socialMedia.whatsapp" target="_blank">
                        <v-icon color="green" right>mdi-whatsapp</v-icon>  
                    </v-btn> 
                    {{ team.socialMedia.whatsapp  }}

                    <v-btn v-show="team.socialMedia.medium"  :tittle="team.socialMedia.medium" icon >
                        <v-icon color="black">mdi-medium</v-icon> 
                    </v-btn> 
                </v-card-actions>
            </v-card>
            </v-timeline-item>
        </v-timeline>
        <!-- This is for smaller screen -->
        

        <!-- For modal dialogs -->
      <v-dialog  v-model="displayPix" max-width="500px" >
        <v-card>
           <v-img
            :src="displayImg"
            height="auto"
            ></v-img>
        </v-card>
      </v-dialog>
    </div>
</template>

<script> 

export default {
    data: ()=> ({
        // When using arrow function, no need for returning any value
        displayPix: false,
        displayImg: '',
        teamDetails: [
           /*  Ben, the dummy images i am trying to render is located at ../assets/test/1.png,../assets/test/2.png,../assets/test/3.png
            The the main images will be used to replace these dummy images later on.
            The images i used in this object is already hosted, that is why it renders */
            {
                name: 'John Idogun', position: 'GDG Umuahia Lead', business: 'Game Developer', quote: 'I love my mummy', img: require('@/assets/img/Leads/John.jpg'),
                socialMedia: { facebook: 'www.facebook.com/idogunj', twitter: 'www.twitter.com/johneh_official', medium: '', whatsapp: '+2348157813631' }
            },
            {
                name: 'Irozuru Emmanuel Chime', position: 'GDG Umuahia Co-Lead', business: 'Manager, ECR', quote: 'I love my mummy', img: require('@/assets/img/Leads/Chime.jpeg'),
                socialMedia: { facebook: 'www.facebook.com/emmy.xk', twitter: 'www.twitter.com/i_mezie', medium: '', whatsapp: '+2348062159230' }
            },
            {
                name: 'Ugonna Queen Oleh', position: 'GDG Umuahia Co-Lead', business: 'Co-Founder Royal Rhetorics', quote: 'I love my my mummy', img: require('@/assets/img/Leads/Queen.jpeg'),
                socialMedia: { facebook: 'www.facebook.com/queenugonna.oleh', twitter: 'www.twitter.com/Ug_darlin', medium: '', whatsapp: '+2348133420000' }
            },
            {
                name: 'Akumobi Kingsley', position: 'GDG Umuahia Co-Lead', business: ' Manager, HUB7', quote: 'Simplicity is the ultimate Sophistication', img: require('@/assets/img/Leads/Kingsley.jpg'),
                socialMedia: { facebook: 'www.facebook.com/kingdonchy', twitter: 'www.twitter.com/akumobikingsley', medium: '', whatsapp: '+2347084079097' }
            },
            {
                name: 'Daniel Lucky', position: 'GDG Umuahia Co-Lead', business: 'CEO Softicu | Co-Founder PlanetHost', quote: 'I love my mummy', img: require('@/assets/img/Leads/Lucky.jpg'),
                socialMedia: { facebook: 'www.facebook.com/Nwaogbolucky', twitter: 'www.twitter.com/sirnwaogbolucky', medium: '', whatsapp: '+2347030657848' }
            },
            {
                name: 'George Ikwegbu', position: 'GDG Umuahia Co-Lead', business: 'CEO George Delivery Service', quote: 'Hey you!!! yes you, you have seen much of Tutorial videos, why not try something with the knowledge gotten so far?', img: require('@/assets/img/Leads/George.jpg'),
                socialMedia: { facebook: 'www.facebook.com/gikwegbu', twitter: 'www.twitter.com/g.ikwegbu', medium: 'medium.com/@g.ikwegbu', whatsapp: '+2348101570258' }
            },
        ]
    }),
    methods: {
        showImg: function(src){
            const _ = this;
            _.displayImg = src;
            _.displayPix = true;
        }
    },
}
</script>