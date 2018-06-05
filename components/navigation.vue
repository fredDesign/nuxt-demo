<template>
    <nav class="navbar is-white" role="navigation">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item brand-text" href="../">
 <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>
                <div class="navbar-burger burger"  data-target="navMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div id="navMenu" class="navbar-menu" >
                <div class="navbar-start">
                          <template v-if="!/\/.*?\/.*/.test(route.path)" v-for="route in this.$router.options.routes" >
                              <nuxt-link :to="{ name: route.name }" class="navbar-item ">{{ route.name.charAt(0).toUpperCase() + route.name.slice(1) }}</nuxt-link>
                          </template>


                </div>

            </div>
        </div>
    </nav>


</template>
<script>
 export default {
    mounted () {
            var burger = document.querySelector('.burger');
            var nav = document.querySelector('#'+burger.dataset.target);
            burger.addEventListener('click', function(){
            burger.classList.toggle('is-active');
            nav.classList.toggle('is-active');});
                  console.log('toto'+burger)

}}


    </script>

