<template>
  <div>
    <hero-section :hero ="hero" />
    <v-container>
      <v-row>
        <v-col>
          <v-card flat max-width="600px">
            <v-card-title>
              <span class="illustration text-h4 mt-10 ">Rapid Technology Programs</span>
            </v-card-title>
            <v-card-text>
              <p class="text-body-1">
                Each student should validate at least six(6) of the following Foundation courses
                and one(1) specialization course in order to receive a Certificate of Completion.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h3 class="text-h5">General Courses</h3>
        </v-col>
        <v-col v-for="i in 4" :key="i" sm="4" lg="3" xl="2">
          <courses-card/>
        </v-col>
        <v-col cols="12">
          <v-btn class="no-hover ml-n4" text :ripple="false" >
            See All Courses
            <v-icon>
              mdi-chevron-right
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h3 class="text-h5 ">Specialization Courses</h3>
        </v-col>
        <v-col v-for="i in 4" :key="i"  sm="4" md="3" xl="2">
          <courses-card/>
        </v-col>
        <v-col cols="12">
          <v-btn class="no-hover ml-n4" text :ripple="false" >
            See All Courses
            <v-icon>
              mdi-chevron-right
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CoursesCard from '../components/CoursesCard.vue'
import HeroSection from '../components/HeroSection.vue'

export default {
  name:'Index',
  components: {
    HeroSection,
    CoursesCard
  },
  data(){
    return {
      hero:{
        size: 632,
        title: 'Dive in tech',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas beatae architecto commodi nesciunt quos.',
        button:'Enroll now',
      },
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
</style>