<template>
<!--apod-->
<section id="apod" class="il-section il-section--apod il-color-background--third il-section--nomargin">
    <h1 class="il-section--title al-center il-color-texture--second">|| Astronomy Picture of the Day ||</h1>

    <!--delay-->
    <div class="il-nasa--delay il-delay--apod" :class="activeDelay()">
        <div class="il-img-circles">
            <div class="il-circle"></div>
            <div class="il-circle"></div>
            <div class="il-circle"></div>            
            <div class="il-circle"></div>
        </div>
    </div>

    <!--container-->
    <div class="il-apod--container" :class="checkPhoto">

        <!--images of the day-->
        <div class="il-apod--picture">
            <img :src="photo.hdurl" alt="" class="responsive-image il-img--circle img-border-4">
            <a href="" class="il-apod--link il-btn il-color--text__lighten">Download</a>
        </div>

        <!--result-->
        <div class="il-container--wrapper">
            <div class="il-apod--content">
                <h4 class="il-sub--title il-color--text__lighten al-center">{{photo.title}}</h4>
                <p class="il-apod--text il-color--text__lighten">{{photo.date}}</p>
                <p class="il-apod--text il-color--text__lighten">{{photo.explanation}}</p>
                <p class="il-apod--text il-color--text__lighten">
                    Veja mais em <a :href="photo.url" target="_blank" class="generic-anchor">Visitar</a>
                </p>
            </div>
        </div>

        <!--video-->
        <div id="il-player--video" class="il-player--video">
            <iframe id="vidTrailer_Youtube_api" style="top:0;left:0;position:relative" class="vjs-tech" frameborder="0" allowfullscreen="1" allow="autoplay; encrypted-media" title="YouTube video player" src=""></iframe>
        </div>
    </div>

</section>
</template>

<script>
import api from "../commom/request.api.js";

export default {
    name: "Apod",
    computed: {
        checkPhoto() {
            if(this.hasPhoto){
                return "il-container--show"
            }
            return false
        }
    },
    mounted() {
        this.apiApod();
    },
    data() {
        return {
            hasPhoto: false,
            showDelay: false,
            photo: {}
        };
    },
    methods: {
        activeDelay() {
            if (this.showDelay) {
                return "il-circles--show";
            }
            return;
        },
        apiApod() {
            let allApods = api.getApod();
            allApods
                .then(res => {
                    let media = res.result.media_type;
                    if (media !== "video") {
                        this.photo = {
                            copyright: res.result.copyright,
                            date: res.result.date,
                            explanation: res.result.explanation,
                            hdurl: res.result.hdurl,
                            media_type: res.result.media_type,
                            service_version: res.result.service_version,
                            title: res.result.title,
                            url: res.result.url
                        };
                        this.hasPhoto = true;
                        //console.log(this.photo);
                    }
                })
                .catch(err => {
                    console.log(err)
                });
        }
    }
};
</script>
