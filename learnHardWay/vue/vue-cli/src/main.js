import Vue from 'vue'
import d3 from 'd3'
import AppTemp from './AppTemp.vue'
import ListView from './ListView.vue'
import Pop from './Pop.vue'
import vue-strap from 'vue-strap/dist'

require('./app.css');

new Vue({
  el: 'body',
  components: {
      'atp': AppTemp,
      'pop': Pop
  }
});

// d3.select('body')
//     .append('div')
//     .attr('class', 'monkey')
//     .text('hello monkey');
