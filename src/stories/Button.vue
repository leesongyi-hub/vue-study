<template>
  <component :class="classes" @click="onClick" :style="style" :is="buttonType" :v-on="toggleClass">
    <span class="label">{{label}}</span>
    <slot></slot>
  </component>
</template>

<script>
import './button.css';
import '.././styles/variables.css';
import '.././styles/icon.css';
import { reactive, computed } from 'vue';

export default {
  name: 'base-button',

  computed: {
    buttonType() {
      if (this.href) {
        return "a";
      } else {
        return "button";
      }
    }
  },

  methods: {
    toggleClass(){
      alert('test')
    }
  },

  props: {
    configuration: {
      type: String,
      validator: function (value) {
        return ['ghost', 'primary', 'secondary', 'tertiary'].indexOf(value) !== -1;
      },
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large', 'xlarge'].indexOf(value) !== -1;
      },
    },
    label: {
      type: String,
      required: true,      
    },
    href: {
      required: false,
      type: String,
      default: null
    },
    
  },
  //emits: ['click'],

  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
          'btn': true,
          'btn--icoOnly': false,
          [`btn--${props.configuration || 'primery'}`]: true,
          [`btn--${props.size || 'large'}`]: true,
        })
      ),      
    }
  },


};
</script>
