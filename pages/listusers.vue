
<template>
  <div class="app-container">
    <banner/>

    <section class=" hero is-info is-small is-bold">
     <div class="hero-body">
       <div class="container ">

                <div class="columns is-vcentered">
                    <div class="column is-6 is-5-fullhd is-offset-1-fullhd">
                        <h1 class="title is-1">
                            Vuex+Nuxt+Netlify
                        </h1>
                        <h2 class="subtitle is-3">
                            Créer votre site / blog  en Progressive Web App avec Nuxt.js   puis publiez le via netlify
                        </h2>
                        <div class="links">
                          <a
                            href="https://nuxtjs.org/"
                            target="_blank"
                            class="button   is-primary">Documentation</a>
                          <a
                            href="https://github.com/fredDesign/nuxt-demo/"
                            target="_blank"
                            class="button--grey">GitHub</a>
                        </div>
                    </div>
                    <div class="column is-6">
                                 <ul class="users">
                                   <li v-for="user in users" :key="user.id">
                                     <nuxt-link :to="'/users/'+user.id">{{ user.name }}</nuxt-link>
                                   </li>
                                 </ul>
                    </div>
                </div>

          </div>
       </div>
    </section>
    <foot/>
  </div>


</template>





<script>
import axios from 'axios'

import banner from '@/components/banner.vue'
import foot from '@/components/foot.vue'

export default {
  head() {
    return {
      bodyAttrs: {

      },
      htmlAttrs: {
        class: 'has-navbar-fixed-top',
      }
    }
  },
  components: {
    banner,
    foot
  },
  async asyncData() {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    return { users: data }
  }
}
</script>
