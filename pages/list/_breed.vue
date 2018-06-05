<template>
<div class="app-container">
    <banner/>
  <section class="container">
    <div>
      <img :src="breed" alt="">
      <h4>{{name.toUpperCase()}}</h4>
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

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  text-align: center;
}
img
{
  display: inline-block;
  border-radius: 4px;
  border: 4px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  margin-top: 10px;
}
h4 {
  margin-top: 10px;
  color: #3b8070;
}
</style>
