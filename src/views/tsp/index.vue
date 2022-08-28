<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          <el-input
            v-model="dataform.begin"
            placeholder="请输入当前站点"
          ></el-input></div
      ></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          <el-input
            v-model="dataform.carnumber"
            placeholder="请输入当前无人车编号"
          ></el-input></div
      ></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          <el-input
            v-model="dataform.cartime"
            placeholder="请输入当前班次"
          ></el-input></div
      ></el-col>
      <el-col :span="6">
        <el-button type="primary" @click="tsp">执行规划</el-button>
      </el-col>
    </el-row>
    <h3>{{ "规划路径下一站点编号为：" + result }}</h3>
    <el-divider></el-divider>
    <h3>{{ "A车线路为：3092->3113->3103->3088->3095" }}</h3>
    <h3>{{ "B车线路为：3099->3087->3094->3084" }}</h3>
  </div>
</template>

<script>
import { tsp } from "@/api/tsp";
export default {
  data() {
    return {
      dataform: { begin: "", carnumber: "", cartime: "" },
      result: "",
    };
  },
  methods: {
    tsp() {
      tsp(this.dataform).then((response) => {
        console.log("tsp", response);

        if (response.code == "0") {
          this.$message({
            message: "路径规划成功",
            type: "success",
          });
          this.result = response.data;
        }
      });
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 25px;
}
.line {
  text-align: center;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
</style>

