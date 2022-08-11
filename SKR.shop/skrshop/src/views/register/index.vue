<template>
    <div class="register">
        <h1 class="register_title">注册</h1>
        <div class="register_prompt">
            <ul class="register_prompt_top">
                <li style="background-color: #000;">
                    <img class="register_prompt_top_writeIco" src="@/assets/imgs/modify.png" />
                </li>
                <li class="register_prompt_top_rightIcon">
                    <img style=" width: 32px; height: 32px" src="@/assets/imgs/right.png" />
                </li>
                <li style="background-color: #f2f2f2;">
                    <img class="register_prompt_top_writeIco" src="@/assets/imgs/success.png" />
                </li>
            </ul>
            <div class="register_prompt_bottom">
                <p style="font-size:14px; color: #a1a1a1; margin-top:15px">1 信息输入</p>
                <p style="margin-left: 95px;font-size:14px; color: #a1a1a1; margin-top:15px">2 注册完成</p>
            </div>
        </div>
        <p class="must"><span style="color: red;">*</span>必填项</p>
        <el-form class="infoTable" :model="userdata" ref="userForm">
            <div class="couponInfoBox">
                <p>
                    <span style="color: #f2f2f2;font-size: 20px;">如果您注册成为会员，您将获得10％的折扣券,可以立即使用。</span>
                    <span style="color: #f2f2f2;font-size: 14px;">（每个完成自我认证的帐户只能使用一次）</span>
                </p>
            </div>
            <el-form-item class="infoTable_item" :rules="usernameRules" prop="username">
                <span class="infoTable_item_left">用户名<span style="color: red;">*</span></span>
                <el-input style="width: 400px;" v-model="userdata.username" placeholder="请输入您的用户名"></el-input>
            </el-form-item>
            <hr>
            <el-form-item class="infoTable_item" :rules="passwordRules" prop="password" clearable>
                <span class="infoTable_item_left">密码<span style="color: red;">*</span></span>
                <el-input style="width: 400px;" v-model="userdata.password" placeholder="请输入您的密码" show-password>
                </el-input>
            </el-form-item>
            <hr>
            <el-form-item class="infoTable_item" :rules="emailRules" prop="email">
                <span class="infoTable_item_left">邮箱<span style="color: red;">*</span></span>
                <el-input style="width: 400px;" v-model="userdata.email" placeholder="请输入您的邮箱"></el-input>
            </el-form-item>
            <hr>
            <el-form-item class="infoTable_item" :rules="phoneNumberRules" prop="phonenumber">
                <span class="infoTable_item_left">手机号<span style="color: red;">*</span></span>
                <el-input style="width: 400px;" v-model="userdata.phonenumber" placeholder="请输入您的手机"></el-input>
                <!-- 点击后先把他变为禁用状态并开始倒计时，倒计时结束变为正常状态，同时开始倒计时时也开始定时器改变文字效果 -->
                <el-button v-if="clickStatu" class="sendcode" @click="sendverificationcode">获取验证码</el-button>
                <button v-else class="sendcode_disable" ref="disable">60s后重新获取</button>
            </el-form-item>
            <hr>
            <el-form-item class="infoTable_item">
                <span class="infoTable_item_left">验证码<span style="color: red;">*</span></span>
                <el-input style="width: 400px;" v-model="userdata.Verificationcode" placeholder="请输入验证码"></el-input>
            </el-form-item>
        </el-form>
        <div class="joinBtnWrap">
            <el-button class="submit" @click="cancel">取消</el-button>
            <el-button class="submit" @click="submit('userForm')" style="color: aliceblue; background-color: #000;">确定
            </el-button>
        </div>
    </div>
</template>

