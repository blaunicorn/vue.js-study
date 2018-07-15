<template>
<div id="myCollection">
    <div class="myCollectionContent">
        <ul class="collection-title" ref="collectionTitle">
            <li v-for="(item, index) in items" v-on:click="tab(index)" :class="{active: activeIndex === index}">
                <span v-text="item.title"></span>
            </li>
        </ul>
        <div class="collection-content clearfix type-center" ref="collContent">
            <div class="clearfix scrollDiv" style="width:400%" ref="scrollDiv">
                <div style="" class="video pruchase-item  relative" ref="all">
                    <ul>
                        <div class="top-tip">
                            <span class="refresh-hook" ref="refreshAllHook">下拉刷新</span>
                        </div>
                        <li class="clearfix relative border-bottom" @click.prevent.stop="allDetail(all)" v-for="all in allData">
                            <div class="left-img">
                                <img :src="all.picUrl" alt="" width="100%" height="100%">
                            </div>
                            <div class="right-content relative">
                                <p class="font-16 font-333 title" style="margin:0.1665rem 0 0 0;" v-text="all.name"></p>
                                <div v-show="all.type == 3" style="margin-top:0.2132rem">
                                    <span v-text="all.authorName" class="font-14 font-666"></span>
                                    <span v-text="all.authorDesc"></span>
                                </div>
                                <div v-show="all.type == 2" style="margin-top:0.2132rem">
                                    <span v-text="all.partTitle" class="font-14 font-666"></span>
                                </div>
                                <p class="font-13 font-B0" v-show="all.type == 1" v-text="all.authorName" style="margin-top:0.3198rem"></p>
                                <p v-show="all.type == 3" class="font-13 font-B0" v-cloak style="margin-top:0.2132rem">时长：{{all.listenLength}}/{{all.num}}节</p>
                                <p v-show="all.type == 2" class="font-13 font-B0" v-cloak style="margin-top:0.2132rem">更新至{{all.nunberSpeak}}</p>
                            </div>
                        </li>
                        <div class="bottom-tip" v-show="hasAllMore">
                            <span class="loading-hook" ref="loadingAllHook">查看更多</span>
                        </div>
                    </ul>
                    <div class="no-datas" v-show="!allData.length">
                        <img src="img/blank.png" alt="" style="width: 1.7867rem;">
                    </div>
                </div>
                <div style=" " class="article pruchase-item relative" ref="zhuanlan">
                    <ul>
                        <div class="top-tip">
                            <span class="refresh-hook" ref="refreshZlHook">下拉刷新</span>
                        </div>
                        <li class="clearfix relative  border-bottom" @click.prevent.stop="audioDetail(zhuanlan)" v-for="zhuanlan in zhuanlanData">
                            <div class="left-img">
                                <img :src="'https://zongyuan.yimi100.top:8080/'+zhuanlan.articlePictures[0].url" alt="" width="100%" height="100%">
                            </div>
                            <div class="right-content relative">
                                <p class="font-16 font-333 title" style="margin:0.1665rem 0 0 0;" v-text="zhuanlan.title"></p>

                                <div style="margin-top:0.2132rem">
                                    <span v-text="zhuanlan.partTitle" class="font-14 font-666"></span>
                                </div>
                                <p class="font-13 font-B0" v-cloak style="margin-top:0.2132rem">更新至{{zhuanlan.nunberSpeak}}</p>
                            </div>
                        </li>
                        <div class="bottom-tip" v-show="hasZlMore">
                            <span class="loading-hook" ref="loadingZlHook">查看更多</span>
                        </div>
                    </ul>
                    <div class="no-datas" v-show="!zhuanlanData.length">
                        <img src="img/blank.png" alt="" style="width: 1.7867rem;">
                    </div>
                </div>
                <div style="" class="jingpin pruchase-item relative" ref="jingpin">333
                    <ul>
                        <div class="top-tip">
                            <span class="refresh-hook" ref="refreshJpHook">下拉刷新</span>
                        </div>
                        <li class="clearfix relative  border-bottom" @click.prevent.stop="audioDetail(jingpin)" v-for="jingpin in jingpinData">
                            <div class="left-img">
                                <img :src="jingpin.picUrl" alt="" width="100%" height="100%">
                            </div>
                            <div class="right-content relative">
                                <p class="font-16 font-333 title" style="margin:0.1665rem 0 0 0;" v-text="jingpin.name"></p>
                                <div style="margin-top:0.2132rem">
                                    <span v-text="jingpin.authorName" class="font-14 font-666"></span>
                                    <span v-text="jingpin.authorDesc"></span>
                                </div>
                                <p class="font-13 font-B0" v-cloak style="margin-top:0.2132rem">时长：{{jingpin.listenLength}}/{{jingpin.num}}节</p>
                            </div>
                        </li>
                        <div class="bottom-tip" v-show="hasJpMore">
                            <span class="loading-hook" ref="loadingJpHook">查看更多</span>
                        </div>
                    </ul>
                    <div class="no-datas" v-show="!jingpinData.length">
                        <img src="img/blank.png" alt="" style="width: 1.7867rem;">
                    </div>
                </div>
                <!-- <div style="" class="jingpin pruchase-item relative" ref="back">444
                    <ul>
                        <div class="top-tip">
                            <span class="refresh-hook" ref="refreshJpHook">下拉刷新</span>
                        </div>
                        <li class="clearfix relative  border-bottom" @click.prevent.stop="audioDetail(jingpin)" v-for="jingpin in jingpinData">
                            <div class="left-img">
                                <img :src="jingpin.picUrl" alt="" width="100%" height="100%">
                            </div>
                            <div class="right-content relative">
                                <p class="font-16 font-333 title" style="margin:0.1665rem 0 0 0;" v-text="jingpin.name"></p>
                                <div style="margin-top:0.2132rem">
                                    <span v-text="jingpin.authorName" class="font-14 font-666"></span>
                                    <span v-text="jingpin.authorDesc"></span>
                                </div>
                                <p class="font-13 font-B0" v-cloak style="margin-top:0.2132rem">时长：{{jingpin.listenLength}}/{{jingpin.num}}节</p>
                            </div>
                        </li>
                        <div class="bottom-tip" v-show="hasJpMore">
                            <span class="loading-hook" ref="loadingJpHook">查看更多</span>
                        </div>
                    </ul>
                    <div class="no-datas" v-show="!jingpinData.length">
                        <img src="img/blank.png" alt="" style="width: 1.7867rem;">
                    </div>
                </div> -->
            </div>
        </div>
    </div>
    <!-- <div class="loading-container" v-show="!allData.length">
    </div> -->
</div>
</template>

<script>
// import { Tabs, Tab }  from 'vue-swipe-tab'
import BScroll from 'better-scroll'

export default {
  name: 'HelloWorld',
  // components: {
  //   Tabs,
  //   Tab
  // },
 data () {
    return {
      activeIndex: 0,
  items: [
      { title: '全部' },
      { title: '专栏订阅', },
      { title: '专栏订阅1', },
      { title: '精品课', }
  ],
  options: {
      
      click: true,
      pullDownRefresh: {
          threshold: 50,
          stop: 20,
      },
      pullUpLoad: {
          threshold: -20
      }
  },
  params: {},
  allData: [],
  zhuanlanData: [],
  zhuanlanTop: '',
  zhuanlanBottom: '',
  jingpinData: [],
  hasAllMore: false,
  hasZlMore: false,
  hasJpMore: false,
  curItem: {},
  pageAll: 1,
  pageZl: 1,
  pageJp: 1,
  pageIndex:0    
    }

},
created() {
//   this.params["param"] = parseQuery(window.location.href)
    // this.$nextTick(() => {
    //   this.getZlDatas(this.pageZl)
    // }, 20)
},
mounted() {
  this.getAllDatas(this.pageAll)
  this.getZlDatas(this.pageZl)
  this.getJpDatas(this.pageJp)
  var itemH = window.screen.height - this.$refs.collectionTitle.offsetHeight - 200 + "px"
  this.$refs.all.style.height = itemH
  this.$refs.jingpin.style.height = itemH
  this.$refs.zhuanlan.style.height = itemH

  this.sliderScroll = new BScroll(this.$refs.collContent, {
      scrollX: true,
      probeType: 3,
      snap: {
          loop: false,
          speed: 600
      },
      momentum: false,
  }
  )
  // console.log(8888)
  var that = this
  this.sliderScroll.on('scrollEnd', function (p) {
      let pageIndex = that.sliderScroll.getCurrentPage().pageX
      //改变导航栏的状态
      console.log(pageIndex)
      that.activeIndex = pageIndex;
      if (that.activeIndex === 3) {
        that.$router.push('/')
      }
  });
},
methods: {
  tab: function (index) {
      this.activeIndex = index;
      console.log('tab点击为：', this.activeIndex)
      if (this.activeIndex === 3) {
        this.$router.push('/')
      }
      //根据点击的index，使当前的i内容index展示在可视区
      this.sliderScroll.goToPage(this.activeIndex, 0, 400)
      
  },
  getAllDatas(pageAll) {
      this.$axios.get('https://zongyuan.yimi100.top:8080/', {
        params: {
          r: 'summary-article/get-article-list',
          sid: '12345qwe',
          cat1: 1
        }
      }).then((res) => {
          console.log("全部", res)
          if (res.status == "200") {
              this.allData = res.data
              this.hasAllMore = res.data.length < 10 ? false : true
              setTimeout(() => {
                  this.pullAll()
              }, 20);
          } else if (res.status == "400" && res.msg == "你的账号已经在其他设备登录,请你重新登录!") {
              window.location.href = "login://"
          }
      })
  },
  getAllDatasRefresh(pageAll) {
      // if (!this.hasAllMore) { return }
      getaxios(URL + "video/getPurchaseList", { "token": this.params.param["token"], "pageNo": pageAll, "pageSize": 6, "type": 1 }).then((res) => {
          if (res.status == "200") {
              this.allData = this.allData.concat(res.data)
              this.hasAllMore = res.data.length < 6 ? false : true
              setTimeout(() => {
                  this.Allscroll.finishPullUp()
                  this.Allscroll.refresh()
              }, 20);
          } else if (res.status == "400" && res.msg == "你的账号已经在其他设备登录,请你重新登录!") {
              window.location.href = "login://"
          } else if (res.status == "400" && res.msg == "没有数据") {
              this.hasAllMore = false
          }
      })
  },
  pullAll() {
      this.Allscroll = new BScroll(this.$refs.all, this.options
      )
      this.Allscroll.on('pullingDown', () => {
          this.pageAll = 1
          getaxios(URL + "video/getPurchaseList", { "token": this.params.param["token"], "pageNo": this.pageAll, "pageSize": 6, "type": 1 }).then((res) => {
              if (res.status == "200") {
                  this.allData = res.data
                  if (res.data.length < 7) {
                      this.hasAllMore = false
                  } else {
                      this.hasAllMore = true
                  }
                  setTimeout(() => {
                      this.Allscroll.finishPullDown()
                      this.Allscroll.refresh()
                  }, 20);
              } else if (res.status == "400" && res.msg == "你的账号已经在其他设备登录,请你重新登录!") {
                  window.location.href = "login://"
              } else if (res.status == "400" && res.msg == "没有数据") {
                  this.hasAllMore = false
              }
          })
      })
      this.Allscroll.on('pullingUp', () => {
          this.$refs.loadingAllHook.innerText = this.hasAllMore == true ? "加载中..." : "没有更多了"
          setTimeout(() => {
              if (this.hasAllMore == true) {
                  this.pageAll++
                  this.$refs.loadingAllHook.innerText = '加载更多'
                  this.getAllDatasRefresh(this.pageAll)
              }
              setTimeout(() => {
                  this.Allscroll.finishPullUp()
                  this.Allscroll.refresh()
              }, 20);
          }, 1000);
      })
  },
  getZlDatas(pageZl) {
      this.$axios.get('https://zongyuan.yimi100.top:8080/', {
        params: {
          r: 'summary-article/get-article-list',
          sid: '12345qwe',
          cat1: 1
        }
      }).then((res) => {
          console.log("专栏", res)
          if (res.status == "200") {
              this.zhuanlanData = res.data.article_list
              console.log("专栏data", this.zhuanlanData)
              this.zhuanlanTop =  this.zhuanlanData[0].order_num
              this.zhuanlanBottom =  this.zhuanlanData[(res.data.article_list.length - 1)].order_num
              this.hasZlMore = res.data.article_list.length <= 9 ? false : true
              console.log('hasZlMore值为：', this.hasZlMore,'.顶部序号为',this.zhuanlanTop,'。底部序号为',this.zhuanlanBottom)
              setTimeout(() => {
                  this.pullZl()
              }, 20);
          } else if (res.status == "400" && res.msg == "你的账号已经在其他设备登录,请你重新登录!") {
              window.location.href = "login://"
          } else if (res.status == "400" && res.msg == "没有数据") {
              this.hasZlMore = false
          }
      })
  },
  getZlRefresh(pageZl) {
      // if (!this.hasZlMore) { return }
        this.$axios.get('https://zongyuan.yimi100.top:8080/', {
          params: {
            r: 'summary-article/get-more-article-list',
            sid: '12345qwe',
            cat1: 1,
            top: this.zhuanlanTop,
            bottom: this.zhuanlanBottom
          }
        }).then(res => {
          console.log("专栏刷新的数据", res)            
          if (res.status == "200") {
              this.zhuanlanData = this.zhuanlanData.concat(res.data.old_list)
              this.hasZlMore = res.data.length < 10 ? false : true
              setTimeout(() => {
                  this.ZlScroll.finishPullUp()
                  this.ZlScroll.refresh()
              }, 20);
          } else if (res.status == "400" && res.msg == "你的账号已经在其他设备登录,请你重新登录!") {
              window.location.href = "login://"
          } else if (res.status == "400" && res.msg == "没有数据") {
              this.hasZlMore = false
          }
      })
  },
  pullZl() {
      console.log('pullZl开始')
      this.Zlscroll = new BScroll(this.$refs.zhuanlan, this.options
      )
      console.log('pullZl开始2', this.Zlscroll)
      this.Zlscroll.on('pullingDown', () => {
          this.pageZl = 1
            this.$axios.get('https://zongyuan.yimi100.top:8080/', {
                params: {
                r: 'summary-article/get-more-article-list',
                sid: '12345qwe',
                cat1: 1,
                top: this.zhuanlanTop,
                bottom: this.zhuanlanBottom
                }
            }).then(res => {
              console.log("专栏上拉加载的数据", res)   
              if (res.status == "200") {
                  this.zhuanlanData = res.data.new_list.concat(this.zhuanlanData)
                  if (res.data.new_list.length < 7) {
                      this.hasZlMore = false
                  } else {
                      this.hasZlMore = true
                  }
                  setTimeout(() => {
                      this.Zlscroll.finishPullDown()
                      this.Zlscroll.refresh()
                  }, 20);
              } else if (res.status == "400" && res.msg == "你的账号已经在其他设备登录,请你重新登录!") {
                  window.location.href = "login://"
              } else if (res.status == "400" && res.msg == "没有数据") {
                  this.hasZlMore = false
              }
          })
      })
            console.log('pullZl开始3')
      this.Zlscroll.on('pullingUp', () => {
          this.$refs.loadingZlHook.innerText = this.hasZlMore == true ? "加载中..." : "没有更多了"
          setTimeout(() => {
              if (this.hasZlMore == true) {
                  this.pageZl++
                  this.$refs.loadingZlHook.innerText = '加载更多'
                  this.getZlRefresh(this.pageZl)
              }
              setTimeout(() => {
                  this.Zlscroll.finishPullUp()
                  this.Zlscroll.refresh()
              }, 20);
          }, 1000);
      })
  },
  getJpDatas(pageJp) {
      this.$axios.get('https://zongyuan.yimi100.top:8080/', {
        params: {
          r: 'summary-article/get-article-list',
          sid: '12345qwe',
          cat1: 3
        }
      }).then((res) => {
          console.log("精品", res)
          if (res.status == "200") {
              this.jingpinData = res.data
              this.hasJpMore = res.data.length <= 10 ? false : true
              setTimeout(() => {
                  this.pullJp()
              }, 20);
          } else if (res.status == "400" && res.msg == "你的账号已经在其他设备登录,请你重新登录!") {
              window.location.href = "login://"
          } else if (res.status == "400" && res.msg == "没有数据") {
              this.hasZlMore = false
          }
      })
  },
  getJpRefresh(pageJp) {
      // if (!this.hasJpMore) { return }
      getaxios(URL + "video/getPurchaseList", { "token": this.params.param["token"], "pageNo": pageJp, "pageSize": 10, "type": 4 }).then((res) => {
          if (res.status == 200) {
              this.jingpinData = this.jingpinData.concat(res.data)
              this.hasJpMore = res.data.length < 10 ? false : true
              setTimeout(() => {
                  this.JpScroll.finishPullUp()
                  this.JpScroll.refresh()
              }, 20);
          } else if (res.status == "400" && res.msg == "你的账号已经在其他设备登录,请你重新登录!") {
              window.location.href = "login://"
          } else if (res.status == "400" && res.msg == "没有数据") {
              this.hasJpMore = false
          }
      })
  },
  pullJp() {
      this.Jpscroll = new BScroll(this.$refs.jingpin, this.options)
      this.Jpscroll.on('pullingDown', () => {
          this.pageJp = 1
          getaxios(URL + "video/getPurchaseList", { "token": this.params.param["token"], "pageNo": this.pageJp, "pageSize": 10, "type": 4 }).then((res) => {
              if (res.status == "200") {
                  this.jingpinData = res.data
                  if (res.data.length < 7) {
                      this.hasJpMore = false
                  } else {
                      this.hasJpMore = true
                  }
                  setTimeout(() => {
                      this.Jpscroll.finishPullDown()
                      this.Jpscroll.refresh()
                  }, 20);
              } else if (res.status == "400" && res.msg == "你的账号已经在其他设备登录,请你重新登录!") {
                  window.location.href = "login://"
              } else if (res.status == "400" && res.msg == "没有数据") {
                  this.hasZlMore = false
              }
          })
      })
      this.Jpscroll.on('pullingUp', () => {
          this.$refs.loadingJpHook.innerText = this.hasJpMore == true ? "加载中..." : "没有更多了"
          setTimeout(() => {
              if (this.hasJpMore == true) {
                  this.pageJp++
                  this.$refs.loadingJpHook.innerText = '加载更多'
                  this.getJpRefresh(this.pageJp)
              }
              setTimeout(() => {
                  this.JpScroll.finishPullUp()
                  this.JpScroll.refresh()
              }, 20);
          }, 1000);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
        width: 24.9%;
        height: 100%;
        float: left;
        overflow: hidden;   //设置隐藏看有什么效果
    }
    .collection-content .pruchase-item ul>li {
        padding: 0.2665rem 0;
        height: 80px;     // 没有引入rem 所以加了一条限定高度的样式 目的是使scroller: ul scrollHeight:920 超过 wrapper:div.article.pruchase-item.relative warpperHeight: 837
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
        top: -40px;  // 显示下拉刷新的字样 位置
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
</style>
