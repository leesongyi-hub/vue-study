import BaseButton from './Button.vue';


// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: BaseButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' },
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'xlarge'],
    },
    configuration: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'ghost'],
    },  
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BaseButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<base-button v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  configuration: 'primary',
  label: '버튼명',
  Icon: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  configuration: 'secondary',
  label: '버튼명',
  Icon: false,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  configuration: 'tertiary',
  label: '버튼명',
  Icon: false,
};

export const Ghost = Template.bind({});
Ghost.args = {
  configuration: 'ghost',
  label: '버튼명',
  Icon: false,
};
