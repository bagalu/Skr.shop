<template>
  <div class="login">
    <h1 class="first">登录</h1>
    <div style="width: 1240px; margin: 0 auto">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <div class="form">
          <el-form-item label="用户名" prop="username">
            <el-input
              type="username"
              v-model="ruleForm.username"
              autocomplete="off"
              placeholder="请输入您的用户名"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
              autocomplete="off"
              placeholder="请输入您的妈妈"
            >
            </el-input>
          </el-form-item>
        </div>

        <div class="btn">
          <button class="btn1" @click="submitForm('ruleForm')">登录</button>
        </div>
      </el-form>
      <div class="middle">
        <div class="pic" @click="changImg">
          <img :src="bianse ? shopList[0] : shopList[1]" alt="" />
          <span style="cursor: pointer">记住密码</span>
        </div>
        <div class="find">
          <span> 找回用户名 &nbsp;&nbsp;&nbsp;&nbsp;忘记密码</span>
        </div>
        <!-- <div class="third" style="clear: both">
                <h3 style="float: left">第三方登录</h3>

                <span>QQ</span>
                <span>微信</span>
                </div> -->

        <div class="four"></div>
      </div>
    </div>
    <div class="login_foot">
      <ul class="foot_text">
        <li>
          <p>
            <span>还不是SKR-SHOP成员？</span>
            <br />
            <span>如果您注册成为会员，您将获得10％的折扣券。</span>
          </p>
          <button @click="zhuce" style="cursor: pointer">注册</button>
        </li>
        <li>
          <p>
            <span>需要非会员订单/交货查询吗？</span>
          </p>
          <button>非会员订单查询</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import a from '../../assets/w.png';
import b from '../../assets/b.png';
import { getlogin } from '@/api/login';
export default {
  name: 'Login',
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        if (this.ruleForm.username !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (value.length < 4) {
        callback(new Error('长度小于4'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { validator: validatePass, trigger: 'blur', required: true },
        ],
        password: [
          { validator: validatePass2, trigger: 'blur', required: true },
        ],
      },
      bianse: true,
      shopList: [a, b],
    };
  },
  methods: {
    changImg() {
      this.bianse = !this.bianse;
    },
    zhuce() {
      this.$router.push('/register');
    },
    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.setlogin();
        } else {
          return false;
        }
      });
    },
    setlogin() {
      const { username } = this.ruleForm;
      const { password } = this.ruleForm;
      getlogin({ username, password }).then((res) => {
        console.log(res);
        if (res.code == 200) {
          this.$message({
            type: 'success',
            message: `欢迎回来`,
          });

          let user = {
            username: username,
            token: res.data.token,
            userId: res.data.userInfo.id,
          };

          this.$store.dispatch('settoken', user);
          localStorage.setItem('userId', user.userId);
          localStorage.setItem('token', user.token);
          localStorage.setItem('username', user.username);
          this.$router.push('/home');
        } else {
          this.$alert('登录失败', '系统提示', {
            confirmButtonText: '确定',
            callback: (action) => {
              this.$message({
                type: 'info',
                message: `请检查用户名或密码是否正确`,
              });
            },
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  width: 100%;
  margin-top: 40px;
}

.form {
  float: left;
  width: 500px;
  margin-left: 200px;
  display: block;
  overflow: hidden;
}

.first {
  text-align: center;
  margin-top: 30px;
}

.btn1 {
  float: left;
  width: 200px;
  height: 100px;
  background-color: black;
  color: azure;
  font-size: 18px;
  cursor: pointer;
  margin-left: 20px;
  overflow: hidden;
}

.middle {
  width: 600px;
  height: 32px;
  margin-left: 300px;
  clear: both;
  font-size: 14px;
  vertical-align: middle;
  line-height: 32px;
}

.find {
  float: right;
  font-size: 14px;
}

span {
  height: 32px;
  line-height: 32px;
}

.pic {
  vertical-align: center;
  display: inline-block;
  line-height: 32px;
  height: 32px;
  text-align: middle;
}

.third {
  height: 50px;
}

.login_foot {
  width: 1240px;
  margin: 20px auto;
  height: 120px;
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
  padding: 40px 70px 36px;

  .foot_text {
    display: flex;
    justify-content: center;

    & > li {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 50px;

      button {
        width: 160px;
        height: 40px;
        background-color: #7d7d7d;
        border: none;
        color: white;
        margin: 20px;
      }
    }
  }
}
</style>
