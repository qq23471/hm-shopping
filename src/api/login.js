// 此处用于存放所有登录相关的接口请求
import Request from '@/utils/request'

// 1.获取图形验证码
export const getPicCode = () => {
  return Request.get('/captcha/image')
}

// 2.获取短信验证码
export const getMsgCode = (captchaCode, captchaKey, mobile) => {
  return Request.post('/captcha/sendSmsCaptcha', {
    form: {
      captchaCode: captchaCode, // 图形验证码
      captchaKey: captchaKey, // 图形验证码 key
      mobile: mobile // 手机号
    }
  })
}

// 3.登录
export const login = (mobile, smsCode) => {
  return Request.post('/passport/login', {
    form: {
      smsCode: smsCode, // 短信验证码
      mobile: mobile, // 手机号
      isParty: false, // 是否第三方登录
      partyData: {} // 第三方登录数据
    }
  })
}
