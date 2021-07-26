<template>
  <div>
    <hero-section :hero="hero"/>
    <v-container>
      <v-row>
        <v-col cols="12">
          <span class="text-h5">Find a course</span>
        </v-col>
        <v-col  v-for="i in 4" :key="i" sm="4" lg="3" xl="2">
          <courses-card/>
        </v-col>
        <v-col  v-for="i in 4" :key="i" sm="4" lg="3" xl="2">
          <courses-card/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CoursesCard from '../components/CoursesCard.vue'
import HeroSection from '../components/HeroSection.vue'

export default {
  name:'course',
  components:{
    HeroSection,
    CoursesCard
  },
  data() {
    return {
       items: [
        {
          icon: 'mdi-wifi',
          text: 'Wifi',
        },
        {
          icon: 'mdi-bluetooth',
          text: 'Bluetooth',
        },
        {
          icon: 'mdi-chart-donut',
          text: 'Data Usage',
        },
      ],
      hero:{
        size: 416,
        title: 'Our courses',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas beatae architecto commodi nesciunt quos.',
        button:'Enroll now',
      }
    }
  }
}
</script>


<style>
  .illustration {
    position: relative;
    z-index: 2;
  }
  .illustration::before {
    content: "";
    position: absolute;
    top: -4px;
    z-index: -1;
    left: -55px;
    width: 88px;
    height: 88px;
    background-image: url('../static/illustration.png');
    background-repeat: no-repeat;
    background-size: contain;
  }
  .illustration::first-letter {
    color: white;
  }
  .no-hover:hover{
    color: #D60076;
  }
  .card.v-sheet.v-card{
    border: 1px solid black;
    border-radius: 0;
  }
</style>