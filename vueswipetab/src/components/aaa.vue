<template>
  <div class="wrapper" ref="wrapper">
    <share url="window.location.href+this.$route.path" inline-template>
  <div>
      <network network="facebook">
        <i class="fa fa-facebook"></i> Facebook
      </network>
      <network network="googleplus">
        <i class="fa fa-google-plus"></i> Google +
      </network>
      <network network="linkedin">
        <i class="fa fa-linkedin"></i> LinkedIn
      </network>
      <network network="pinterest">
        <i class="fa fa-pinterest"></i> Pinterest
      </network>
      <network network="reddit">
        <i class="fa fa-reddit"></i> Reddit
      </network>
      <network network="twitter">
        <i class="fa fa-twitter"></i> Twitter
      </network>
      <network network="vk">
        <i class="fa fa-vk"></i> VKontakte
      </network>
      <network network="weibo">
        <i class="fa fa-weibo"></i> Weibo
      </network> 
      <network network="whatsapp">
        <i class="fa fa-whatsapp"></i> Whatsapp
      </network>
  </div>
</share>
      <ul>
        <li v-for="item in 8">{{item}}</li>
      </ul>
  </div>
</template>
<script>
  import BScroll from 'better-scroll';
    export default {
      mounted() {
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.wrapper);
        });
      }
    };
</script>
<style type="text/css">
  .wrapper{
    overflow:hidden;
    height:100vh;
  }
  ul li{
    height:100px;
  }
</style>