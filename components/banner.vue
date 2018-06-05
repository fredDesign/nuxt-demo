<template>
  <section id="banner">
    <div class="inner">
      <h1 class="title is-1">Créer votre site / blog <br/>en Progressive Web App avec Nuxt.js <br/> puis publiez le via netlify</h1>
    </div>
    <Navigation/>
  </section>
</template>
<script>
import Navigation from '~/components/navigation.vue'

export default {
  components: {
    Navigation
  }
}
</script>
