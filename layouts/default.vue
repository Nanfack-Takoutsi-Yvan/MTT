<template>
  <v-app>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-app-bar

      :height="`${ offsetTop > 144 ? 56 : 64 }`"
      :color="`${ offsetTop > 144 ? 'primary' : 'black'}`"
      elevate-on-scroll
      fixed elevation="0" dark style="border-bottom: 1px solid #eb58a8 !important"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"/>
      <v-app-bar-title v-text="title"/>
      <v-spacer></v-spacer>
      <div class="hidden-sm-and-down d-flex">
        <v-btn text to="/" class="filled">
          Home
        </v-btn>
        <v-btn text to="/instructors" class="filled">
          Instructors
        </v-btn>
        <v-btn text to="/courses" class="filled">
          Our courses
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <login-popup/>
    </v-app-bar>
    <div>
      <Nuxt/>
    </div>
    
    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import LoginPopup from '../components/LoginPopup.vue'

export default {
  components:{
    LoginPopup
  },
  data () {
    return {
      color:'',
      clipped: false,
      drawer: false,
      fixed: false,
      offsetTop: 0,
      view: {
        topOfPage: true
      },
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'MyTeachersTech'
    }
  },
  mounted(){
    document.body.onscroll = () => {
      this.offsetTop = window.pageYOffset
      console.log(this.offsetTop) 
    }
  },
}
</script>

<style>
* {
  word-break: keep-all !important;
}
.no-hover.theme--light.v-btn:hover::before {
  opacity: 0 !important;
}
.v-app-bar .v-btn.filled {
  padding-top: 32px !important;
  padding-bottom: 32px !important;
  border-radius: 0;
}
.v-app-bar.primary .v-btn.filled {
  padding-top: 28px !important;
  padding-bottom: 28px !important;
}
.v-app-bar.black .v-btn--active.v-btn {
  color: #d60076 !important;
}
</style>