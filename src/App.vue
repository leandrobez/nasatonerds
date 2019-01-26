<template>
<div id="app">
    <vue-particles color="#dedede" :particleOpacity="0.7" :particlesNumber="80" shapeType="circle" :particleSize="2" linesColor="#dedede" :linesWidth="1" :lineLinked="false" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="1" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push" v-if="showParticle" />

    <div class="il-big--img"></div>
    <!--HEADER-->
    <header class="il-header">

        <IlHeader />

    </header>

    <!--ALERTS-->
    <il-alerts v-if="checkAlert" />

    <!--MAIN-->
    <main>

        <!--ROUTES-->
        <RouterView />

    </main>

    <!-- FOOTER-->
    <footer>
        <IlFooter />
    </footer>
</div>
</template>

<script>
import IlHeader from "./components/includes/HeaderComponent.vue";
import IlFooter from "./components/includes/FooterComponent.vue";
import IlAlerts from "./components/partials/_alerts.vue";

export default {
    name: "app",
    components: {
        IlHeader,
        IlFooter,
        IlAlerts
    },
    data() {
        return {
            showParticle: false,
            alerts: {
                class: '',
                message: null,
                active: false
            },
        }
    },
    computed: {
        checkAlert() {
            if (this.alerts.active) {
                return true;
            }
            return true
        },
    },
    mounted() {
        this.showParticle = true
    },

    methods: {
        setAlerts(msgType, m) {
            let delay = 3000;
            this.alerts.class = '';
            this.alerts.message = m;
            this.alerts.active = true;
            switch (msgType) {
                case 'success':
                    this.alerts.class = 'il-alert il-alert--success il-alert--show';
                    break;
                case 'info':
                    this.alerts.class = 'il-alert il-alert--info il-alert--show';
                    break;
                case 'danger':
                    this.alerts.class = 'il-alert il-alert--danger il-alert--show';
                    break;
                case 'warning':
                    this.alerts.class = 'il-alert il-alert--warning il-alert--show';
                    break;
            }
            setTimeout(() => {
                this.alerts.class = 'il-alert il-alert--hidden';
                this.alerts.message = '';
                this.alerts.active = false;
            }, delay);
        }
    },
};
</script>

<style>
@import "./sass/styles.css";
</style>
