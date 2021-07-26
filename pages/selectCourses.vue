<template>
  <div>
    <hero-section :hero="hero"/>
    <v-container>
      <v-row>
        <v-col md="8">
          <!-- <h1>about the course</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus molestiae ratione repellat optio distinctio earum porro debitis praesentium incidunt! Sapiente voluptatibus nemo distinctio consequatur eum, 
            omnis nobis dolore laudantium laborum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium similique magnam ullam voluptatibus sequi quibusdam, possimus et eaque nam. Autem nostrum voluptatum 
            enim ab vitae. Nemo at eum earum maiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, fugiat! At mollitia similique aspernatur facilis, dolorem fugit! Praesentium voluptas nihil reiciendis 
            aliquam amet est veniam sequi, pariatur hic tempora sit? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit veniam itaque deserunt porro, eos tenetur. Nisi alias commodi voluptate expedita asperiores 
            provident ad hic deserunt soluta? Voluptates odit sit impedit!
          </p> -->
          <v-card flat>
            <v-card-title>
              <span class="illustration text-h4 mt-10">About the course</span>
            </v-card-title>
            <v-card-text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus molestiae ratione repellat optio distinctio earum porro debitis praesentium incidunt! Sapiente voluptatibus nemo distinctio consequatur eum, 
              omnis nobis dolore laudantium laborum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium similique magnam ullam voluptatibus sequi quibusdam, possimus et eaque nam. Autem nostrum voluptatum 
              enim ab vitae. Nemo at eum earum maiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, fugiat! At mollitia similique aspernatur facilis, dolorem fugit! Praesentium voluptas nihil reiciendis 
              aliquam amet est veniam sequi, pariatur hic tempora sit? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit veniam itaque deserunt porro, eos tenetur. Nisi alias commodi voluptate expedita asperiores 
              provident ad hic deserunt soluta? Voluptates odit sit impedit!
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md="4">
          <v-card dark flat>
            <v-card-title class="text-center d-flex justify-center">
              Course Outline
            </v-card-title>
            <v-card-text>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Single-line item</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>Two-line item</v-list-item-title>
                  <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title>Three-line item</v-list-item-title>
                  <v-list-item-subtitle>
                    Secondary line text Lorem ipsum dolor sit amet,
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    consectetur adipiscing elit.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <span class="text-h5">Related Courses</span>
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
        title: 'Dive in tech',
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