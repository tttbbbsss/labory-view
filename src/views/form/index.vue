<template>
  <div class="user-manager">
    <!-- 卡片视图区域 -->
    <el-card>
      <el-row class="user-list-row" :gutter="20">
        <el-col :span="7">
          <!-- 搜索与添加区域 -->
        </el-col>
        <el-col :span="4">
          <!-- 添加用户区域 -->
          <el-button type="primary" @click="adduserdialogFormVisible = true"
            >添加数据</el-button
          >
        </el-col>
      </el-row>
      <!-- 用户列表 -->
      <el-table
        class="table_sty"
        :data="datalist"
        border
        stripe
        style="width: 100%"
      >
        <el-table-column fixed prop="mationid" label="ID" width="120">
        </el-table-column>
        <el-table-column
          fixed
          prop="stopid"
          label="站点id"
          :filters="[
            { text: '3111', value: '3111' },
            { text: '3092', value: '3092' },
            { text: '3113', value: '3113' },
            { text: '3103', value: '3103' },
            { text: '3088', value: '3088' },
            { text: '3095', value: '3095' },
            { text: '3099', value: '3099' },
            { text: '3087', value: '3087' },
            { text: '3094', value: '3094' },
            { text: '3084', value: '3084' },
          ]"
          :filter-method="filterHandler"
          width="120"
        >
        </el-table-column>
        <!-- <el-table-column fixed prop="modifiedTime" label="修改时间" width="150">
        </el-table-column> -->
        <el-table-column fixed prop="stopaddr" label="点位地址" width="200">
        </el-table-column>
        <el-table-column prop="stopname" label="点位名称" width="130">
        </el-table-column>
        <el-table-column prop="stoplon" label="点位经度" width="165">
        </el-table-column>
        <el-table-column prop="stoplat" label="点位纬度" width="165">
        </el-table-column>
        <el-table-column
          prop="agvshift"
          label="班次"
          :filters="[
            { text: '1', value: '1' },
            { text: '2', value: '2' },
            { text: '3', value: '3' },
            { text: '4', value: '4' },
            { text: '5', value: '5' },
            { text: '6', value: '6' },
            { text: '7', value: '7' },
            { text: '8', value: '8' },
            { text: '9', value: '9' },
            { text: '10', value: '10' },
            { text: '11', value: '11' },
          ]"
          :filter-method="filterHandler"
          width="50"
        >
        </el-table-column>
        <el-table-column prop="stoptimee" label="站点开始时间" width="110">
        </el-table-column>
        <el-table-column prop="stoptimes" label="站点结束时间" width="110">
        </el-table-column>
        <el-table-column
          prop="stopdetail"
          label="站点描述（停靠分钟）"
          width="110"
        >
        </el-table-column>
        <el-table-column
          prop="agvid"
          label="无人车编号"
          :filters="[
            { text: 'LHT5Y2A40MC6EA008', value: 'LHT5Y2A40MC6EA008' },
            { text: 'LHT5Y2A40MC7EA008', value: 'LHT5Y2A40MC7EA008' },
          ]"
          :filter-method="filterHandler"
          width="170"
        >
        </el-table-column>

        <el-table-column label="操作" width="0">
          <template slot-scope="scope">
            <el-button
              type="warning"
              icon="el-icon-delete"
              size="small"
              @click="removeUserById(scope.row.mationid)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        class="pag"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="userpageform.currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="userpageform.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount"
      >
      </el-pagination>
    </el-card>

    <!-- 添加用户对话框 -->
    <el-dialog
      top="6vh"
      title="添加点位信息"
      :visible.sync="adduserdialogFormVisible"
    >
      <el-form :model="userinsertform" size="medium">
        <el-form-item label="站点名称" :label-width="formLabelWidth">
          <el-input
            placeholder="格式：盐城测试场点位XXX"
            v-model="userinsertform.stopname"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="站点地址" :label-width="formLabelWidth">
          <el-input
            placeholder="格式：盐城测试场-XXX"
            v-model="userinsertform.stopaddr"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="站点描述" :label-width="formLabelWidth">
          <el-input
            placeholder="格式：直接写停靠分钟数"
            v-model="userinsertform.stopdetail"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="站点经度" :label-width="formLabelWidth">
          <el-input
            placeholder="经度"
            v-model="userinsertform.stoplon"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="站点纬度" :label-width="formLabelWidth">
          <el-input
            placeholder="纬度"
            v-model="userinsertform.stoplat"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="班次" :label-width="formLabelWidth">
          <el-input
            placeholder="格式：直接写班次数字"
            v-model="userinsertform.agvshift"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="站点开始时间" :label-width="formLabelWidth">
          <el-input
            placeholder="格式：如08:00:00"
            v-model="userinsertform.stoptimes"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="站点结束时间" :label-width="formLabelWidth">
          <el-input
            placeholder="格式：如08:00:00"
            v-model="userinsertform.stoptimee"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="无人车编号" :label-width="formLabelWidth">
          <el-input
            placeholder="无人车编号"
            v-model="userinsertform.agvid"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="adduserdialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="useradd">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { gettataList, userdelete, useradd } from "@/api/datalist";
