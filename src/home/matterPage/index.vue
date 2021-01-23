<template>
    <div class="matter">
        <div class="header">
            <div></div>
            <div class="nav">
                <ul>
                    <li :class="{'checked' : tabIndex==index}" v-for="(tab,index) in tabList" :key="index" @click="clickTab(tab,index)">{{tab.title}}</li>
                </ul>
            </div>
            <div class="list-icon"><Icon type="md-list-box" @click="expandMemu" /></div>
        </div>
        <div class="main" v-show="showServerType">
            <div class="server-type" :class="{'checked' : serverIndex==index}" v-for="(item,index) in serveTypeList" :key="'server'+index" @click="clickSever(item,index)">{{item.title}}</div>
        </div>
        <div v-show="!showServerType" class="certificates">
            <div class="card">
                <div class="title">
                    <span class="serverName">{{certificatesList.title}}</span>
                    <span>  -  所需材料</span>
                    <span class="back">
                        <Icon type="md-close" title="返回" @click="showServerType=true"/>
                    </span>
                </div>
                <div class="certificate" v-for="(item,index) in certificatesList.children" :key="'certificates'+index" >{{item}}</div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            tabList: [
                {
                    title: "公安1号",
                    value: "ga1",
                    children: [
                        {
                            title: "出生户口申报",
                            children: [
                                "1、身份证",
                                "2、户口簿",
                                "3、病历资料",
                                "4、本人近期二寸免冠彩照3张",
                            ]
                        },
                        {
                            title: "死亡户口注销",
                            children: [
                                "1、火化证",
                                "2、村开具死亡证明",
                                "3、身份证复印件、户口簿原件",
                            ]
                        },
                        {
                            title: "户口迁入迁出",
                            children: [
                                "1、本人申请",
                                "2、夫妻双方户口簿、身份证",
                                "3、村接收证",
                                "4、房产证",
                                "5、土地证",
                            ]
                        },
                    ],
                },
                {
                    title: "公安2号",
                    value: "ga2",
                    children: [
                        {
                            title: "身份证换证",
                            children: [
                                "提供原始身份证或户口簿、社保卡、驾驶证",
                            ]
                        },
                        {
                            title: "身份证新办",
                            children: [
                                "监护人户口簿",
                            ]
                        },
                    ],
                },
                {
                    title: "公共法律服务",
                    value: "ggfl",
                    children: [
                        {
                            title: "法律咨询",
                            children: [
                                "无",
                            ]
                        },
                        {
                            title: "法律援助",
                            children: [
                                "无",
                            ]
                        },
                    ],
                },
                {
                    title: "综合受理1",
                    value: "zhsl1",
                    children: [
                        {
                            title: "城乡居民参保缴费",
                            children: [
                                "1、身份证",
                                "2、户口簿",
                                "3、社保卡",
                            ]
                        },
                        {
                            title: "城乡居民基本养老保险信息变更",
                            children: [
                                "1、身份证",
                                "2、社保卡",
                            ]
                        },
                        {
                            title: "城乡居民基本养老保险缴费证、领取证申领",
                            children: [
                                "身份证",
                            ]
                        },
                        {
                            title: "城乡居民基本养老保险丧葬补助费办理",
                            children: [
                                "1、死者身份证、代办人身份证",
                                "2、死者领取保险金的农商行卡或代办人农商行卡",
                            ]
                        },
                        {
                            title: "退休人员社会化管理",
                            children: [
                                "1、身份证",
                                "2、退休证  ",
                            ]
                        },
                        {
                            title: "城乡居民养老保险个人账户注销",
                            children: [
                                "1、退休人员身份证",
                                "2、农商行卡",
                            ]
                        },
                    ],
                },
                {
                    title: "综合受理2",
                    value: "zhsl2",
                    children: [
                        {
                            title: "医药费报销",
                            children: [
                                "1、医院发票、清单、出院记录（3项均为原件）",
                                "2、病人身份证、银行卡（农行、工行、县内农商行、社保卡）复印件",
                            ]
                        },
                        {
                            title: "新生儿参保",
                            children: [
                                "户口簿",
                            ]
                        },
                        {
                            title: "中断城乡居民医保",
                            children: [
                                "本人带身份证",
                            ]
                        },
                        {
                            title: "医保信息变更",
                            children: [
                                "1、身份证",
                                "2、村委会证明",
                                "3、变更信息表",
                                "4、身份证照片",
                            ]
                        },
                    ],
                },
                {
                    title: "综合受理3",
                    value: "zhsl3",
                    children: [
                        {
                            title: "城乡居民最低生活保障",
                            children: [
                                "1、村居填写申请表",
                                "2、社会事业局审核",
                                "3、行政审批局审批",
                            ]
                        },
                        {
                            title: "尊老金申请",
                            children: [
                                "1、户口簿、身份证原件和复印件2份",
                                "2、2寸近期免冠照片2张",
                                "3、农商银行卡原件和复印件2份",
                            ]
                        },
                        {
                            title: "特困人员供养证",
                            children: [
                                "1、本人有效身份证明 ",
                                "2、书面声明 ",
                                "3、承诺书 ",
                                "4、残疾证 ",
                            ]
                        },
                        {
                            title: "办理五保供养证",
                            children: [
                                "1、提供户口簿、身份证向村居申请",
                                "2、社会事业局审核",
                                "3、行政审批局审批",
                            ]
                        },
                    ],
                },
                {
                    title: "综合受理4",
                    value: "zhsl4",
                    children: [
                        {
                            title: "残疾证办理",
                            children: [
                                "1、身份证",
                                "2、户口簿",
                                "3、病历资料",
                                "4、本人近期二寸免冠彩照3张",
                            ]
                        },
                        {
                            title: "精神病服药申请",
                            children: [
                                "1、身份证",
                                "2、残疾证",
                                "3、低保证或困难证明",
                            ]
                        },
                    ],
                },
                {
                    title: "综合受理5",
                    value: "zhsl5",
                    children: [
                        {
                            title: "老年人优待证",
                            children: [
                                "老人身份证",
                            ]
                        },
                        {
                            title: "独生子女父母光荣证",
                            children: [
                                "1、身份证或户口簿",
                                "2、结婚证复印件",
                                "3、1寸照片2张",
                                "4、申请表",
                            ]
                        },
                        {
                            title: "流动人口婚育证明",
                            children: [
                                "1、身份证或户口簿",
                                "2、结婚证复印件",
                                "3、1寸照片2张",
                                "4、申请表",
                            ]
                        },
                        {
                            title: "生育服务证",
                            children: [
                                "女方身份证",
                            ]
                        },
                    ],
                },
                {
                    title: "市场监管",
                    value: "scjg",
                    children: [
                        {
                            title: "个体户营业执照",
                            children: [
                                "1、身份证",
                                "2、经营场所证明",
                            ]
                        },
                    ],
                },
                {
                    title: "自然资源与规划",
                    value: "zrzrygh",
                    children: [
                        {
                            title: "个人宅基地信息查询",
                            children: [
                                "1、本人身份证",
                                "2、户口簿",
                            ]
                        },
                    ],
                },
                {
                    title: "代办",
                    value: "db",
                    children: [
                        {
                            title: "公司注册",
                            children: [
                                "1、提供3个以上公司名称",
                                "2、提供公司注册资本、经营范围、经营场所信息",
                                "3、提供股东身份证原件照片、手机号、出资比例",
                                "4、明确公司法人、财务、监事",
                                "5、下载江苏市场监管APP完成电子签名",
                                "6、提供经营场所房产证或使用证明",
                            ]
                        },
                        {
                            title: "银行开户",
                            children: [
                                "1、确定开户行",
                                "2、提供营业执照正副本原件及复印件；法人、财务负责人身份证原件及复印件；一套章；营业场所照片",
                                "3、法人及财务负责人需到现场办理 4、具体根据选定银行会稍有不同",
                            ]
                        },
                        {
                            title: "控税办理",
                            children: [
                                "1、提供营业执照原件及复印件、公章、财务章、法人身份证原件及复印件、公司账号信息",
                                "2、法人和财务负责人到场采集信息",
                            ]
                        },
                    ],
                },
                {
                    title: "税务",
                    value: "sw",
                    children: [
                        {
                            title: "增值税普票",
                            children: [
                                "1、身份证",
                                "2、银行卡",
                                "3、填写代开发票申请单",
                            ]
                        },
                        {
                            title: "自助机代开",
                            children: [
                                "身份证原件",
                            ]
                        },
                    ],
                },
            ],
            tabIndex: 0,
            serveTypeList: [
                {
                            title: "出生户口申报",
                            children: [
                                "1、身份证",
                                "2、户口簿",
                                "3、病历资料",
                                "4、本人近期二寸免冠彩照3张",
                            ]
                        },
                        {
                            title: "死亡户口注销",
                            children: [
                                "1、火化证",
                                "2、村开具死亡证明",
                                "3、身份证复印件、户口簿原件",
                            ]
                        },
                        {
                            title: "户口迁入迁出",
                            children: [
                                "1、本人申请",
                                "2、夫妻双方户口簿、身份证",
                                "3、村接收证",
                                "4、房产证",
                                "5、土地证",
                            ]
                        },
            ],
            showServerType: true,
            serverIndex: -1,
            certificatesList: [],
        };
    },
    created() {},
    mounted() {},
    methods: {
        clickTab(data,index) {
            this.tabIndex = index
            this.expandMemu();
            this.serveTypeList = data.children;
            this.showServerType = true;
        },
        clickSever(data,index) {
            this.serverIndex = index
            this.certificatesList = data;
            this.showServerType = false;
        },
        expandMemu() {
            let memuList = document.querySelector(".nav ul");
            if(memuList.classList.contains("expand")) {
                memuList.classList.remove("expand")
            } else {
                memuList.classList.add("expand")
            }
        },
    }
};
</script>

