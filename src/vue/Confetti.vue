<template>
    <main>
    </main>
</template>

<script>
    import Vue from 'vue'
    import VueConfetti from 'vue-confetti'

    Vue.use(VueConfetti);

    export default {
        mounted: function() {
            this.$confetti.start({
                shape: 'circle',
                colors: ['DodgerBlue'],
            });
            setTimeout(() => {
                this.$confetti.stop();
            }, 5000);
        },
        methods: {}
    }
</script>
