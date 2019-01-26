<template>
    <!--main menu-->
    <nav class="il-nav--painel" :class="checkPanel">
        <ul class="il-menu--list">
            <li class="il-menu--item" v-for="link in menu" :key="link.id"><router-link :to="{name:link.path}" class="generic-ancor il-menu--link"><span @click="closePanel()">{{link.label}}</span></router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      menu: [
        {
          id: 1,
          path: 'home',
          label: 'Home',
          title: 'Comece por aqui'
        },
        {
          id: 2,
          path: 'apod',
          label: 'Apod',
          title: 'Apod'
        },
        {
          id: 3,
          path: 'mars',
          label: 'Mars',
          title: 'Marte'
        },
        {
          id: 4,
          path: 'epic',
          label: 'Epic',
          title: 'Epic'
        }
      ]
    };
  },
  computed: {
    checkPanel(){
          if(this.$parent.showPanel){
              return "showPanel"
          }
      }
  },
  methods: {
      closePanel(){
          this.$parent.showPanel = false
      }
  }
};
</script>
