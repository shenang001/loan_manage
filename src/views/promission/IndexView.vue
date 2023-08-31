<template>
    <div id="input-manager">
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column type="index" label="序号" width="80" align="center">
            </el-table-column>
            <el-table-column
                             v-for="(item, index) in columns"
                             :key="index"
                             :prop="item.prop"
                             :label="item.label"
                             :width="item.width"
                             align="center"
                             >
            </el-table-column>
        </el-table>
        <!-- 分页器 -->
        <el-pagination 
               @current-change="handleCurrentChange"
               @size-change="updateSize"
               :page-sizes="[10,20,30,40]"
               :page-size="pageOptions.pageSize"
               layout="total, sizes, prev, pager, next, jumper"
               :total="rows"
               >
</el-pagination >
    </div>
</template>
<script>
import {userList} from '@/apis/user'
export default {
    data(){
    return {
        tableData:[],
        rows:0,
        pageOptions:{
           
            pageNo:1,   // 当前页
            pageSize:10,  //一页显示多少个
        },
        columns: [
            {
                label: "用户名",
                prop: "account",
            },
            {
                label: "密码",
                prop: "password",
            },
            {
                label:'创建时间',
                prop:'reg_time',
            },
            {
                label:'创建者',
                prop:'creator'
            },
            {
                label:'权限分配',
                prop:'role_name',
            }

        ]
    }
},
    methods:{
        updateSize(pageSize){
            this.pageOptions.pageSize = pageSize;
            this.getUserList();
        },
       handleCurrentChange(pageNo){
        this.pageOptions.pageNo = pageNo;
        this.getUserList();
        },
        // 格式化时间
        getTime(date){
    function  convertTime(n) {
        return n < 10 ? '0' + n : n
    }
    let d2 = new Date(date)
    return d2.getFullYear() + '-'
        + convertTime(d2.getMonth() + 1) + '-'
        + convertTime(d2.getDate()) + ' '
        + convertTime(d2.getHours()) + ':'
        + convertTime(d2.getSeconds()) + ':'
        + convertTime(d2.getMinutes())
},  
        // 格式化人员列表
        getRole(s){
        switch(s){
            case 'input':
                return  '销售专员'
            case 'approve':
                return  '初审专员'
            case 'administrator':
                return  '超级管理员'
        }
    },
        async  getUserList(){
    let res =  await userList();
    // console.log(res,'人员列表');
    if(res?.data?.code===20000){
        // 显示总条数
        this.rows = res.data.data.length;
        // 从data里解构对象
        const { pageNo,pageSize } = this.pageOptions; 
        // 进行分页
        let tableDataNew = res.data.data;
       tableDataNew = tableDataNew.slice((pageNo-1)*pageSize, pageNo * pageSize)
        // 遍历表格里的数据进行格式化日期和人员
        tableDataNew=tableDataNew.map(item =>{
            item.reg_time = this.getTime(item.reg_time);
            item.role_name = this.getRole(item.role_name)
            return item;
        })
        this.tableData =  tableDataNew;
    }
}
    },
    // 页面渲染完成就加载出来数据
    mounted(){
        this.getUserList()
    }
}
</script>

<style>

</style>