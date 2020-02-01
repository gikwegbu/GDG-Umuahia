<template> 
        <v-carousel show-arrows-on-hover>
            <v-carousel-item  v-for="(item,i) in items" :key="i"  :src="item.src"  ripple reverse-transition="fade-transition" transition="fade-transition" > 
            </v-carousel-item>
        </v-carousel> 
</template>
<style >
.v-image__image--cover{
  background-size: contain !important; 
  /* height: 20vh; */

}
</style>
<script>
  export default { 
    data () {
      return {
        items: [
          {
            src: 'https://secure.meetupstatic.com/photos/event/1/4/4/0/highres_468425184.jpeg'
          },
          {
            src: 'https://pbs.twimg.com/media/D8g7D29W4AA-EK2.jpg'
          },
          {
            src: 'https://pbs.twimg.com/media/Dhtj2j9W4AAoh9G.jpg'
          },
          {
            src: 'https://miro.medium.com/max/1560/1*IGLo5NW1UCYa3bCFjzXXRQ.jpeg',
          },
        ],
        /* items: [
          {
            src: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fsecure.meetupstatic.com%2Fphotos%2Fevent%2F1%2F4%2F4%2F0%2Fhighres_468425184.jpeg&imgrefurl=https%3A%2F%2Fwww.meetup.com%2FGDG-Umuahia%2F&docid=F0MHu5vcClmAfM&tbnid=Mrynlz-QlXk-wM%3A&vet=10ahUKEwj78ODM16HnAhXeVBUIHbt8CYsQMwhAKAAwAA..i&w=2803&h=1258&bih=728&biw=1280&q=gdg%20umuahia&ved=0ahUKEwj78ODM16HnAhXeVBUIHbt8CYsQMwhAKAAwAA&iact=mrc&uact=8 ',
          },
          {
            src: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FD8g7D29W4AA-EK2.jpg&imgrefurl=https%3A%2F%2Ftwitter.com%2Fjohneh_official%2Fmedia&docid=dWhlzK0CwJR8MM&tbnid=TS5kxBM_52bcsM%3A&vet=10ahUKEwj78ODM16HnAhXeVBUIHbt8CYsQMwiJASgeMB4..i&w=1080&h=902&itg=1&bih=728&biw=1280&q=gdg%20umuahia&ved=0ahUKEwj78ODM16HnAhXeVBUIHbt8CYsQMwiJASgeMB4&iact=mrc&uact=8 ',
          },
          {
            src: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FDhtj2j9W4AAoh9G.jpg&imgrefurl=https%3A%2F%2Ftwitter.com%2Fjohneh_official%2Fmedia&docid=dWhlzK0CwJR8MM&tbnid=yIq3NAFH5TmawM%3A&vet=10ahUKEwj78ODM16HnAhXeVBUIHbt8CYsQMwiuASgwMDA..i&w=1080&h=793&itg=1&bih=728&biw=1280&q=gdg%20umuahia&ved=0ahUKEwj78ODM16HnAhXeVBUIHbt8CYsQMwiuASgwMDA&iact=mrc&uact=8',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ], */
      }
    },
  }
</script>