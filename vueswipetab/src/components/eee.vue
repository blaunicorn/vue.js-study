<template>  
  <div class="wrapper" ref="wrapper">  
    <div>  
  
     <ul class="content">  
        <li v-for="item in data">{{item}}</li>  
      </ul>  
  
      <div class="bottom-tip">  
      <span class="loading-hook">查看更多</span>  
     </div>   
  
    </div>  
  </div>  
</template>  
<script>  
  import BScroll from 'better-scroll'  
  export default {  
    data() {  
      return {  
        data: []  
      }  
    },  
    created() {  
      this.loadData()  
    },  
    methods: {  
      loadData() {  
        var self = this;  
       requestData().then((res) => {  
          this.data = res.data.concat(this.data)  
          this.$nextTick(() => {  
            if (!this.scroll) {  
              this.scroll = new Bscroll(this.$refs.wrapper, {      
                pullUpLoad:{  
           threshold: -30, // 负值是当上拉到超过低部 30px；正值是距离底部距离时，  
          }  
              })  
              this.scroll.on('touchend', (pos) => {  
                // 下拉动作  
                if (pos.y > 50) {  
                  self.loadData()  
                }  
              })  
              this.scroll.on('pullingUp', (pos) => {  
          document.querySelector('.loading-hook').innerText = '加载中...';  
          setTimeout(function () {  
           // 恢复文本值  
           document.querySelector('.loading-hook').innerText = '查看更多';  
           // 向列表添加数据  
           self.loadData();  
          }, 1000);  
         })   
            } else {  
                this.scroll.finishPullUp()   
                this.scroll.refresh()  
            }  
          })  
        })  
      }  
    }  
  }  
</script> 
<style lang="scss">
  .collection-title {
        display: flex;
        padding: 0.3731rem 4%;
        width: 92%;
    }

    .collection-title>li {
        /* flex: 1; */
        text-align: center;
        padding: 6px;
        border-radius: 4px;
        font-size: 14px;
        color: #666666;
    }

    .collection-title>li:nth-child(1) {
        flex: 1;
    }

    .collection-title>li:nth-child(2) {
        flex: 2;
    }


    .collection-title>li:nth-child(3) {
        flex: 1.5;
    }

    .collection-title>li.active span {
        color: #01A3E2;
        padding-bottom: 4px;
        border-bottom: 1.5px solid #01A3E2
    }

    .collection-title>li:first-child.active span {
        color: #fff;
    }

    .collection-title>li:first-child.active {
        background: #01A3E2
    }

    .collection-content {
        overflow: hidden;
        position: relative
    }

    .collection-content .scrollDiv .pruchase-item {
        width: 25%;
        height: 100%;
        float: left;
    }

    .collection-content .pruchase-item ul>li {
        padding: 0.2665rem 0
    }

    .collection-content .pruchase-item ul>li .left-img {
        width: 24.64%;
        margin-right: 3.48%;
        display: inline-block;
        float: left;
        height: 2.9333rem;
        background: #eeeeee;
        border-radius: 4px;
    }

    .collection-content .pruchase-item ul>li .left-img img {
        border-radius: 4px;
    }

    .collection-content .pruchase-item ul>li .right-content {
        width: 71.87%;
        display: inline-block;
        float: left;
    }

    .collection-content .pruchase-item ul>li .right-content p.title {
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-align: left; // 左对齐
    }

    .collection-content .scrollDiv .pruchase-item .line-bottom {
        width: 89.18%;
        height: 1px;
        background: #e5e5e5;
        bottom: 0;
        margin-left: 6.82%
    }

    .scrollDiv,
    .macShare {
        transition: all 0.5s;
        -moz-transition: all 0.5s;
        -webkit-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition-duration:500ms
    }

    .macShare {
        z-index: 1001
    }

    .macdiv {
        height: 100%;
        background-color: black;
        opacity: 0.4;
        display: none;
        position: fixed;
        width: 100%;
        z-index: 1000;
    }

    #myCollection {
        height: 100%
    }

    .top-tip {
        position: absolute;
        top: -40px;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #555;
    }

    .bottom-tip {
        width: 100%;
        height: 35px;
        line-height: 35px;
        text-align: center;
        color: #777;
    }
.wrapper{
  width: 100%;
  position:absolute;
  top: 45px;
  bottom: 50px;
  overflow: hidden;
  z-index: 1;
}
.content{
  height:100%;
}
</style>