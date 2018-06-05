<template>
  <div>
    <banner/>
    <foot/>
  </div>
</template>

<script>
import banner from '@/components/banner.vue'
import foot from '@/components/foot.vue'

export default {

  transition: 'bounce',
  components: {
    banner,
    foot
  }
}
</script>

<style>
</style>
