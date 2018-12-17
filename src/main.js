import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default{
    
    config:{
        
        "pages":["pages/logs/main","^pages/index/main","^pages/user/main","pages/news/main","pages/newsContent/main"],
        "window":{
            "backgroundTextStyle":'light',
            "navigationBarBackgroundColor":'#b3d4db',
            "navigationBarTitleText":'WeChat',
            "navigationBarTextStyle":'black'
        },
        "tabBar":{
            "color":"red",
            "selectedColor":"blue",
            "list": [
            {
                "pagePath": "pages/index/main",
                "text": "首页",
                "iconPath":"static/images/home1.png",
                "selectedIconPath":"static/images/home2.png"
            },
            {
                "pagePath": "pages/news/main",
                "text": "新闻",
                "iconPath":"static/images/news1.png",
                "selectedIconPath":"static/images/news2.png"
            },
            {
                "pagePath": "pages/user/main",
                "text": "用户",
                "iconPath":"static/images/user1.png",
                "selectedIconPath":"static/images/user2.png"
            }]
        }
    }

}