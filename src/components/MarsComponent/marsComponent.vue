<template>
<!--mars-->
<section id="mars" class="il-section il-section--mars il-color-background--third il-section--nomargin">
    <h1 class="il-section--title al-center il-color--text__dark">|| NASA's Mars Exploration Program ||</h1>
    <!--<h4 class="il-small--title il-color--text__dark">ESTA API É PROJETADA PARA COLETA DE DADOS DE IMAGEM DE
            MARTE OBTIDAS PELOS ROVERS: CURIOSITY,OPPORTUNITY E SPIRIT.</h4>-->

    <!--delay-->
    <div class="il-nasa--delay il-delay--mars" :class="activeDelay()">
        <div class="il-img--circles">
            <div class="il-circle"></div>
            <div class="il-circle"></div>
            <div class="il-circle"></div>
            <div class="il-circle"></div>
        </div>
    </div>

    <!--data for search-->
    <div class="il-form--field">
        <label for="dataSearch">Informa a data</label>
        <input type="date" id="dataSearch" v-model="dataSearch" class="il-data--search" @change="apiMars()" />
    </div>

        <!--container-->
        <div class="il-mars--container" v-if="checkPhoto()">
            <!--result-->
            <div class="il-mars--card" v-for="(photo,index) in photos" :key="index">
                <div class="il-mars--card__body">
                    <span class="il-card--caption">{{photo.camera.full_name}}</span>
                    <p class="il-color--text__dark">{{photo.rover.name}}</p>
                    <p class="il-color--text__dark">{{photo.earth_date}}</p>
                </div>

                <div class="il-mars--card__poster">
                    <img :src="photo.img_src" class="responsive-image">
            </div>

                    <!-- <div class="il-link">
                <a :href="urlBase+photo.image" class="il-color--text__lighten" target="_blank">ver</a>
                </div>-->
            </div>
        </div>

</section>
</template>

<script>
import api from '../commom/request.api.js';

export default {
    name: 'Mars',

    data() {
        return {
            dataSearch: '',
            hasAlert: false,
            hasPhoto: false,
            showDelay: false,
            urlBase: 'https://epic.gsfc.nasa.gov/archive/natural/',
            photos: [],
            cameras: {
                curiosity: [
                    'fhaz',
                    'rhaz',
                    'mast',
                    'chemcam',
                    'mahli',
                    'mardi',
                    'navcam'
                ],
                opportunity: ['fhaz', 'rhaz', 'navcam', 'pancam', 'minites'],
                spirit: ['fhaz', 'rhaz', 'navcam', 'pancam', 'minites']
            }
        };
    },

    mounted() {
        //this.apiMars();
    },

    methods: {

        activeDelay() {
            if (this.showDelay) {
                return 'il-circles--show';
            }
            return;
        },

        checkPhoto() {
            if (this.hasPhoto) {
                return true;
            }
            return false;
        },

        getCamera(rover) {
            let camera = null;
            let max, x;
            let cameras = this.cameras;
            switch (rover) {
                case 'curiosity':
                    max = cameras.curiosity.length;
                    x = Math.floor(Math.random() * max + 1);
                    camera = cameras.curiosity[x];
                    break;
                case 'opportunity':
                    max = cameras.opportunity.length;
                    x = Math.floor(Math.random() * max + 1);
                    camera = cameras.opportunity[x];
                    break;
                case 'spirit':
                    max = cameras.spirit.length;
                    x = Math.floor(Math.random() * max + 1);
                    camera = cameras.spirit[x];
                    break;
            }
            return camera;
        },

        apiMars() {
            this.showDelay = true;
            let today = this.dataSearch.split("-");
            const rover = ['curiosity', 'opportunity', 'spirit'];
            let roverKey = Math.floor(Math.random() * rover.length);
            let camera = this.getCamera(rover[roverKey]);
            let allMars = api.getMars(rover[roverKey], camera, today);
            allMars.then(res => {
                let photos = res.result.photos;
                console.log(res)
                if (photos.length > 0) {
                    this.hasPhoto = true;
                    this.photos = photos;
                    setTimeout(() => {
                        this.showDelay = false;
                    }, 3000)
                } else {
                    this.$parent.alerts.active = true;
                    this.$parent.setAlerts("warning", "Nenhuma foto encontrada. Por Favor escolha outra data.")
                    setTimeout(() => {
                        this.showDelay = false;
                    }, 3000)
                }
            });
        }
    }
};
</script>
