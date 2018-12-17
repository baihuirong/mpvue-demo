import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default{
    //这个字段走app.json
    config:{
        //页面前带有^符号的，会被编译成首页，其他页面可以选填，我们会自动把webpack entry里
        pages:['pages/logs/main','pages/index/main','^pages/user/main'],
        window:{
            backgroundTextStyle:'light',
            navigationBarBackgroundColor:'#fff',
            navigationBarTitleText:'WeChat',
            navigationBarTextStyle:'black'
        }
    }
}