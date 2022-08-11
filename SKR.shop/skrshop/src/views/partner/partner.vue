<template>
  <div class="partner">
    <div class="partner_text">
      <h2>营销联盟</h2>
    </div>
    <div class="par_pic">
      <img src="@/assets/imgs/img_marketing.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "partner",
  data() {
    return{
      // img:require("@/assets/imgs/img_marketing.jpg"),
    }
  },
};
</script>

<style lang="scss" scoped>
.partner {
  width: 100%;
  height: 70vh;
}
.partner .partner_text {
  width: 80%;
  padding-top: 81px;
  height: 200px;
  margin: 0 auto;
  text-align: center;
}
.partner .partner_text h2 {
  font-size: 44px;
  color: #000;
}
.partner .par_pic {
  width: 80%;
  height: 500px;
  text-align: center;
  margin: 0 auto;
}
img {
  vertical-align: middle;
  border-style: none;
}
</style>