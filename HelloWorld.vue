<template>
  <div class="hello">
    <div class="fathen">
      <pre class="scroll">
        {{text}}
      </pre>
    </div>
    <b-scrll class="contentt" ref="scroll">
      <!-- <div class="box">

      </div> -->
    </b-scrll>
    

    <div v-html="compcode">
      
    </div>

    <div v-html="compcode2">

    </div>

  </div>
</template>

<script>
import {gethello,getres} from '../instrument/axios'
import BScrll from '../scroll/BScrll'

export default {
  name: 'HelloWorld',
  components: {
    BScrll
  },
  data() {
    return {
      text: '',
      code: `
  /* 大家好临近毕业季大家是不是要开始写简历了呢 */
  /* 接下来我们用代码来写一个简历把 */
  /* 先把界面变成黑色，因为程序猿都是神秘又深沉的存在哦 */
    body {
      background: rgb(0,43,54);
      color: rgb(222,222,222);
      perspective: 1058px;
    }
  /* 我们先加个滚轮把 然后把位置调整一下 */
    .scroll {
      overflow: scroll;
      width: 440px;
      height: 470px;
      border: 1px solid pink;
      margin-left: 140px;
      margin-top: 100px;
    }
    /* 再加个3d反转把 这样看起来更棒 */
    .fathen {
      transform:rotateY(30deg);
    }
      `,
    codefake: '',
    jianli: `
    .h2 {
      line-height: 40px;
      padding-buttom: 5px;
      font-weight: 700;
      border-bottom: 1px solid black;
      font-size: 20px;
    }
    .contentt {
      background-color: #fff;
      padding: 20px;
      color: black;
    }
    .xiang {
      line-height: 25px;
    }
    `,
    code2: `
      <span class="h2">刘一凡<br></span>
      <span class="h2">教育经历</span>
      <p>
        <span><b>学校：</b>江西师专  </span><span><b>专业：</b>大数据技术与应用  </span><span><b>毕业时间：</b>2021.06</span>
      </p>
      <span class="h2">求职意向</span>
      <p>
        <div>1.岗位：前端Web开发</div>
        <div>2.期望薪资：面议</div>
        <div>3.期望工作地点：杭州</div>
      </p>
      <span class="h2">技能</span>
      <ul>
        <li>能够使用HTML+CSS还原设计稿（完成一些简单的浏览器兼容），了解HTML5新属性以及语义化标签，了解CSS3动画和flex、 Grid、Bootstrap网格、浮动等布局方式。</li>
        <li>了解JS常见API和JS数据类型，理解闭包、this，了解Promise、asyns异步处理</li>
        <li>熟悉Vue框架，能使用CLI脚手架，Vue Router，Vuex。Bootstrap，利用webpack打包项目。</li>
        <li>会用GitHub上传项目，下载到本地，版本恢复，了解HTTP协议，能使用接口渲染数据</li>
        <li>有较强的自学能力，掌握封装技术，心态积极向上。</li>
      </ul>
      <span class="h2">项目经验</span>
      <p>
        <div class="xiang"><b>1、</b>使用Vue全家桶制作仿蘑菇街手机端，UI库采用Iconfont以及Element UI,在项目中少量使用ES6语法，使用了Git滚轮插件better-scrol，利用封装思想，使用Git开源项目，使用网络接口，用axios把数据获取下来，并渲染到页面上。</div>
        <div class="xiang"><b>2、</b>使用纯JS制作的UI库变化展示，项目中大量使用的ES6语法以及少量ES7、ES8的API，UI库使用的Bootstrap。在项目中学到的技术：熟悉了JS的DOM、BOM的API，熟悉了ES6的比如箭头函数，异步处理的Promise语法，对于CSS在各浏览器的兼容性有一定解决方案。</div>
        <div class="xiang"><b>3、</b>使用Vue、JS、MangoDB、Github服务器、Webpack，开发的个人博客。其中Vue负责后台管理负责对MangoDB增删查改，以及对页面的渲染和各页面的跳转。Webpack打包压缩后通过Github的免费服务器发表到网上。而考虑到浏览端的不同，需要兼容各手机端，平板端，Web端所以使用了Bootstrap网格布局框架，和CSS3中的vw、vh和rem以及媒体查询自适应。</div>
      </p>
    `,
    text2: ''
    }
  },
  mounted () {
    let content = document.querySelector('.content')
    let n = 1
    let i = 1
    new Promise((resolve, reject) => {
      const settime = setInterval(() => {
      if (n <= this.code.length) {
        this.text = this.code.substr(0, n)
        n++
      } else {
        clearInterval(settime)
        resolve()
      }
    }, 10)
    }).then(() => {
      new Promise((resolve, reject) => {
        const settime2 = setInterval(() => {
            if (i <= this.code2.length) {
            content.innerHTML = this.code2.substr(0, i)
            this.text2 = this.jianli.substr(0, i)
            i++
            this.$refs.scroll.refresh()
          } else {
            clearInterval(settime2)
            resolve()
          }
        },10)
        }).then(() => {
          this.$refs.scroll.refresh()
        })
    })

  },
  methods: {

  },
  computed: {
    compcode() {
      return `<style>` + this.text + `</style>`
    },
    compcode2() {
      return `<style>` + this.text2 + `</style>`
    }
  },
}
</script>

<style scoped>
  .contentt {
    position: absolute;
    right: 144px;
    top: -76px;
    bottom: -133px;
    overflow: hidden;
    width: 600px;
  }
  /* .content {
    height: 500px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  } */
</style>
