<template>
<div :class="getClass()">
    <p>{{$parent.alerts.message}}</p>
</div>
</template>

<script>
export default {
    name: "Alerts",

    methods: {

        getClass() {
            if (this.$parent.alerts.class) {
                return `${this.$parent.alerts.class} il-alert--posisione`;
            }
        }
    }
}
</script>
