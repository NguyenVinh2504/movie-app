export const setAccessTokenLs = (access_token) => {
    localStorage.setItem('access_token', access_token )
  }

export const getAccessTokenLs = () => {
   return localStorage.getItem('access_token') || ''
  }
export const clearLS = () => {
    localStorage.removeItem('access_token')
  }