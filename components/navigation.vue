<template>
    <header class="app-header">
    <nav class="navbar is-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-brand">
            <div class="navbar-item ">
                <a class="navbar-item brand-text" href="../">
 a demo by <img src="https://www.emencia.com/static/images/theme/logo_white.png?1526563669" width="112" height="28"></a>
            </div>
                <div class="navbar-burger burger"  data-target="navMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div id="navMenu" class="navbar-menu" >
                <div class="navbar-start">
                          <template v-if="!/\/.*?\/.*/.test(route.path)" v-for="route in this.$router.options.routes" >
                          <div class="navbar-item ">
                              <nuxt-link :to="{ name: route.name }" class="navbar-item ">{{ route.name.charAt(0).toUpperCase() + route.name.slice(1) }}</nuxt-link>
                           </div>
                          </template>


                </div>

            </div>
        </div>
    </nav>
    </header>

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

