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
                            class="button--green">Documentation</a>
                          <a
                            href="https://github.com/fredDesign/nuxt-demo/"
                            target="_blank"
                            class="button--grey">GitHub</a>
                        </div>
                    </div>
                    <div class="column is-6">
                        <div class="section-media">
                            <img role="presentation" src="https://wir.skyrock.net/wir/v1/resize/?c=isi&im=%2F3091%2F56573091%2Fpics%2F3074237591_2_5_SGgXxgdw.png" >
                            <p> <small><a href="/library/karlotta-the-knight"><u>Karlotta the Knight</u></a> with her squire and steed.</small> </p>
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
import banner from '@/components/banner.vue'
import foot from '@/components/foot.vue'

export default {
  components: {
    banner,
    foot
  }
}

</script>

<style>
</style>
