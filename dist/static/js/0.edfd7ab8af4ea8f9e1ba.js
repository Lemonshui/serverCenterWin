webpackJsonp([0],{"0uIk":function(e,t){},OTqc:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={data:function(){return{tabList:[{title:"公安1号",value:"ga1",children:[{title:"出生户口申报",children:["1、身份证","2、户口簿","3、病历资料","4、本人近期二寸免冠彩照3张"]},{title:"死亡户口注销",children:["1、火化证","2、村开具死亡证明","3、身份证复印件、户口簿原件"]},{title:"户口迁入迁出",children:["1、本人申请","2、夫妻双方户口簿、身份证","3、村接收证","4、房产证","5、土地证"]}]},{title:"公安2号",value:"ga2",children:[{title:"身份证换证",children:["提供原始身份证或户口簿、社保卡、驾驶证"]},{title:"身份证新办",children:["监护人户口簿"]}]},{title:"公共法律服务",value:"ggfl",children:[{title:"法律咨询",children:["无"]},{title:"法律援助",children:["无"]}]},{title:"综合受理1",value:"zhsl1",children:[{title:"城乡居民参保缴费",children:["1、身份证","2、户口簿","3、社保卡"]},{title:"城乡居民基本养老保险信息变更",children:["1、身份证","2、社保卡"]},{title:"城乡居民基本养老保险缴费证、领取证申领",children:["身份证"]},{title:"城乡居民基本养老保险丧葬补助费办理",children:["1、死者身份证、代办人身份证","2、死者领取保险金的农商行卡或代办人农商行卡"]},{title:"退休人员社会化管理",children:["1、身份证","2、退休证  "]},{title:"城乡居民养老保险个人账户注销",children:["1、退休人员身份证","2、农商行卡"]}]},{title:"综合受理2",value:"zhsl2",children:[{title:"医药费报销",children:["1、医院发票、清单、出院记录（3项均为原件）","2、病人身份证、银行卡（农行、工行、县内农商行、社保卡）复印件"]},{title:"新生儿参保",children:["户口簿"]},{title:"中断城乡居民医保",children:["本人带身份证"]},{title:"医保信息变更",children:["1、身份证","2、村委会证明","3、变更信息表","4、身份证照片"]}]},{title:"综合受理3",value:"zhsl3",children:[{title:"城乡居民最低生活保障",children:["1、村居填写申请表","2、社会事业局审核","3、行政审批局审批"]},{title:"尊老金申请",children:["1、户口簿、身份证原件和复印件2份","2、2寸近期免冠照片2张","3、农商银行卡原件和复印件2份"]},{title:"特困人员供养证",children:["1、本人有效身份证明 ","2、书面声明 ","3、承诺书 ","4、残疾证 "]},{title:"办理五保供养证",children:["1、提供户口簿、身份证向村居申请","2、社会事业局审核","3、行政审批局审批"]}]},{title:"综合受理4",value:"zhsl4",children:[{title:"残疾证办理",children:["1、身份证","2、户口簿","3、病历资料","4、本人近期二寸免冠彩照3张"]},{title:"精神病服药申请",children:["1、身份证","2、残疾证","3、低保证或困难证明"]}]},{title:"综合受理5",value:"zhsl5",children:[{title:"老年人优待证",children:["老人身份证"]},{title:"独生子女父母光荣证",children:["1、身份证或户口簿","2、结婚证复印件","3、1寸照片2张","4、申请表"]},{title:"流动人口婚育证明",children:["1、身份证或户口簿","2、结婚证复印件","3、1寸照片2张","4、申请表"]},{title:"生育服务证",children:["女方身份证"]}]},{title:"市场监管",value:"scjg",children:[{title:"个体户营业执照",children:["1、身份证","2、经营场所证明"]}]},{title:"自然资源与规划",value:"zrzrygh",children:[{title:"个人宅基地信息查询",children:["1、本人身份证","2、户口簿"]}]},{title:"代办",value:"db",children:[{title:"公司注册",children:["1、提供3个以上公司名称","2、提供公司注册资本、经营范围、经营场所信息","3、提供股东身份证原件照片、手机号、出资比例","4、明确公司法人、财务、监事","5、下载江苏市场监管APP完成电子签名","6、提供经营场所房产证或使用证明"]},{title:"银行开户",children:["1、确定开户行","2、提供营业执照正副本原件及复印件；法人、财务负责人身份证原件及复印件；一套章；营业场所照片","3、法人及财务负责人需到现场办理 4、具体根据选定银行会稍有不同"]},{title:"控税办理",children:["1、提供营业执照原件及复印件、公章、财务章、法人身份证原件及复印件、公司账号信息","2、法人和财务负责人到场采集信息"]}]},{title:"税务",value:"sw",children:[{title:"增值税普票",children:["1、身份证","2、银行卡","3、填写代开发票申请单"]},{title:"自助机代开",children:["身份证原件"]}]}],searchName:"",tabIndex:0,serveTypeList:[{title:"出生户口申报",children:["1、身份证","2、户口簿","3、病历资料","4、本人近期二寸免冠彩照3张"]},{title:"死亡户口注销",children:["1、火化证","2、村开具死亡证明","3、身份证复印件、户口簿原件"]},{title:"户口迁入迁出",children:["1、本人申请","2、夫妻双方户口簿、身份证","3、村接收证","4、房产证","5、土地证"]}],showServerType:!0,serverIndex:-1,certificatesList:[]}},created:function(){},mounted:function(){},watch:{},methods:{clickTab:function(e,t){this.tabIndex=t,this.searchName="",this.expandMemu(),this.serveTypeList=e.children,this.showServerType=!0},clickSever:function(e,t){this.serverIndex=t,this.certificatesList=e,this.showServerType=!1},expandMemu:function(){var e=document.querySelector(".nav ul");e.classList.contains("expand")?e.classList.remove("expand"):e.classList.add("expand")},focusEvent:function(){var e=document.querySelector(".nav ul");e.classList.contains("expand")&&e.classList.remove("expand")},searchChange:function(){var e=this;e.tabIndex=-1,e.serveTypeList=[],""==e.searchName?(this.tabIndex=0,this.serveTypeList=[{title:"出生户口申报",children:["1、身份证","2、户口簿","3、病历资料","4、本人近期二寸免冠彩照3张"]},{title:"死亡户口注销",children:["1、火化证","2、村开具死亡证明","3、身份证复印件、户口簿原件"]},{title:"户口迁入迁出",children:["1、本人申请","2、夫妻双方户口簿、身份证","3、村接收证","4、房产证","5、土地证"]}]):this.tabList.forEach(function(t){t.children.forEach(function(t){t.title.indexOf(e.searchName)>-1&&e.serveTypeList.push(t)})}),console.log(e.serveTypeList)}}},n={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"matter"},[i("div",{staticClass:"header"},[i("div",{staticClass:"nav"},[i("ul",e._l(e.tabList,function(t,l){return i("li",{key:l,class:{checked:e.tabIndex==l},on:{click:function(i){return e.clickTab(t,l)}}},[e._v(e._s(t.title))])}),0)]),e._v(" "),i("div",{staticStyle:{display:"flex","align-items":"center"}},[i("Input",{staticStyle:{width:"300px"},attrs:{search:"","enter-button":"",placeholder:"服务搜索"},on:{"on-focus":e.focusEvent,"on-change":e.searchChange,"on-search":e.searchChange},model:{value:e.searchName,callback:function(t){e.searchName=t},expression:"searchName"}})],1),e._v(" "),i("div",{staticClass:"list-icon"},[i("Icon",{attrs:{type:"md-list-box"},on:{click:e.expandMemu}})],1)]),e._v(" "),i("transition",{attrs:{"enter-active-class":"animate__animated animate__bounceInUp","leave-active-class":"animate__animated animate__fadeOutDown",duration:{enter:400,leave:400}}},[e.showServerType?i("div",{staticClass:"main"},e._l(e.serveTypeList,function(t,l){return i("div",{key:"server"+l,staticClass:"server-type",class:{checked:e.serverIndex==l},on:{click:function(i){return e.clickSever(t,l)}}},[e._v(e._s(t.title))])}),0):e._e()]),e._v(" "),i("transition",{attrs:{"enter-active-class":"animate__animated animate__fadeInRightBig","leave-active-class":"animate__animated animate__fadeOutRightBig",duration:{enter:400,leave:400}}},[e.showServerType?e._e():i("div",{staticClass:"certificates"},[i("div",{staticClass:"card"},[i("div",{staticClass:"title"},[i("span",{staticClass:"serverName"},[e._v(e._s(e.certificatesList.title))]),e._v(" "),i("span",[e._v("  -  所需材料")]),e._v(" "),i("span",{staticClass:"back"},[i("Icon",{attrs:{type:"md-close",title:"返回"},on:{click:function(t){e.showServerType=!0}}})],1)]),e._v(" "),e._l(e.certificatesList.children,function(t,l){return i("div",{key:"certificates"+l,staticClass:"certificate"},[e._v(e._s(t))])})],2)])])],1)},staticRenderFns:[]};var c=i("VU/8")(l,n,!1,function(e){i("0uIk")},"data-v-c7dded6c",null);t.default=c.exports}});
//# sourceMappingURL=0.edfd7ab8af4ea8f9e1ba.js.map