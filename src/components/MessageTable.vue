<template>
  <v-card>
    <v-card-title>
      Messages
      <v-spacer></v-spacer>
      <v-text-field  v-model="search"   label="Search Messages"  single-line hide-details  ></v-text-field>
    </v-card-title>
    <v-data-table  :headers="headers" :items="desserts"  :search="search"  ></v-data-table>
  </v-card>
</template>

/* On click of the data row, a dialog pops up, with a form of the complaints, then a reply text area,
NB: the table will contain a column for replies, default value will be nill, till a reply is given to the user */

<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Name',
            align: 'left',
            sortable: true,
            value: 'Name',
          },
          { text: 'Email', value: 'Email' },
          { text: 'Message', value: 'Message' },
          { text: 'Message Date', value: 'MessageDate' }, 
          { text: 'Reply', value: 'Reply' }, 
          { text: 'Reply Date', value: 'ReplyDate' }, 
        ],
        desserts: [
          {
            id: 'cxzvuiywerkhcbxv',
            Name: 'Ekwuribe Jude',
            Email: 'ekwutus@gmail.com',
            Message: 'I want to learn cyber-security, please help me.',
            MessageDate: '2020/05/24',
            Reply: 'Refer to any of our hubs', 
            ReplyDate: '2020/03/08'
          },
          {
              id: 'hoer347fgjhsb',
            Name: 'Everything Rosey',
            Email: 'hackME@ovi.com',
            Message: 'I can hack your system.',
            MessageDate: '2020/05/24',
            Reply: 'We don\'t mind, give it a try', 
            ReplyDate: '2020/03/08'
          },
          {
            id: 'vczxcioyuiojhfg',
            Name: 'KingGeorge',
            Email: 'KGB@info.com',
            Message: 'Coul you link me to a good cyber-security personnel for a covert operation?',
            MessageDate: '2020/05/24',
            Reply: 'CIA, FBI or NSS?', 
            ReplyDate: '2020/03/08'
          },
          {
            id: 'erweyuydgj',
            Name: 'Jerry Miche',
            Email: 'Mj@yahoo.com',
            Message: 'I am hungry o',
            MessageDate: '2020/05/24',
            Reply: '----------', 
            ReplyDate: '2020/03/08'
          },
          {
            id: '34523gfdfghcv',
            Name: 'Austin Freezy',
            Email: 'afreezy@gmail.com',
            Message: 'I am a Front-end guy, could you link me to a nice job please?',
            MessageDate: '2020/05/24',
            Reply: 'Call this number 08101570258', 
            ReplyDate: '2020/03/08'
          },
          {
            id: 'vbxcdfgrtwert',
            Name: 'Cynthia Michael',
            Email: 'cy@gmail.com',
            Message: 'I\'m an accounting student, can i still be a programmer?',
            MessageDate: '2020/05/24',
            Reply: 'Yes dear, you can be anything you want', 
            ReplyDate: '2020/03/08'
          },
          
        ],
      }
    },
  }
</script>