<template>
    <div class="login">
      <van-nav-bar title="会员登录" left-arrow  @click-left="$router.back()"/>
      <div class="container">
        <div class="title">
        <h3>手机号登录</h3>
        <p>未注册的手机号登录将自动注册</p>
      </div>
      <div>
        <div class="form-item">
          <input type="text" v-model="mobile" maxlength="11" class="inp" placeholder="请输入手机号">
        </div>
        <div class="form-item">
          <input type="text" v-model="captchaCode" class="inp" maxlength='5' placeholder="请输入图形验证码" >
          <img v-if="picUrl" :src="picUrl" @click="getPicCode">
        </div>
        <div class="form-item">
          <input type="text" maxlength="6" v-model="smsCode"  class="inp" placeholder="请输入短信验证码">
          <button type="button"  @click="getCode">{{second===totalSecond?'获取验证码':second+'s后重发'}}</button>
        </div>
      </div>
      <div>
        <button type="button" class="login-btn" @click="loginFn">登录</button>
      </div>
    </div>
    </div>
</template>

<script>
import { getPicCode, getMsgCode, login } from '@/api/login'
export default {
  name: 'loginIndex',
  data () {
    return {
      captchaCode: '', // 图形验证码
      captchaKey: '', // 图形验证码的 key
      picUrl: '', // 图形验证码图片地址
      totalSecond: 60, // 验证码倒计时总秒数
      second: 60, // 当前倒计时秒数
      timer: null, // 倒计时定时器
      mobile: '', // 手机号
      smsCode: '' // 短信验证码
    }
  },
  async created () {
    // 组件创建时获取图形验证码
    this.getPicCode()
  },
  methods: {
    // 获取图形验证码
    async getPicCode () {
      const { data: { key, base64 } } = await getPicCode()
      this.picUrl = base64
      this.captchaKey = key
      this.$toast('加载成功')
    },
    // 获取短信验证码
    async getCode () {
      // 表单验证
      if (this.validFn() === false) { return false }

      // 判断是否可以发送验证码
      if (this.totalSecond === this.second && !this.timer) {
        // 发送短信验证码请求
        await getMsgCode(this.captchaCode, this.captchaKey, this.mobile)
        this.$toast('短信验证码已发送,请注意查收')

        // 开始倒计时
        this.timer = setInterval(() => {
          this.second--
          if (this.second <= 0) {
            clearInterval(this.timer)
            this.timer = null
            this.second = this.totalSecond
          }
        }, 1000)
      }
    },
    // 表单验证方法
    validFn () {
      // 验证手机号
      if (!/^1[3-9]\d{9}$/.test(this.mobile)) {
        this.$toast('请输入正确的手机号')
        return false
      }
      // 验证图形验证码
      if (!/^\w{4}$/.test(this.captchaCode)) {
        this.$toast('请输入正确的图形验证码')
        return false
      }
      return true
    },
    // 登录方法
    async loginFn () {
      // 表单验证
      if (this.validFn === false) {
        return
      }
      // 验证短信验证码
      if (!/^\d{6}$/.test(this.smsCode)) {
        this.$toast('请输入正确的短信验证码')
        return
      }

      // 发送登录请求
      const res = await login(this.mobile, this.smsCode)
      // 保存用户信息到 Vuex
      this.$store.commit('User/setUserInfo', res.data)
      this.$toast('登录成功')
      // 跳转到首页
      this.$router.push('/')
    }
  },
  destroyed () {
    clearImmediate(this.timer)
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 49px 29px;
  .title{
    margin-bottom: 20px;
    h3{
      font-size: 26px;
      font-weight:normal;
    }
    p{
      font-size: 14px;
      color: #b8b8b8;
      line-height: 40px;
    }
  }
  .form-item{
    border-bottom: 1px solid #f3f1f2;
    margin-bottom: 14px;
    padding: 8px;
    display: flex;
    align-items: center;
    img{
      width: 100px;
      height: 31px;
    }
    .inp{
      border: none;
      display: block;
      outline: none;
      height: 32px;
      font-size:14px;
      flex:1;
    }
    button{
      border:none;
      color: #d97f00;
      height: 31px;
      font-size:13px;
      padding-right: 9px;
      background-color: transparent;
    }
  }
  .login-btn{
    width: 100%;
    height: 42px;
    margin-top: 39px;
    background: linear-gradient(90deg,#ecb53c,#ff9211);
    color: #fff;
    border-radius: 39px;
    box-shadow: 0 10px 20px 0 rgba(0,0,0,.1);
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
