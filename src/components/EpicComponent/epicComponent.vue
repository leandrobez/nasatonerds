<template>
<!--epic-->
<section id="epic" class="il-section il-section--epic il-color-background--third il-section--nomargin">
    <h1 class="il-section--title al-center il-color--text__dark">|| Earth Polychromatic Imaging Camera - Epic
        ||</h1>

    <!--delay-->
    <div class="il-nasa--delay il-delay--epic" :class="activeDelay()">
        <div class="il-circles">
            <div class="il-circle"></div>
            <div class="il-circle"></div>
            <div class="il-circle"></div>
            <div class="il-circle"></div>
        </div>
    </div>

    <!--no results-->
    <div class="il-alert il-alert--info il-alert--epic">
    </div>

    <!--container-->
    <div class="il-epic--container" v-if="checkPhoto()">
        <div class="il-epic--card" v-for="(photo,index) in photos" :key="index">
            <div class="il-epic--card__body">
                <span class="il-card--caption">{{photo.caption}}</span>
                <p class="il-color--text__dark">{{photo.date}}</p>
                <p class="il-color--text__dark">{{photo.image}}</p>
            </div>

            <div class="il-epic--card__poster">
                <img :src="urlBase+photo.image" :alt="photo.identifier" class="responsive-image">
            </div>

            <div class="il-link">
                <a :href="urlBase+photo.image" class="il-color--text__lighten" target="_blank">ver</a>
            </div>
        </div>
    </div>

</section>
</template>

<script>
import api from "../commom/request.api.js";

export default {
  name: "Epic",

  data() {
    return {
      hasPhoto: false,
      showDelay: false,
      urlBase: "https://epic.gsfc.nasa.gov/archive/natural/",
      photos: []
    };
  },

  mounted() {
    this.apiApod();
  },

  methods: {
    activeDelay() {
      if (this.showDelay) {
        return "il-circles--show";
      }
      return;
    },

    checkPhoto() {
      if (this.hasPhoto) {
        return true;
      }
      return false;
    },

    apiApod() {
      let allApods = api.getEpic("2018", "12", "10");

      allApods.then(res => {
        let photos = [];
        let countResult = res.result.length;
        if (countResult > 0) {
          this.hasPhoto = true;
          for (let i = 0; i < countResult; i++) {
            if (i < 10) {
              photos.push({
                date: "2018/12/10",
                caption: res.result[i].caption,
                identifier: res.result[i].identifier,
                image: "2018/12/10/png/" + res.result[i].image + ".png"
              });
              //console.log(res.result[i]);
            } else {
              this.photos = photos;
            }
          }
        }
      });
    }
  }
};
</script>
