import request from './request'

export const login = (userName,password)=>{
    return request({
        url:'/loginUser',
        method:'post',
        data:{
            userName,
            password
        }
    })

}

export const repeatuser = (username)=>{
    return request({
        url:'/checkUserName',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method:'get',
       params:{
        username
       }
    })
}
export const registerUser = (userName,password)=>{
    return request({
        url:'/regUser',
        method:'post',
        data:{
            userName,
            password,
        }
    })
}
export const logoutUser = ()=>{
    return request({
        url:'/logoutUser',
        method:'post',
        headers: { // 设置请求头
            token: localStorage.getItem("token")
        }
    })
}
export const checkPassword = (password)=>{
    return request({
        url:'/checkPassword',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            token: localStorage.getItem("token")
        },
        method:'post',
       params:{
        password
       }
    })
}
export const updatePassword = (password)=>{
    return request({
        url:'/updatePassword',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            token: localStorage.getItem("token")
        },
        method:'post',
       params:{
        password
       }
    })
}
export const authToken = ()=>{
    return request({
        url:'/authToken',
        headers: {
            token: localStorage.getItem("token")
        },
        method:'get',
    })
}