<template>
   <div id="application-manage">
   <el-row>
        <el-col :span="22">
     <!--这个属性接收名称，下面统一定义 -->
            <el-input placeholder="请输入名称" type="text" v-model="query"></el-input>
        </el-col>
        <el-col :span="2">
               <!-- 按钮事件也是下面统一定义 -->
           <el-button type="primary" @click="setQueryName">搜索</el-button>
        </el-col>
    </el-row>
    <!-- 表格 -->
    <el-table :data="tableData" id="gbox"  :useIndex="true"
          :stripe="true" :border="true" :fit="true" :useMultiSelect="false"
          >
    <!--第一列序号-->   
    <el-table-column
      v-for="(col,index) in columns"
          :key="index"
          :label="col.label"
          :prop="col.prop"
          :width="col.width"
            align="center"      >
             <!-- 默认插槽  column是所有列信息，row是当前行信息-->
    <template v-slot="{ column,row}">
        <!-- 如果列的prop的值为status-->
        <div v-if="column.property==='status'">
            <!-- 使用两个过滤器来格式化方法，因为后端返回的申请状态是0到7 -->
            <el-tag :type="row[column.property] | statusColor">{{ row[column.property] | status }}   
            </el-tag>
        </div>
        <div v-else-if="column.property==='opts'">
            <el-button type="success"
             @click="showEdit(row)" 
              :disabled="[0,2,3,6].indexOf(row['status'])===-1" 
             >编辑</el-button>

            <el-button type="danger" @click="delLoan(row.id)">删除</el-button>

            <el-button type="success" 
            @click="submit(row.id)"
            :disabled="[0,2,3,6].indexOf(row['status'])===-1"
            >提交审核</el-button>
        </div>
        <div v-else>
            {{ row[column.property] }}
        </div>
    </template>
    </el-table-column>
</el-table>
<!--dialogVisible变量控制对话框是否显示-->
<el-dialog title="申请管理-编辑" 
:visible="dialogVisible"  
@close="dialogVisible=false"  
width="30%">
    <div class="form-box">
        <el-form ref="updateForm" :model="updateForm" 
        :rules="rules" label-width="80px">
            <el-row>
                <el-col
                        :xl=20 :lg=20
                        :md=12 :sm=24 :xs=24>
                    <el-form-item label="姓名" prop="name">
                        <el-input  type='input' v-model="updateForm.name" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col
                        :xl=20 :lg=20
                        :md=12 :sm=24 :xs=24>
                    <el-form-item label="性别" prop="sex">
                        <el-select  v-model="updateForm.sex" >
                            <el-option
                                       key="man"
                                       label="男"
                                       value="man">
                            </el-option>
                            <el-option
                                       key="woman"
                                       label="女"
                                       value="woman">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>

        <div class="btns clear-fix">
            <div>
                <el-button type="primary" @click="submitUpdate">提交</el-button>
                <el-button @click="cleanFrom" >重置</el-button>
            </div>
        </div>

    </div>
</el-dialog>
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
import {getLoanList ,updateLoan, deleteLoan, submitApprove} from '@/apis/loan';

