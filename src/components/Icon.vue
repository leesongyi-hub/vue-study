<template>
    <i
      class="ico"
      :size ="size"
    >
      {{ label }}
    </i>
</template>
<script>

export default {
  name: 'base-icon',

  data(){
    return{
    }
  },


  props: {
    label:{
      type : String,
      required: true,
    },
    color:{
      type : String,
      default: '#000',
    },
    size:{
      type : String,
    },
    symbol:{
      type : String,
    }
  },

  methods: {

  }
};
</script>

<style>
.ico{
  display:inline-block;
  background-repeat:no-repeat;
  background-position:center;
  background-size:100%;
}

.ico.white{
  background-color:#fff;
}
.ico.primary{
  background-color: var(--text-color-primary);
}

.ico_h16{
  width:16px;height:16px;mask-size:16px 16px;
}
.ico_h20{
  width:20px;height:20px;mask-size:20px 20px;
}
.ico_h24{
  width:24px;height:24px;mask-size:24px 24px;
}

.ico_file{
  background-color: #343739;
  mask-image: url('../assets/images/icon/ic-file.svg');
  -webkit-mask-image: url('../assets/images/icon/ic-file.svg');
}
.ico_heart{
  background-color: #343739;
  mask-image: url('../assets/images/icon/ic-bookmark.svg');
  -webkit-mask-image: url('../assets/images/icon/ic-bookmark.svg');
}
.ico_heart.on{
  background-color: #343739;
  mask-image: url('../assets/images/icon/ic-bookmark.svg');
  -webkit-mask-image: url('../assets/images/icon/ic-bookmark.svg');
}
</style>