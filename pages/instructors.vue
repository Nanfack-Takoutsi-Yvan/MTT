<template>
  <div>
    <hero-section :hero="hero"/>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card flat max-width="600px">
            <v-card-title>
              <span class="illustration text-h4 mt-10 ">Our instructors</span>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          md="4"
        >
          <v-card class="card" flat>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-text>
                  <v-list-item three-line>
                    <v-list-item-content>
                      <v-list-item-title>Name</v-list-item-title>
                      <v-list-item-subtitle>
                        email
                      </v-list-item-subtitle>
                      <v-list-item-subtitle>
                        nombre de cours
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-card-text>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img src="homme.jpg"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue'

export default {
  name:'Index',
  components: {
    HeroSection
  },
  data(){
    return{
      hero:{
        size: 434,
        title: 'Become an instructor',
        text: '',
        button:'Join Now'
      },
      items: [
        {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'I am the instructor',
          artist: 'Foster the People',
        },
        {
          color: '#D60076',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'I am the instructor',
          artist: 'Ellie Goulding',
        },
        {
          color: '#D60076',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'I am the instructor',
          artist: 'Ellie Goulding',
        },  
      ],
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