export default {
    filters:{
      statusColor(status){
        switch (status) {
            case 0:
                return 'success'
                break
            case 1:
                return ''
                break
            case 2:
                return 'success'
                break
            case 3:
                return 'danger'
                break
            case 4:
                return 'warning'
                break
            case 5:
                return 'success'
                break
            case 6:
                return 'danger'
                break
            case 7:
                return 'success'
                break
            default:
              return 'danger'

        }
    },
         status(status){
        switch (status) {
            case 0:
                return '进件'
                break
            case 1:
                return '提交初审'
                break
            case 2:
                return '初审通过'
                break
            case 3:
                return '初审拒绝'
                break
            case 4:
                return '提交终审'
                break
            case 5:
                return '终审通过'
                break
            case 6:
                return '终审拒绝'
                break
            case 7:
                return '生成合同'
                break
            default:
                return '出错了'
    }
}
    },
data(){
        return{
            pageOptions:{
                pageNo:1,
                pageSize:10,
            },
            dialogVisible:false,  //是否显示对话框
            updateForm:{
                id:0, 
                name:'',
                sex:'',
            },
            rules:{
                name:[{required:true,message:'请输入用户名'}],
                sex:[{required:true,message:'请输入性别'}]
            },
            query:'',
            rows:0,
            // 表格数据
            tableData:[],
       
             columns: [
        {
            label: "姓名",
            prop: "name",
            width: "80",
        },
        {
            label: "出生日期",
            prop: "birthday",
            width: "160",
        },
        {
            label: "性别",
            prop: "sex",
        },
        {
            label: "教育程度",
            prop: "education",
        },
        {
            label: "居住地址",
            prop: "address1",
        },
        {
            label: "手机号",
            prop: "mobile_phone",
        },
        {
            label: "申请状态",
            prop: "status",
        },
        {
            label: "操作",
            width: "280",
            prop: "opts",
        },
                        ],
        }
},
methods:{
    updateSize(value){
       
        this.pageOptions.pageSize = value;
        this.getLoanList();
        console.log(`现在是${value}条每页`);   
    },
    handleCurrentChange(value){
     
        this.pageOptions.pageNo = value;
        this.getLoanList()
        console.log(value);
    },
    // 编辑操作
    showEdit(row){
        console.log(row,'row为申请表单输入的值');
        this.dialogVisible = true;
        this.$nextTick(()=>{
            this.updateForm.id = row.id;
            this.updateForm.name = row.name;
            this.updateForm.sex = row.sex;
        })
    } ,  
    // 对话框--提交
   async submitUpdate(){
     let res = await updateLoan(this.updateForm);
        if(res.data.code === 20000){
             this.dialogVisible = false;
             this.getLoanList();
        } 
    },
    // 对话框--重置
    cleanFrom(){
        this.$refs.updateForm.resetFields();
    },
    // 删除
   async delLoan(id){
        let res  =await deleteLoan(id);
        if(res.data.code === 20000){
            this.getLoanList()
        }
        console.log(id);
        console.log(res);
    },
    // 提交审核
      async submit(id){
        let res = await submitApprove(id);
        if(res.data.code === 20000){
            this.getLoanList()
        };
        console.log(res,'审核');
       },
    //    模糊查询
       async  setQueryName(){  
        this.pageOptions.name = this.query;
       await this.getLoanList();
        this.pageOptions.name = null
    },
    // 转换生日
    getBirthday(date){
        let dateNow  = new Date(date);
        // 小于10的补零
            function convert(data) {
        return data < 10 ? "0" + data : data;
    }
        let year = dateNow.getFullYear();
        let month =convert(dateNow.getMonth() +1);
        let day = convert(dateNow.getDate());
        let hours = convert(dateNow.getHours());
        let minutes = convert(dateNow.getMinutes());
        let seconds = convert(dateNow.getSeconds());
        let dateStr =
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds;
    return dateStr;
    } ,
    getSex(str){
        return str ==='man'?'男':'女';
    },
    getEducation(str){
        return str ==='college'?'大学':'高中'
    },
      async  getLoanList(){
    //   let params = {pageNo:1,pageSize:10}
      let res = await getLoanList(this.pageOptions);
    //   成功获取时展示
      if(res?.data?.code ===20000){
        // 格式化日期、性别、学历显示
      this.tableData = res.data.data.data.data.map((item) =>{
        item.birthday = this.getBirthday(item.birthday);
        item.sex = this.getSex(item.sex);
        item.education = this.getEducation(item.education)
    return item;
      });}
    //   显示总条数
      this.rows = res?.data?.data?.rows
      console.log(res);
        // console.log(res.data.data.data.data);
          },
},
    mounted() {
        // 页面一加载就渲染
        this.getLoanList()
    },
}
</script>

<style>
.el-row{
    margin-bottom: 10px;
}
</style>