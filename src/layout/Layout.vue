<template>
  <div>
    <el-container>
  <el-aside width="240px">
                <el-menu  
                 class="el-menu-vertical-demo" 
                 background-color="#545c64"
                text-color="#fff" 
                active-text-color="#ffd04b"
               router
                >
          
             <AsideMenu v-for="(menu,index) in menuList" :key="index" :menu="menu"/>
            </el-menu>
    </el-aside>
  <el-container>
    <el-header>
      <!--//左侧面包屑-->
               <div class="left">
                <BreadCrunm/>
                </div>
     			<!--//右侧用户名-->
                <div class="right">
                   <!--// //下拉菜单-->
                   <el-dropdown @command="logout">
                    <span class="el-dropdown-link"> {{userName}}</span>  
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu> 
                  </el-dropdown>
                </div>
      </el-header>
    <el-main>
      <router-view/>
      </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
import BreadCrunm from '@/components/BreadCrumb.vue';
import AsideMenu from '@/components/AsideMenu.vue'
import {logout} from '@/apis/user.js'
export default {
   
    components:{BreadCrunm ,AsideMenu},
    methods:{
      async logout(commond) {
      // console.log(commond);
      if (commond === "logout") {
        // 退出登录业务逻辑,这里的res获取不到，存在问题
        let res = await logout();
        console.log(res);
        if (res?.data?.code === 603) {
            // await this.$router.replace("/login")
          // localStorage.removeItem("token");
          localStorage.clear();
            //  跳转后刷新下页面，清除掉路由信息
            window.location.reload()
        }
      }
    },
    },
    computed:{
      userName(){
        return this.$store.state.userName
      },
      menuList(){
       return this.$store.state.menuList
      }
    }
}
</script>

<style scoped>
a:link {
  text-decoration: none;
  color: #fff;

}

/* 状态二: 已经访问过的链接 */
a:visited {
  text-decoration: none;
  color: #fff;
}

/* 状态三: 鼠标划过(停留)的链接(默认红色) */
a:hover {
  text-decoration: none;
  color: #fff;
}
/* 状态四: 被点击的链接 */
a:active {
  text-decoration: none;
  color: #fff;
}
.el-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
}

.el-container {
    height: 100vh;
}
.el-menu-vertical-demo {
    border:none;
}
.router-link-active{
  color: rgb(255, 208, 75) !important;
}
</style>