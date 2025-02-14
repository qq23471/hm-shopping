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
      captchaCode: captchaCode,
      captchaKey: captchaKey,
      mobile: mobile
    }
  })
}
// 3.登录
export const login = (mobile, smsCode) => {
  return Request.post('/passport/login', {
    form: {
      smsCode: smsCode,
      mobile: mobile,
      isParty: false,
      partyData: {}
    }
  })
}
