<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script>
import './button.css';
import '.././styles/variables.css';
import { reactive, computed } from 'vue';


export default {
  name: 'my-button',

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
    //backgroundColor: {
    //  type: String,
    //},
    // Icon: {
    //   type: String,
    //   default: false,
    // }
    //disabled: Boolean
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'btn': true,
        //'btn--primary': props.primary,
        //'btn--secondary': !props.primary,
         [`btn--${props.configuration || 'primery'}`]: true,
        [`btn--${props.size || 'large'}`]: true,       
      })),
      //style: computed(() => ({
      //  backgroundColor: props.backgroundColor,
      //})),
      onClick() {
        emit('click');
      }
    }
  },
};
</script>
