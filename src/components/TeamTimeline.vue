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
                        <v-icon color="green">mdi-whatsapp</v-icon> 
                    </v-btn> 
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
                name: 'Chimezie Emmanuel', position: 'GDG Umuahia Co-Lead', business: 'Manager, ECR', quote: 'I love my mummy', img: "https://secure.meetupstatic.com/photos/member/d/2/6/c/member_274973868.jpeg",
                socialMedia: { facebook: 'www.facebook.com', twitter: 'www.twitter.com', medium: '', whatsapp: 'o8056450290' }
            },
            {
                name: 'Ugonna Queen', position: 'GDG Umuahia Co-Lead', business: 'Co-Founder Debate Club', quote: 'I love my my mummy', img: "data:image/jpeg;base64,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",
                socialMedia: { facebook: 'www.facebook.com', twitter: 'www.twitter.com', medium: '', whatsapp: 'o8056450290' }
            },
            {
                name: 'Akumobi Kingsley', position: 'GDG Umuahia Co-Lead', business: ' Manager, HUB7', quote: 'I love my mummy', img: "https://pbs.twimg.com/media/D-QqElJWsAAcm45.jpg",
                socialMedia: { facebook: 'www.facebook.com', twitter: 'www.twitter.com', medium: '', whatsapp: 'o8056450290' }
            },
            {
                name: 'Daniel Lucky', position: 'GDG Umuahia Co-Lead', business: 'CEO Softicu | Co-Founder PlanetHost', quote: 'I love my mummy', img: '',
                socialMedia: { facebook: 'www.facebook.com', twitter: 'www.twitter.com', medium: '', whatsapp: 'o8056450290' }
            },
            {
                name: 'George Ikwegbu', position: 'GDG Umuahia Co-Lead', business: 'CEO George Delivery Service', quote: 'I love my mummy', img: "https://images.pexels.com/users/avatars/596824/george-ikwegbu-997.jpeg?w=256&h=256&fit=crop&crop=faces&auto=compress",
                socialMedia: { facebook: 'www.facebook.com', twitter: 'www.twitter.com', medium: '', whatsapp: 'o8056450290' }
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