<script>
import { register, SendverificationCode } from '@/api/register'
export default {
    name: 'register',
    data() {
        const validateUserName = (rule, value, callback) => {
            if (!value) {
                return callback(new Error("用户名不能为空"));
            }
            if (value.length < 4) {
                return callback(new Error("长度不能小于4"));
            }
            if (value.length > 12) {
                return callback(new Error("长度不能大于6"));
            }
            let patten = /\w{4,12}/;
            if (!patten.test(value)) {
                return callback(new Error("内容不合法，请输入数字字母下划线"));
            }
            callback() // 验证通过
        };
        const validatorPassword = (rule, value, callback) => {
            if (!value) {
                return callback(new Error("密码不能为空"));
            }
            if (value.length < 6) {
                return callback(new Error("长度不能小于6"));
            }
            if (value.length > 16) {
                return callback(new Error("长度不能大于16"));
            }
            let patten = /\w{6,16}/;
            if (!patten.test(value)) {
                return callback(new Error("内容不合法，请输入数字字母下划线"));
            }
            callback()
        };
        const validatoremail = (rule, value, callback) => {
            if (!value) {
                return callback(new Error("邮箱不能为空"));
            }
            let patten = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
            if (!patten.test(value)) {
                return callback(new Error("邮箱格式不正确"));
            }
            callback()
        };
        const validatorPhoneNumber = (rule, value, callback) => {
            if (!value) {
                return callback(new Error("手机号不能为空"));
            }
            if (value.length !== 11) {
                return callback(new Error("长度必须为11位"));
            }
            let patten = /\d{6,16}/;
            if (!patten.test(value)) {
                return callback(new Error("请输入11位数字手机号码"));
            }
            callback()
        };
        return {
            // username: '',
            // password: '',
            // email: '',
            // phonenumber: '',
            // Verificationcode: '',
            userdata: {
                username: '',
                password: '',
                email: '',
                phonenumber: '',
                Verificationcode: '',
            },
            usernameRules: {
                validator: validateUserName,
                trigger: 'blur'
            },
            passwordRules: {
                validator: validatorPassword,
                trigger: 'blur'
            },
            emailRules: {
                validator: validatoremail,
                trigger: 'blur'
            },
            phoneNumberRules: {
                validator: validatorPhoneNumber,
                trigger: 'blur'
            },
            clickStatu: true,
        }
    },
    methods: {
        cancel() {
            // 清空注册信息
            this.userdata.username = '',
                this.userdata.password = '',
                this.userdata.email = '',
                this.userdata.Verificationcode = '',
                this.userdata.phonenumber = ''
        },
        submit(str) {
            this.$refs[str].validate((valid) => {
                if (valid) {
                    this.Register();
                }
            })
        },
        Register() {
            let datas = {
                username: this.userdata.username,
                password: this.userdata.password,
                email: this.userdata.email,
                VerificationCode: this.userdata.Verificationcode
            }
            register(datas).then((data) => {
                if (data.code == 200) {
                    this.cancel()
                    alert('注册成功')
                    this.$router.push('/login')
                } else {
                    alert('注册失败')
                }
            }).catch(() => {
                alert('请求失败')
            })
        },
        sendverificationcode() {
            let datas = {
                options: ''
            }
            // 这里要先验证手机号是否符合要求才能发送验证码
            let check = this.userdata.phonenumber.length == 11 && (/^1[34578]\d{9}$/).test(this.userdata.phonenumber)
            if (check) {
                this.codebutton()
                SendverificationCode(datas).then((data) => {
                    console.log('验证码为：', data.data.Code);
                }).catch((data) => {
                    alert('请求失败')
                })
            } else {
                alert('手机号码格式不正确')
            }
        },
        codebutton() {
            this.clickStatu = !this.clickStatu
            let number_down = 59
                let textChange= setInterval(() => {
                    // this.$refs['disable'].innerText = number_down //修改显示的文本内容
                    this.$refs['disable'].innerText =`${number_down}s后重新获取` //修改显示的文本内容
                    number_down--
                }, 1000);
            setTimeout(() => {
                this.clickStatu = !this.clickStatu
                clearInterval(textChange)
            }, 60000);
        }
    }
};
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
}

.register_title {
    text-align: center;
    width: 1240px;
    margin: 0 auto;
    font-size: 36px;
    font-weight: 500;
    height: 120px;
}

.register_prompt {
    width: 1240px;
    margin: 0 auto;
    text-align: center;
}

.register_prompt_top>li {
    display: inline-block;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    line-height: 115px;
}

.register_prompt_bottom {
    p {
        display: inline-block;
    }
}

.must {
    width: 1240px;
    margin: 0 auto;
    text-align: right;
}

.infoTable {
    border-top: 2px black solid;
    border-bottom: 1px black solid;
    width: 1240px;
    margin: 0 auto;
    text-align: center;
}

.register_prompt_top_writeIco {
    // border: 1px solid #000;
    // border-radius: 50%;
    // text-align: center;
    width: 50px;
    height: 50px
}

.couponInfoBox {
    height: 51px;
    background-color: #ff6160;
    line-height: 51px;
}

.joinBtnWrap {
    padding-top: 20px;
    width: 1240px;
    margin: 0 auto;
    text-align: center;
    margin-top: 35px;
}

.submit {
    width: 180px;
    height: 50px;
}

.sendcode {
    width: 100px;
    height: 40px;
    color: #757575;
    margin-left: 20px;
    // cursor: no-drop;// 鼠标禁用指针
    // cursor: default;
}

.sendcode_disable {
    color: rgba(0, 0, 0, 0.25);
    font-size: 12px;
    width: 100px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #d9d9d9;
    background-color: #f5f5f5;
    margin-left: 20px;
    cursor: no-drop; // 鼠标禁用指针

}


.infoTable_item {
    width: 1000px;
    height: 40px;
    padding: 15px 0;
    text-align: left;
}

.infoTable_item_left {
    display: inline-block;
    width: 252px;
    padding-left: 43px;
    text-align: left;
}
</style>