
<template>
  <div class="app-container">
    <banner/>

    <section class=" hero is-info is-small is-bold">
     <div class="hero-body">
       <div class="container ">

                <div class="columns is-vcentered">
                    <div class="column is-6 is-5-fullhd is-offset-1-fullhd">
                        <h1 class="title is-1">
                            {{name.toUpperCase()}}
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
                        <div class="section-media">

                                  <img :src="breed" alt="">


                        </div>
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

  components: {
    banner,
    foot
  },
  async asyncData ({params}) {
    const { data } = await axios.get(`https://dog.ceo/api/breed/${params.breed}/images/random`)
    return { breed: data.message, name: params.breed }
  }
}
</script>


