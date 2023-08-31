<template>
  <el-form :model="form" :rules="rules" ref="form" label-width="80px">
    <el-row>
            <el-col
                :xl=12 :lg=12
                :md=12 :sm=24 :xs=24>
                <el-form-item label="用户名" prop="username">
                    <el-input  type='input' v-model="form.username" ></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col
                :xl=12 :lg=12
                :md=12 :sm=24 :xs=24>
                <el-form-item label="密码" prop="password">
                    <el-input  type='password' v-model="form.password" ></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col
                :xl=12 :lg=12
                :md=12 :sm=24 :xs=24>
                <el-form-item label="确认密码" prop="confirmPwd">
                    <el-input  type='password' v-model="form.confirmPwd" ></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col
                :xl=8 :lg=8
                :md=12 :sm=24 :xs=24>
                <el-form-item label="权限分配" prop="permission">
                    <el-radio v-model="form.permission"  label='2' >销售人员</el-radio>
                    <el-radio v-model="form.permission"  label='1' >初审人员</el-radio>
                </el-form-item>
            </el-col>
        </el-row>
        <div class="left">
                <el-button type="primary" @click="createUser"> 创建管理员</el-button>
                <el-button @click="doReset"> 重置</el-button>
        </div>
       
  </el-form>
</template>

<script>
import {createUser} from '@/apis/user.js'
export default {
    data(){
        return{
            form:{
                username:'',
                password:'',
                confirmPwd:'',
                permission:'2'
            },
            rules:{
                username:[{required:true,message:'请输入用户名',trigger:'blur'}],
                 password:[{required:true,message:'请输入密码',trigger:'blur'}],
                 confirmPwd:[{required:true,validator:this.validatePass,trigger:'blur'}],
                 permission:[{required:true}]
            }
        }
    },
    methods:{
       async createUser(){
        this.$refs.form.validate( async valid=>{
            let res = await createUser(this.form);
          console.log(res);
          if(res.data.code === 20000){
            this.doReset()
          }else{
            this.$message('校验失败');
            return false
          }
        })
        },
        // 重置
        doReset(){
            this.$refs.form.resetFields()
        },

        // 校验密码
       validatePass(rule,value,callback){
        if(value === ''){
            callback(new Error('请输入确认密码'));
        }else if(value !== this.form.password){
             callback(new Error('密码不一致，重新输入'))
        }else{
            callback();
        }
       } 
        
    }
}
</script>

<style>

</style>