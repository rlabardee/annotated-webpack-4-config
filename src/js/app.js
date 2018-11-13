// CSS Entry Point
import styles from '../css/app.pcss';

// JS Libs
import $ from 'jquery';

// JS Framework
import 'bootstrap';

// JS Components
import Header from './components/header';
import Hero from './components/hero';
import Narrative from './components/narrative';
import Carousel from './components/carousel';
import Figure from './components/figure';


window.jQuery = $;
$.noConflict();

window.activeColors = [];

// initialize the component classes
$('.header').each((index, element) => new Header(element));
$('.hero').each((index, element) => new Hero(element));
$('.narrative').each((index, element) => new Narrative(element));
$('.carousel').each((index, element) => new Carousel(element));
$('.figure').each((index, element) => new Figure(element));

// App main
const main = async () => {
    // Import our CSS
    // const Styles = await import(/* webpackChunkName: "styles" */ '../css/app.pcss');

    // // Async load the vue module
    // const Vue = await import(/* webpackChunkName: "vue" */ 'vue');
    // // Create our vue instance
    // const vm = new Vue.default({
    //     el: "#app",
    //     components: {
    //         'confetti': () => import(/* webpackChunkName: "confetti" */ '../vue/Confetti.vue'),
    //     },
    //     data: {
    //     },
    //     methods: {
    //     },
    //     mounted() {
    //     },
    // });

    // console.log('hello world!')
};
// Execute async function
main().then( (value) => {
});