<style scoped lang="scss">
.matter{
    width: 100%;
    height: 100%;
    .header {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-between;
        padding: 0 5vw;
        position: fixed;
        box-shadow: 0 0 10px #ccc;
        background: #fff;
        top: 0;
        .nav {
            display: block;
            align-self: center;
            ul {
                display: flex;
                li {
                    padding: 5px 10px;
                    
                    text-align: center;
                    border-radius: 5px;
                    font-size: 14px;
                    list-style: none;
                    cursor: pointer;
                }
                li.checked {
                    color: #008cff;
                }
                li:hover {
                    color: #008cff;
                }
            }
        }
        .list-icon {
            align-self: center;
            i {
                font-size: 30px;
                display: none;
            }
        }
    }
    .main {
        position: absolute;
        top: 80px;
        width: 100%;
        height: calc(100vh - 80px);
        overflow-y: auto;
        padding: 0 5vw;
        display: flex;
        justify-content: flex-start;
        align-content: flex-start;
        flex-wrap: wrap;
        .server-type {
            width: calc((100% - 150px) / 3);
            height: 100px;
            padding: 0 15px;
            border: 1px solid #cccccc80;
            box-shadow: 3px 3px 2px #cccccc70;
            border-radius: 10px;
            margin-top: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: 0.5s;
            background: #fff;
        }
        .server-type:hover {
            transform: scale(1.1);
            background: #008cffa1;
            border: 1px solid #008cff70;
            box-shadow: 3px 3px 2px #008cff;
            color: #fff;
        }
        .server-type.chenked {
            transform: scale(1.1);
            background: #008cffa1;
            border: 1px solid #008cff70;
            box-shadow: 3px 3px 2px #008cff;
            color: #fff;
        }
        .server-type:not(:nth-child(3n)) {
            margin-right: 50px;
        }

    }
    .certificates {
        position: absolute;
        top: 80px;
        width: 100%;
        height: 200px;
        text-align: center;
        padding: 5vw 10vw;
        .card {
            width: 100%;
            padding: 0 0 20px 0;
            border: 1px solid #cccccc80;
            border-radius: 10px;
            background: #fff;
            .title {
                width: 100%;
                padding: 10px 0 10px 25px;
                text-align: left;
                padding-left: 10px;
                border-bottom: 1px solid #cccccc80;
                .serverName {
                    font-weight: 900;
                    font-size: 16px;
                    color: #2d8cf0;
                }
                .back {
                    float: right;
                    margin-right: 15px;
                    cursor: pointer;
                    i {
                        font-size: 22px;
                    }
                }
            }
            .certificate {
                width: 100%;
                padding: 15px 0 15px 0;
            }
            // background: red;
        }
    }
        @media screen and (max-width: 600px) {
            .header {
                height: 50px;
                z-index: 100;
                .nav {
                    // display: none;
                    position: absolute;
                    top: 50px;
                    left: 0;
                    z-index: 10;
                    // right: calc(5vw + 25px);
                    width: 100%;
                    overflow-y: auto;
                    align-self: center;
                    background: #fff;
                    border-bottom: 1px solid #cccccc70;
                    ul {
                        width: 100%;
                        height: 0;
                        flex-wrap: wrap;
                        transition: height 0.5s;
                        li {
                            width: 100%;
                            height: 35px;
                            align-self: center;
                            border-radius: 0;
                        }
                        
                        li:hover {
                            background: #cccccc90;
                            color: #515a6e;
                        }
                    }
                    ul.expand {
                        height: 210px;
                    }
                }
                .list-icon {
                    i {
                        display: block;
                        cursor: pointer;
                    }
                }
            }
            .main {
                top: 50px;
                .server-type {
                    width: 100%;
                    // height: 100px;
                    // padding: 0 15px;
                    // border: 1px solid #cccccc80;
                    // box-shadow: 3px 3px 2px #cccccc70;
                    // border-radius: 10px;
                    margin-top: 15px;
                    // display: flex;
                    // align-items: center;
                    // justify-content: center;
                    // cursor: pointer;
                    // transition: 0.5s;
                }
                .server-type:hover {
                    // transform: scale(1.1);
                    // background: #008cffa1;
                    // border: 1px solid #008cff70;
                    // box-shadow: 3px 3px 2px #008cff;
                    // color: #fff;
                }
                .server-type:not(:nth-child(3n)) {
                    margin-right: 0;
                }

            }
            
        }
}
</style>
