<template>
  <section class="container">
    <div>
      <a v-for="breed in breeds" :key="breed" class="breed" :href="'/list/'+breed">
        {{breed}}
      </a>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData () {
    const { data } = await axios.get(`https://dog.ceo/api/breeds/list`)
    return { breeds: data.message }
  }
}
</script>
