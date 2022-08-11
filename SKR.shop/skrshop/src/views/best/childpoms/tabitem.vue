<template>
  <div id="tab_item">
    <div class="card-container">
      <div class="top_box">
        <ul>
          <li v-for="(tabs, indexs) in tabs" :key="indexs" @click="cli(tabs,indexs)" 
            :class="{ type_title_item_static: true, type_title_item_dynamic: indexs == focus }">{{ tabs }}</li>
        </ul>
      </div>
      <div class="sec_box">
        <ul>
          <li v-for="(sort, index) in sort[tab]" :key="index" @click="chge(index)" >
            <span :class="{type_choose: false,type_nochoose: index==choose}">
              {{ sort }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabItem',
  data() {
    return {
      tabs: ['All', '鞋类', '服饰', '配件', '儿童专区'],
      sort: {
        All: [],
        鞋类: ["ALL WOMEN", "APPAREL", "BAG", "SHOES", "ACC"],
        服饰: ["ALL MEN", "APPAREL", "BAG", "SHOES", "ACC"],
        配件: [
          "ALL LIFE",
          "LIFEWEAR",
          "HOME",
          "TRAVEL",
          "DIGITAL",
          "PET",
          "GOODS",
        ],
        儿童专区: [
          "ALL BEAUTY",
          "FACIAL BEAUTY",
          "SALON BEAUTY",
          "SCENT BEAUTY",
          "INNER BEAUTY",
          "for MEN",
        ],
      },
      active: 0,
      tab: 'All',
      focus: 0,
      choose:0,
    };
  },
  methods: {
    cli(tab,index) {
      this.tab = tab
      this.focus=index
      this.active=0;
      this.choose=0
      this.$emit('tabItem',this.tabs[index])
      // 这个知道了点击的是哪一个tab栏
    },
    chge(index){
      this.choose=index
    }
  }
}
</script>

<style lang="scss" scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
ul li {
  list-style: none;
}

.card-container {
   width: 82%;
  margin: 0 auto;
  .top_box {
    position: relative;
    box-sizing: border-box;
    margin-bottom: -1px;
    overflow: hidden;
    font-size: 14px;
    line-height: 1.5;

    & ul {
      
      display: flex;
      font-size: 18px;
      flex-direction: row;
      justify-content: flex-start;
    }
  }

  .sec_box {
    height: 60px;

    & ul {
      display: flex;
      flex-direction: row;
      justify-content: center;

      li {
        cursor: pointer;
        margin: 0 20px 0;
        font-size: 16px;
        width: 218px;
        text-align: center;
        & span{
          line-height: 60px;
        }
      }
    }
  }
}

.type_title_item_static {
  text-align: center;
  margin-top: 40px;
  border: 1px solid #b5b5b5;
  text-transform: uppercase;
  height: 59px;
  border-bottom: 2px #333 solid;
  color: black;
  line-height: 59px;
  flex: 1
}

.type_title_item_static:hover {
  cursor: pointer;
  color: black;
}

.type_title_item_dynamic {
  border: 2px #333 solid;
  border-bottom: none;
}
.type_choose{
  border-bottom: 1px solid transparent;
  
}
.type_nochoose{
  border-bottom: 1px solid #333;
}
</style>