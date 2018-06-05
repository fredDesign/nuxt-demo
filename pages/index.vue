<template>
  <div>
    <banner/>

    <section class="container hero is-info is-medium is-bold">
     <div class="hero-body">
       <div class="container has-text-centered">
          <div>
                <h1 class="title">
                  nuxt-demo
                </h1>
                <h2 class="subtitle">
                  nuxt to Netlify
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
