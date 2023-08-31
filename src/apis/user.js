import request from "@/utils/request";

export const doLogin = (user)=>{
    return request.post('/user/login',{
        account:user.username,
        password:user.pass
       
    })
}
// 退出登录
export const logout = () => {
    return request.post('/user/logout')
}
// 创建管理员
export const createUser = ({username,password,permission})=>{
    return request({
        url:'/permission/createUser',
        method:'POST',
        data:{
            account:username,
            password:password,
            role_id:permission
        }
    })
}
//获取用户接口
export const userList =()=>{
    return request({
        url: '/user/list?type=new',
        method: 'get'
    })
}
// 获取用户详情接口
export const userInfo = ()=>{
    return request.get("/user/info")
}