"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[278],{34278:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"input-manager"}},[e("el-row",[e("el-col",{attrs:{span:22}},[e("el-input",{attrs:{placeholder:"请输入名称",type:"text"},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}})],1),e("el-col",{attrs:{span:2}},[e("el-button",{attrs:{type:"primary"},on:{click:t.setQueryName}},[t._v("搜索")])],1)],1),e("el-table",{attrs:{data:t.tableData,id:"gbox",useIndex:!0,stripe:!0,border:!0,fit:!0,useMultiSelect:!1}},[e("el-table-column",{attrs:{type:"index",label:"序号",width:"55",align:"center"}}),t._l(t.columns,(function(a,r){return e("el-table-column",{key:r,attrs:{label:a.label,prop:a.prop,width:a.width,align:"center"},scopedSlots:t._u([{key:"default",fn:function({column:a,row:r}){return["opts"===a.property?e("div",[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.showInfo(r)}}},[t._v("查看")]),e("el-button",{attrs:{type:"success"},on:{click:function(e){return t.submit(r.id,"pass")}}},[t._v("通过")]),e("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.submit(r.id,"reject")}}},[t._v("拒绝")])],1):e("div",[t._v(" "+t._s(r[a.property])+" ")])]}}],null,!0)})}))],2),e("el-dialog",{attrs:{title:"贷款审批-查看详情",visible:t.dialogVisible,width:"30%"},on:{close:function(e){t.dialogVisible=!1}}},[t.dialogVisible?e("div",{staticClass:"form-box"},[e("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[e("el-row",[e("el-col",{attrs:{xl:24,lg:24,md:12,sm:24,xs:24}},[e("el-form-item",{attrs:{label:"id",prop:"id"}},[e("el-input",{attrs:{type:"input",disabled:""},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}})],1)],1),e("el-col",{attrs:{xl:24,lg:24,md:12,sm:24,xs:24}},[e("el-form-item",{attrs:{label:"姓名",prop:"name"}},[e("el-input",{attrs:{type:"input",disabled:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1),e("el-col",{attrs:{xl:24,lg:24,md:12,sm:24,xs:24}},[e("el-form-item",{attrs:{label:"出生日期",prop:"birthday"}},[e("el-input",{attrs:{type:"input",disabled:""},model:{value:t.form.birthday,callback:function(e){t.$set(t.form,"birthday",e)},expression:"form.birthday"}})],1)],1),e("el-col",{attrs:{xl:24,lg:24,md:12,sm:24,xs:24}},[e("el-form-item",{attrs:{label:"性别",prop:"sex"}},[e("el-input",{attrs:{type:"input",disabled:""},model:{value:t.form.sex,callback:function(e){t.$set(t.form,"sex",e)},expression:"form.sex"}})],1)],1),e("el-col",{attrs:{xl:24,lg:24,md:12,sm:24,xs:24}},[e("el-form-item",{attrs:{label:"教育程度",prop:"education"}},[e("el-input",{attrs:{type:"input",disabled:""},model:{value:t.form.education,callback:function(e){t.$set(t.form,"education",e)},expression:"form.education"}})],1)],1),e("el-col",{attrs:{xl:24,lg:24,md:12,sm:24,xs:24}},[e("el-form-item",{attrs:{label:"地址",prop:"address1"}},[e("el-input",{attrs:{type:"input",disabled:""},model:{value:t.form.address1,callback:function(e){t.$set(t.form,"address1",e)},expression:"form.address1"}})],1)],1),e("el-col",{attrs:{xl:24,lg:24,md:12,sm:24,xs:24}},[e("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[e("el-input",{attrs:{type:"input",disabled:""},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1)],1),e("el-col",{attrs:{xl:24,lg:24,md:12,sm:24,xs:24}},[e("el-form-item",{attrs:{label:"身份证",prop:"identity_card"}},[e("el-input",{attrs:{type:"input",disabled:""},model:{value:t.form.identity_card,callback:function(e){t.$set(t.form,"identity_card",e)},expression:"form.identity_card"}})],1)],1)],1)],1),e("div",{staticClass:"btns clear-fix"},[e("div",[e("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!t.dialogVisible}}},[t._v("取消")])],1)])],1):t._e()]),e("el-pagination",{attrs:{"page-sizes":[10,20,30,40],"page-size":t.pageOptions.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.rows},on:{"current-change":t.handleCurrentChange,"size-change":t.updateSize}})],1)},l=[],o=a(76897),i={data(){return{query:"",tableData:[],rows:0,form:{},dialogVisible:!1,pageOptions:{pageNo:1,pageSize:10},pageOptions:{pageNo:1,pageSize:10},columns:[{label:"姓名",prop:"name",width:"80"},{label:"出生日期",prop:"birthday",width:"160"},{label:"身份证",prop:"identity_card",width:"260"},{label:"操作",prop:"opts"}]}},methods:{async setQueryName(){this.pageOptions.name=this.query,await this.getEndList(),this.pageOptions.name=null},handleCurrentChange(t){this.pageOptions.pageNo=t,this.getEndList()},updateSize(t){this.pageOptions.pageSize=t,this.getEndList()},showInfo(t){this.form=t,this.dialogVisible=!0},async submit(t,e){let a=await(0,o.iZ)(t,e);2e4===a.data.code&&this.getEndList()},convertBirthday(t){function e(t){return t<10?"0"+t:t}let a=new Date(t);return a.getFullYear()+"-"+e(a.getMonth()+1)+"-"+e(a.getDate())+" "+e(a.getHours())+":"+e(a.getSeconds())+":"+e(a.getMinutes())},async getEndList(){let t=await(0,o.Et)(this.pageOptions);2e4===t.data.code&&(this.tableData=t.data.data.data.data.map((t=>(t.birthday=this.convertBirthday(t.birthday),t))),this.rows=t.data.data.rows)}},mounted(){this.getEndList()}},n=i,s=a(1001),d=(0,s.Z)(n,r,l,!1,null,"9c81e1fe",null),p=d.exports},76897:function(t,e,a){a.d(e,{Et:function(){return u},Jz:function(){return m},MX:function(){return o},P8:function(){return s},Qf:function(){return i},Vb:function(){return p},ao:function(){return f},cG:function(){return b},et:function(){return d},iZ:function(){return c},sv:function(){return n},tX:function(){return l}});var r=a(84471);const l=t=>(0,r.Z)({url:"/loan/create",method:"POST",data:t}),o=t=>(0,r.Z)({url:"/loan/list",method:"get",params:t}),i=t=>(0,r.Z)({url:"/loan/update/",method:"PUT",data:t}),n=t=>(0,r.Z)({url:"/loan/delete/"+t,method:"DELETE"}),s=t=>(0,r.Z)({url:"/loan/submitToApprove",method:"POST",data:{id:t}}),d=t=>(0,r.Z)({url:"/approve/first/list",method:"get",params:t}),p=(t,e)=>(0,r.Z)({url:"/approve/first/"+e,method:"post",data:{loanId:t,appId:t}}),u=t=>(0,r.Z)({url:"/approve/end/list",method:"get",params:t}),c=(t,e)=>(0,r.Z)({url:"/approve/end/"+e,method:"post",data:{loanId:t,appId:t}}),m=t=>(0,r.Z)({url:"/contract/list",method:"get",params:t}),f=t=>(0,r.Z)({url:"/contract/createFile",method:"post",data:{id:t}}),b=t=>(0,r.Z)({url:"/contract/download",method:"get",params:{id:t}})}}]);
//# sourceMappingURL=278.e893d540.js.map