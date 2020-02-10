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
                    <v-btn v-show="team.socialMedia.whatsapp"  :tittle="team.socialMedia.whatsapp" icon :href="'//'+team.socialMedia.whatsapp" target="_blank">
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
                    <v-btn v-show="team.socialMedia.whatsapp"  :tittle="team.socialMedia.whatsapp" icon :href="'//'+team.socialMedia.whatsapp" target="_blank">
                        <v-icon color="green" right>mdi-whatsapp</v-icon>  
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
                name: 'John Idogun', position: 'GDG Umuahia Lead', business: 'Game Developer', quote: 'I love my mummy', img: "https://media-exp1.licdn.com/dms/image/C4D03AQGBT2elfTAtHA/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=IqWRRTp2uGHxiqhSujMhZaviOXisneV61g9RLdo0m0o",
                socialMedia: { facebook: 'www.facebook.com', twitter: 'www.twitter.com', medium: '', whatsapp: 'o8056450290' }
            },
            {
                name: 'Irozuru Emmanuel Chime', position: 'GDG Umuahia Co-Lead', business: 'Manager, ECR', quote: 'I love my mummy', img: "https://secure.meetupstatic.com/photos/member/d/2/6/c/member_274973868.jpeg",
                socialMedia: { facebook: 'www.facebook.com/mezieIrozuruEmmanuel', twitter: 'www.twitter.com/i_mezie', medium: '', whatsapp: 'o8056450290' }
            },
            {
                name: 'Ugonna Queen Oleh', position: 'GDG Umuahia Co-Lead', business: 'Co-Founder Debate Club', quote: 'I love my my mummy', img: "https://pbs.twimg.com/profile_images/1219257766956716032/EmgxUpBS_400x400.jpg",
                socialMedia: { facebook: 'www.facebook.com', twitter: 'www.twitter.com/ug_oleh Queen', medium: '', whatsapp: 'o8056450290' }
            },
            {
                name: 'Akumobi Kingsley', position: 'GDG Umuahia Co-Lead', business: ' Manager, HUB7', quote: 'Simplicity is the ultimate Sophistication', img: "https://pbs.twimg.com/media/D-QqElJWsAAcm45.jpg",
                socialMedia: { facebook: 'www.facebook.com', twitter: 'www.twitter.com', medium: '', whatsapp: '07084079097' }
            },
            {
                name: 'Daniel Lucky', position: 'GDG Umuahia Co-Lead', business: 'CEO Softicu | Co-Founder PlanetHost', quote: 'I love my mummy', img: 'https://lh3.googleusercontent.com/SyJWSzCdsYjQpi34AafG1LHn0vv-eQTPWU0F18N5yRX90q2-PMjDe0fEVYXY_ezQHTb8ONbB=s1280-p-no-v1',
                socialMedia: { facebook: 'www.facebook.com', twitter: 'www.twitter.com', medium: '', whatsapp: 'o8056450290' }
            },
            {
                name: 'George Ikwegbu', position: 'GDG Umuahia Co-Lead', business: 'CEO George Delivery Service', quote: 'Hey you!!! yes you, you have seen much of Tutorial videos, why not try something with the knowledge gotten so far?', img: "https://images.pexels.com/users/avatars/596824/george-ikwegbu-997.jpeg?w=256&h=256&fit=crop&crop=faces&auto=compress",
                socialMedia: { facebook: 'www.facebook.com/gikwegbu', twitter: 'www.twitter.com/g.ikwegbu', medium: '', whatsapp: '08101570258' }
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