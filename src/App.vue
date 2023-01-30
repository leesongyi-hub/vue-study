<template>
  <div class="container">
    <div class="btn-item-wrap">
      <h2>기본 버튼</h2>
      <section>
        <base-button configuration="primary" size="xlarge" label="버튼명" />
        <base-button configuration="primary" size="large" label="버튼명3" />
        <base-button configuration="primary" size="medium" label="버튼명" />
        <base-button configuration="primary" size="small" label="버튼명" />   
      </section>

      <section>
        <base-button configuration="secondary" size="xlarge" label="버튼명" />
        <base-button configuration="secondary" size="large" label="버튼명" />
        <base-button configuration="secondary" size="medium" label="버튼명" />
        <base-button configuration="secondary" size="small" label="버튼명" />
      </section>

      <section>
        <base-button configuration="tertiary" size="xlarge" label="버튼명" />
        <base-button configuration="tertiary" size="large" label="버튼명" />
        <base-button configuration="tertiary" size="medium" label="버튼명" />
        <base-button configuration="tertiary" size="small" label="버튼명" />
      </section>

      <section>
        <base-button configuration="ghost" size="xlarge" label="버튼명" />
        <base-button configuration="ghost" size="large" label="버튼명" />
        <base-button configuration="ghost" size="medium" label="버튼명" />
        <base-button configuration="ghost" size="small" label="버튼명" />
      </section>
    </div>

    <div class="btn-item-wrap">
      <h2>링크 버튼</h2>
      <section>
        <base-button configuration="primary" size="xlarge" label="버튼명" href="javascritp:;" />
      </section>

      <section>
        <base-button configuration="secondary" size="xlarge" label="버튼명" href="javascritp:;" />
      </section>

      <section>
        <base-button configuration="tertiary" size="xlarge" label="버튼명" href="javascritp:;" />
      </section>

      <section>
        <base-button configuration="ghost" size="xlarge" label="버튼명" href="javascritp:;" />
      </section>
    </div>

    <div class="btn-item-wrap">
      <h2>아이콘 버튼</h2>
      <section>
        <base-button configuration="primary" size="xlarge" label="버튼명" class="btn--icoOnly">
          <i class="ico ico_file ico_h20 white"></i>
        </base-button>
        <base-button configuration="primary" size="large" label="버튼명" class="btn--icoOnly">
          <i class="ico ico_file ico_h20 white"></i>
        </base-button>
        <base-button configuration="primary" size="medium" label="버튼명" class="btn--icoOnly">
          <i class="ico ico_file ico_h20 white"></i>
        </base-button>
        <base-button configuration="primary" size="small" label="버튼명" class="btn--icoOnly">
          <i class="ico ico_file ico_h16 white"></i>
        </base-button>
      </section>

      <section>
        <base-button configuration="secondary" size="xlarge" label="버튼명" class="btn--icoOnly">
          <i class="ico ico_file ico_h20"></i>
        </base-button>
        <base-button configuration="secondary" size="large" label="버튼명" class="btn--icoOnly">
          <i class="ico ico_file ico_h20"></i>
        </base-button>
        <base-button configuration="secondary" size="medium" label="버튼명" class="btn--icoOnly">
          <i class="ico ico_file ico_h20"></i>
        </base-button>
        <base-button configuration="secondary" size="small" label="버튼명" class="btn--icoOnly">
          <i class="ico ico_file ico_h16"></i>
        </base-button>
      </section>

      <section>
        <base-button configuration="tertiary" size="xlarge" label="버튼명" class="btn--icoOnly">
          <i class="ico ico_file ico_h20 primary"></i>
        </base-button>
        <base-button configuration="tertiary" size="large" label="버튼명" class="btn--icoOnly">
          <i class="ico ico_file ico_h20 primary"></i>
        </base-button>
        <base-button configuration="tertiary" size="medium" label="버튼명" class="btn--icoOnly">
          <i class="ico ico_file ico_h20 primary"></i>
        </base-button>
        <base-button configuration="tertiary" size="small" label="버튼명" class="btn--icoOnly">
          <i class="ico ico_file ico_h16 primary"></i>
        </base-button>
      </section>

      <section>
        <base-button configuration="ghost" size="xlarge" label="버튼명" class="btn--icoOnly">
          <i class="ico ico_file ico_h20"></i>
        </base-button>
        <base-button configuration="ghost" size="large" label="버튼명" class="btn--icoOnly">
          <i class="ico ico_file ico_h20"></i>
        </base-button>
        <base-button configuration="ghost" size="medium" label="버튼명" class="btn--icoOnly">
          <i class="ico ico_file ico_h20"></i>
        </base-button>
        <base-button configuration="ghost" size="small" label="버튼명" class="btn--icoOnly">
          <i class="ico ico_file ico_h16"></i>
        </base-button>

        <base-icon label="파일" :size="h20" />

      </section>
    </div>
  </div>
</template>

<script>

import BaseButton from './stories/Button.vue';
import BaseIcon from './components/Icon.vue';

export default {
  name: 'idexHome',
  components: { 
    BaseButton,
    BaseIcon
  }
};

</script>

<style>
  .container{padding:24px;width:600px;margin:0 auto;}
  section button{margin-right:16px;margin-bottom:16px;}
</style>