<template>
    <div>
       <v-container fluid>
            <div class="header pa-4 grey lighten-1" dark>
                <h3 class="ml-4 " color="grey lighten-2">Upcoming Event</h3>
            </div>   
            <v-row>
                <v-col cols="sm-6">
                    <v-card class="mx-auto" outlined ripple hover shaped loading="primary" loader-height="5px" >
                        <v-img src="../assets/img/Upcoming Events/upcomingEvent.jpeg" gradient="to right, rgba(0,0,0,.1), rgba(0,0,0,.5)"   height="400px" ></v-img>
                       
                         <v-card-subtitle>
                             <span>Speakers</span>
                        <!-- use a vfor loop, to decongest this page. -->
                        <v-list-item class="grow">
                            <v-list-item-avatar color="blue darken-6">
                                <v-img class="elevation-6" src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                ></v-img>
                            </v-list-item-avatar>

                            <v-list-item-avatar color="teal darken-2">
                                <v-img
                                    class="elevation-6"  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                ></v-img>
                            </v-list-item-avatar>.

                            <v-list-item-avatar color="yellow darken-1">
                                <v-img class="elevation-6" src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                ></v-img>
                            </v-list-item-avatar> 

                            <v-list-item-avatar color="red darken-1">
                                <v-img class="elevation-6" src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                ></v-img>
                            </v-list-item-avatar>
                        </v-list-item>
                        Ikwegbu George, Mezie, Ugo Queen
                    </v-card-subtitle>
                    </v-card>
                </v-col>
                <v-col cols="sm-6" align="center" justify="center"> 
                    <v-spacer class="pt-12"></v-spacer>
                    <div class="pt-12">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque impedit, cupiditate possimus suscipit voluptatum soluta nihil obcaecati totam recusandae
                            ipsa inventore consectetur odit iure reprehenderit corporis tempora optio in aperiam.<p/>

                        <v-btn color="primary" rounded title="Click to Register">
                            Attend 
                            <v-icon dark>mdi-shield-check</v-icon>
                        </v-btn>
                    </div>
                </v-col> 
            </v-row> 
       </v-container> 
    </div>
</template>

<script>
export default {
    
}
</script>