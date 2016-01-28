import Vue from 'vue'
import d3 from 'd3'
import AppTemp from './AppTemp.vue'
import ListView from './ListView.vue'
import Pop from './Pop.vue'

var vmdl = require('vue-mdl');
// var Vue = require('vue');
vmdl.register(Vue, 'checkbox');
vmdl.registerAll(Vue);

var checkbox = vmdl.components['mdl-checkbox'];
new Vue({
  el: 'body',
  components: {
       'mdlCheckbox': checkbox
  }
});

// d3.select('body')
//     .append('div')
//     .attr('class', 'monkey')
//     .text('hello monkey');
