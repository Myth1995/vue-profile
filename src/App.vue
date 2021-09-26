<template>
  <div id="app">
    <!--NAV-->
    <NavBar />
    <div class="clear"></div>
    <!--END NAV-->
       
    <!--HEADER-->
    <Header />
    <!--END HEADER-->

    <!--HEADER-->
    <OurService />
    <!--END HEADER-->

    <!--HEADER-->
    <More />
    <!--END HEADER-->

    <!--HEADER-->
    <Team />
    <!--END HEADER-->

    <!--HEADER-->
    <Count />
    <!--END HEADER-->

    <!--HEADER-->
    <Portfolio />
    <!--END HEADER-->

    <!--HEADER-->
    <Pricing />
    <!--END HEADER-->

    <!--HEADER-->
    <News />
    <!--END HEADER-->

    <!--HEADER-->
    <Vedio />
    <!--END HEADER-->

    <!--HEADER-->
    <Buty />
    <!--END HEADER-->

    <!--HEADER-->
    <Skills />
    <!--END HEADER-->

    <!--HEADER-->
    <Stay />
    <!--END HEADER-->

    <!--HEADER-->
    <Footers />
    <!--END HEADER-->

    <!--HEADER-->
    <ScrollToTops />
    <!--END HEADER-->

    <!--HEADER-->
    <!-- <Loading />  -->
    <!--END HEADER-->
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'
import Header from './components/Header.vue'
import OurService from './components/OurService.vue'
import More from './components/More.vue'
import Team from './components/Teamm.vue'
import Count from './components/Count.vue'
import Portfolio from './components/Portfolio.vue'
import Pricing from './components/Pricing.vue'
import News from './components/News.vue'
import Vedio from './components/Vedioo.vue'
import Buty from './components/Buty.vue'
import Skills from './components/Skills.vue'
import Stay from './components/Stay.vue'
import Footers from './components/Footerr.vue'
import ScrollToTops from './components/ScrollToTop.vue'
// import Loading from './components/Loading.vue'

export default {
  name: 'App',
  components: {
      NavBar,
      Header,
      OurService,
      More,
      Team,
      Count,
      Portfolio,
      Pricing,
      News,
      Vedio,
      Buty,
      Skills,
      Stay,
      Footers,
      ScrollToTops,
      // Loading,
  }
}
</script>

