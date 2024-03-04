import axios from "axios"

//cosnt data = {
//   "statusCode": 422,
//   "data": {
//        name: 'EXPIRED_TOKEN',
//        message: 'Token hết hạn'
//    },
// }

// const data = {
//   statusCode: 422,
//   data: 'Token không được gửi'
// }

export function isAxiosUnauthorizedError(error) {
  return axios.isAxiosError(error) && error.response?.status === 401
}

export function isAxiosExpiredTokenError(error) {
  return axios.isAxiosError(error) && isAxiosUnauthorizedError(error) && error.response?.data?.data?.name === 'EXPIRED_TOKEN'
}