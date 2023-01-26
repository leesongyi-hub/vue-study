<template>
  <div class="container">
    <div class="btn-item-wrap">
      <section>
        <my-button configuration="primary" size="xlarge" label="버튼명" />
        <my-button configuration="primary" size="large" label="버튼명" />
        <my-button configuration="primary" size="medium" label="버튼명" />
        <my-button configuration="primary" size="small" label="버튼명" />   
      </section>

      <section>
        <my-button configuration="secondary" size="xlarge" label="버튼명" />
        <my-button configuration="secondary" size="large" label="버튼명" />
        <my-button configuration="secondary" size="medium" label="버튼명" />
        <my-button configuration="secondary" size="small" label="버튼명" />
      </section>

      <section>
        <my-button configuration="tertiary" size="xlarge" label="버튼명" />
        <my-button configuration="tertiary" size="large" label="버튼명" />
        <my-button configuration="tertiary" size="medium" label="버튼명" />
        <my-button configuration="tertiary" size="small" label="버튼명" />
      </section>

      <section>
        <my-button configuration="ghost" size="xlarge" label="버튼명" />
        <my-button configuration="ghost" size="large" label="버튼명" />
        <my-button configuration="ghost" size="medium" label="버튼명" />
        <my-button configuration="ghost" size="small" label="버튼명" />
      </section>
    </div>

  </div>
</template>

<script>

import MyButton from './stories/Button.vue';

export default {

  name: 'idexHome',

  components: { 
     MyButton
   }
};

</script>

<style module>
 .container{padding:24px;width:600px;margin:0 auto;}
  section button{margin-right:16px;margin-bottom:16px;}
</style>