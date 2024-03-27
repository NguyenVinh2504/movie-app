export const setAccessTokenLs = (access_token) => {
  localStorage.setItem('access_token', access_token)
}

export const setRefreshTokenLs = (refresh_token) => {
  localStorage.setItem('refresh_token', refresh_token)
}

export const getAccessTokenLs = () => {
  return localStorage.getItem('access_token') || ''
}
export const getRefreshTokenLs = () => {
  return localStorage.getItem('refresh_token') || ''
}
export const clearLS = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
}