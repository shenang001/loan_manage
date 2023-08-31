import request from "@/utils/request";

// 创建贷款申请接口
export const createLoan = (data)=>{
    return request({
        url:'/loan/create',
        method:'POST',
        data,
    })
}
// 获取表格数据接口
export const getLoanList = (params) => {
    return request({
        url: '/loan/list',
        method: 'get',
        params
    })
}

// 编辑接口
export const updateLoan = (data)=>{
    return request({
        url:'/loan/update/',
        method:"PUT",
        data,
    })
}
// 删除接口
export const deleteLoan = (id)=>{
    return request({
        url:'/loan/delete/'+id,
        method:'DELETE'
    })
}
// 提交审核接口
export const submitApprove = (id)=>{
    return request({
        url: '/loan/submitToApprove',
        method:'POST',
        data:{
            id
        }
    })
}
// 审批-初审查询接口
export const queryList = (params)=>{
    return request({
        url: '/approve/first/list',
        method: 'get',
        params 
    })
}
// 审批-初审-通过/拒绝接口
export const approveFirst = (id , flag)=>{
    return request({
        url: '/approve/first/'+flag,
        method: 'post',
        data: {
            loanId: id,
            appId: id
        }
    })
}
// 审批-终审查询接口
export const queryEndList = (params)=>{
    return request({
        url: '/approve/end/list',
        method: 'get',
        params 
    })
}
// 审批-终审-通过/拒绝接口
export const approveEnd = (id , flag)=>{
    return request({
        url: '/approve/end/'+flag,
        method: 'post',
        data: {
            loanId: id,
            appId: id
        }
    })
}
    // 合同管理-合同列表接口
    export const contractList = (params)=>{
        return request({
            url: '/contract/list',
            method: 'get',
            params
        })
    }
    // 合同管理- 生成合同接口
export const generateContract = (id) => {
    return request({
        url: '/contract/createFile',
        method: 'post',
        data: {
            id
        }
    })
}

// 合同管理- 下载合同接口
export const downloadContract = (id) => {
    return request({
        url: '/contract/download',
        method: 'get',
        params: {
            id
        }
    })
}