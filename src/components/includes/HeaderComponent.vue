<template>
<div class="il-header--content il-particles">

    <!--main navigation-->
    <nav class="il-nav--top" :class="checkTop()">
        <div class="il-nav--wrapper">
            <div class="il-brand">Nasa<span>To</span>Nerds</div>
        </div>

        <div id="il-btn-mobile" class="il-nav--mobile" @click.prevent="controlMenu()" :class="checkMobile()">
            <span></span>
            <span></span>
            <span></span>
        </div>

    </nav>

    <div class="il-header--text">
        <div class="il-container--wrapper">
            <h1 class="il-big--title">Espaço! A Fronteira final.</h1>
            <h4 class="il-sub--title">Terra! Onde tudo começa.</h4>
        </div>
    </div>

    <!--main menu-->
    <il-nav />
</div>
</template>

<script>
import ilNav from './_nav.vue';

export default {
  name: 'HeaderComponent',

  components: {
    ilNav
  },

  mounted() {
    
  },
  
  data() {
    return {
      showPanel: false
    };
  },

  methods: {
    controlMenu() {
      if (!this.showPanel) {
        this.showPanel = true;
      } else {
        this.showPanel = false;
      }
    },

    checkTop() {
      if (this.showPainel) {
        return 'nav-up';
      }
      return;
    },

    checkMobile() {
      if (this.showPainel) {
        return 'deform move-center';
      }
      return;
    }
  }
};
</script>
