<template>
    <div class="selects">
        <div class="select">
            <el-select v-model="value" placeholder="日常" style="width:120px">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Select',
    data() {
        return {
           options: [{
          value: '选项1',
          label: '日常的'
        }, {
          value: '选项2',
          label: '每周'
        }, {
          value: '选项3',
          label: '每月一次'
        }, {
          value: '选项4',
          label: '年更'
        }],
        value:''
        }
    }
}
</script>

<style lang="scss" scoped>

.selects{
    line-height: 60px;
    width: 82%;
    margin: 20px auto;
    height: 60px;
    margin-top: 0px;
    .select{
        float: right;
    }
}
</style>