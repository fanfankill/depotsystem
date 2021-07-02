<template>
  <div>
    <el-dialog title="新增车位" :visible.sync="isaddpark">
      <el-select v-model="toaddposition" placeholder="请选择停车区域">
        <el-option
          v-for="item in positions"
          :key="item.descration"
          :label="item.position"
          :value="item.position"
        >
          <span style="float: left">{{ item.position }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px"
            >￥{{ item.fare }}</span
          >
        </el-option>
      </el-select>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isaddpark = false">取 消</el-button>
        <el-button type="primary" @click="toaddpark">新 增</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
    props:{
        changebox:Boolean
    },
watch:{
    changebox(newval)
    {
        console.log(newval);
        this.isaddpark=newval
    },
    isaddpark:function()
    {
        console.log(this.isaddpark);
        this.$emit('changebox',this.isaddpark)
    }
},

  created: function () {
    this.getallpositons();
  },
  data() {
    return {
      isaddpark: false,
      //停车区域数据
      positions: [],
      //选择框绑定
      toaddposition:''
    };
  },
  methods: {
    //获取停车区域信息
    getallpositons() {
      this.$axios("/getposition")
        .then((res) => {
          console.log(res);
          this.positions = res.data.lists;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //新增车位
    toaddpark() {
      this.$axios
        .post("/addparking", {
          position: this.toaddposition,
        })
        .then((res) => {
          console.log(res);
          //重新获取更新的表单和弹窗消失
          this.$message({
            message: res.data.message,
            type: "success",
          });
          this.isaddpark = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>