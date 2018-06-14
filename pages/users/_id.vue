
<template>
  <div class="app-container">
    <banner/>

    <section class=" hero is-info is-small is-bold">
     <div class="hero-body">
       <div class="container ">

                <div class="columns is-vcentered">
                    <div class="column is-12 is-12-fullhd is-offset-1-fullhd">
                        <div class="user">
                            <h3>{{ name }}</h3>
                            <h4>@{{ username }}</h4>
                            <p>Email : {{ email }}</p>
                            <p><nuxt-link to="/">List of users</nuxt-link></p>
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
  validate({ params }) {
    return !isNaN(+params.id)
  },
  async asyncData({ params, error }) {
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${+params.id}`)
      return data
    } catch (e) {
      error({ message: 'User not found', statusCode: 404 })
    }
  }
}
</script>

<style scoped>
.user {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
</style>
