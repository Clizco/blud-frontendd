const url = "http://localhost:1500/account/delete/plio@gmail.com"
export const getUser = () => {
    const userStr = localStorage.getItem('userData');
    if (userStr) return JSON.parse(userStr);
    else return null;
  }

  export const getToken = () => {
    return localStorage.getItem('token') || null;
  }
  

  export const removeUserSession = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
  

  export const setUserSession = (token, user) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }