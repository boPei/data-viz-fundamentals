(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-322be861"],{3377:function(e,t,i){"use strict";var a=i("36bb"),n=i.n(a);n.a},"36bb":function(e,t,i){var a=i("a9f3");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("499e").default;n("e6c6459c",a,!0,{sourceMap:!1,shadowMode:!1})},"439d":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"home"},[i("div",{staticClass:"title"},[e._m(0),i("div",{staticStyle:{"margin-top":"10%","font-size":"25px","font-weight":"500"}},[e._v("\n          Data and information visualization is \n          a scientific and technological research \n          on the visual representation of data. Among them, the visual \n          representation of \n          this data is defined as a type of information extracted \n          in a summary form, including various \n          attributes and variables of \n          corresponding information units.\n        ")]),i("br"),i("div",{attrs:{id:"mychart"}}),i("el-button",{staticStyle:{width:"200px",height:"70px","margin-bottom":"50px","font-size":"x-large"},attrs:{round:""},on:{click:function(t){return e.click()}}},[i("b",[e._v("Start")])])],1)])},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{"font-size":"50px","margin-top":"10%","font-weight":"600"}},[e._v("\n            EME 6346\n            Data Visualization "),i("br"),e._v("\n            in Education")])}],o=i("7212"),r=i("313e"),s={name:"HelloWorld",components:{swiper:o["swiper"],swiperSlide:o["swiperSlide"],echarts:r},data:function(){return{loading:!0,caseList:[],newsList:[],swiperOption:{notNextTick:!0,direction:"vertical",grabCursor:!0,setWrapperSize:!0,autoHeight:!0,slidesPerView:1,mousewheel:!0,mousewheelControl:!0,height:window.innerHeight-60,resistanceRatio:0,observeParents:!0,on:{}}}},methods:{click:function(){this.$router.push("/Syllabus")},initEcharts:function(){var e={tooltip:{},legend:{data:["销量"]},xAxis:{data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},yAxis:{},series:[{name:"销量",type:"bar",data:[5,20,36,10,10,20]}]},t=r["init"](document.getElementById("mychart"));t.setOption(e),window.addEventListener("resize",function(){t.resize()})}},created:function(){},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},mounted:function(){var e=this;this.initEcharts(),this.$http.all([this.$http.get("Cases/GetCasesAll"),this.$http.get("News?type=1&num=3")]).then(this.$http.spread(function(t,i){e.caseList=t.data,e.newsList=i.data,e.loading=!1}))}},d=s,c=(i("3377"),i("2877")),l=Object(c["a"])(d,a,n,!1,null,"2e3038a6",null);t["default"]=l.exports},"94ab":function(e,t,i){e.exports=i.p+"img/home_do.b459a2fc.jpg"},a9f3:function(e,t,i){var a=i("b041");t=e.exports=i("2350")(!1),t.push([e.i,".swiper-slide[data-v-2e3038a6]{font-size:24px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center}.swiper-slide .slogan[data-v-2e3038a6]{text-align:center;font-size:50px;color:#fff;padding:30px 0}#mychart[data-v-2e3038a6]{margin-top:5%;float:left;width:100%;height:400px}.title[data-v-2e3038a6]{float:left;margin-left:5%;margin-top:3%;font-size:xx-large}.title p[data-v-2e3038a6]{font-size:40px;font-weight:400;color:#020007}.case-item[data-v-2e3038a6]{width:1100px;height:500px;overflow:hidden;margin:0 auto;margin-top:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.case-item li[data-v-2e3038a6]{width:330px;height:250px;list-style:none;background-repeat:no-repeat;background-size:cover;background-position:50%;background-origin:content-box;margin:5px;position:relative;overflow:hidden}.case-item li:hover .case-item-hover[data-v-2e3038a6]{opacity:1;-webkit-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.case-item-hover[data-v-2e3038a6]{width:100%;height:100%;position:absolute;top:0;left:0;opacity:0;overflow:hidden;background-color:rgba(225,56,52,.7)}.case-item-hover .hover-title[data-v-2e3038a6]{height:50px;color:#fff;font-size:18px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:400;margin-top:20px}.case-item-hover .bottom[data-v-2e3038a6]{border-bottom:1px solid #fff;width:60px;margin:0 auto}.case-item-hover .more[data-v-2e3038a6]{width:90px;padding:5px 5px;margin:0 auto;margin-top:100px;border:2px solid #fff}.case-item-hover .more span[data-v-2e3038a6]{color:#fff;font-size:20px}.slide-one[data-v-2e3038a6]{background-size:cover}.slide-two[data-v-2e3038a6]{background:url("+a(i("94ab"))+") no-repeat 50%;background-size:cover}.slide-three[data-v-2e3038a6]{background:url("+a(i("bb35"))+") no-repeat 50%;background-size:cover}.news-content[data-v-2e3038a6]{width:1240px;margin:0 auto;margin-top:40px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.news-content[data-v-2e3038a6],.news-content-item[data-v-2e3038a6]{display:-webkit-box;display:-ms-flexbox;display:flex}.news-content-item[data-v-2e3038a6]{width:400px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.news-content-item .item-img[data-v-2e3038a6]{width:360px;height:230px;background-repeat:no-repeat;background-size:cover;background-position:50%;background-origin:content-box;margin:0 auto}.news-content-item .el-divider[data-v-2e3038a6]{background-color:#fff;height:3px}.news-content-item .el-divider .el-divider__text[data-v-2e3038a6]{width:20px;height:20px;border-radius:50%;padding:0;color:#fff}.news-content-item .item-content[data-v-2e3038a6]{width:360px;height:230px;margin:0 auto}.news-content-item .item-content h3[data-v-2e3038a6]{font-size:22px;height:30px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.news-content-item .item-content p[data-v-2e3038a6]{font-size:15px;height:80px;overflow:hidden;margin:10px 0;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;white-space:normal!important;word-wrap:break-word}.news-content-item .item-content span[data-v-2e3038a6]{display:block;font-size:14px;text-align:end}.news-content-item .item-content h3[data-v-2e3038a6],.news-content-item .item-content p[data-v-2e3038a6],.news-content-item .item-content span[data-v-2e3038a6]{color:#fff}.order[data-v-2e3038a6]{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.order-img[data-v-2e3038a6]{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}",""])},bb35:function(e,t,i){e.exports=i.p+"img/home_anli.51034bb3.jpg"}}]);
//# sourceMappingURL=chunk-322be861.0293a711.js.map