export default {
  data() {
    return {
      // 用户新增对话框中宽度
      formLabelWidth: "120px",
      // 用户新增的form
      userinsertform: {
        agvid: "",
        agvshift: "",
        stopaddr: "",
        stopdetail: "",
        stopid: "",
        stoplat: "",
        stoplon: "",
        stopname: "",
        stoptimee: "",
        stoptimes: "",
        stoptype: "1",
        validflag: "1",
        extfields1: "",
        extfields2: "",
        extfields3: "",
      },
      // 用户删除的form
      userdeleteform: { id: "" },
      // 增加用户的对话框
      adduserdialogFormVisible: false,
      // 修改用户的对话框
      editDialogVisible: false,
      datalist: [],
      // 数据总数
      totalCount: 0,
      // 总页数
      totalPage: 0,
      userpageform: {
        pageNum: 1,
        pageSize: 10,
      },
    };
  },
  methods: {
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    useradd() {
      useradd(this.userinsertform).then((response) => {
        console.log("userinsertform的response", response);
        // resolve();
        // console.log("response.data.respCode", response.data.respCode);
        if (response.data.respCode == "0") {
          this.$message({
            message: "用户添加成功",
            type: "success",
          });
          this.adduserdialogFormVisible = false;
          this.getDataList();
        }
        this.userinsertform = {
          agvid: "",
          agvshift: "",
          stopaddr: "",
          stopdetail: "3",
          stopid: "",
          stoplat: "",
          stoplon: "",
          stopname: "",
          stoptimee: "",
          stoptimes: "",
          stoptype: "1",
          validflag: "1",
          extfields1: "",
          extfields2: "",
          extfields3: "",
        };
      });
    },
    // 根据id删除对应的用户信息
    async removeUserById(id) {
      // 弹框询问用户是否删除数据
      const confirmResult = await this.$confirm(
        "此操作将永久删除该用户, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => {
        return err;
      });
      // 如果用户确认删除，则返回值为字符串confirm
      // 如果用户取消删除，则返回值为字符串cancel
      if (confirmResult !== "confirm") {
        return this.$message.info("已取消删除");
      }
      // this.userdeleteform.id = id;
      console.log("userdelet的id", id);
      userdelete(id).then((response) => {
        console.log("userdeleteform的response", response);
        if (response.data.respCode == "0") {
          return this.$message.success("删除用户成功！");
        } else {
          this.$message.error("删除用户失败！");
        }
      });

      // 删除后更新列表
      this.getDataList();
    },

    // 监听pagesize改变的事件
    handleSizeChange(newSize) {
      // console.log(newSize)
      // 当用户选择当前页面显示几条，重新将条数返回给data,并重新从服务器渲染列表
      this.userpageform.pageSize = newSize;
      this.getDataList();
    },

    // 监听页码值改变的事件
    handleCurrentChange(newPage) {
      // console.log(newPage)
      // 当用户选择当前页面，重新将当前页面返回给data,并重新从服务器渲染列表
      this.userpageform.pageNum = newPage;
      this.getDataList();
    },
    getDataList() {
      gettataList(this.userpageform).then((response) => {
        console.log("gettataList的response", response);

        if (response.code == "0") {
          this.$message({
            message: "列表查询成功",
            type: "success",
          });
          this.datalist = response.data.records;
          console.log("datalist", this.datalist);
          this.totalCount = response.data.total;
          this.totalPage = response.data.pages;
        }
      });
    },
  },
  created() {
    this.getDataList();
  },
};
</script>

<style scoped>
.table_sty {
  margin-top: 40px;
}
.pag {
  margin-top: 20px;
}
.patient-list-row {
  margin-bottom: 15px;
}
</style>

