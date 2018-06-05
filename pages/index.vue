<template>
  <div>
    <banner/>

    <section class="container">
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
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="button--grey">GitHub</a>
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
