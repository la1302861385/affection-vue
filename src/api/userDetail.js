import request from './request'
export const listUserDetails = ()=>{
    return request({
        url:'/listUserDetails',
        method:'get',
        headers: {
            token: localStorage.getItem("token")
        },
    })
}
export const updateUserDetail = (userDetail)=>{
    return request({
        url:'/updateUserDetail',
        method:'post',
        headers: {
            token: localStorage.getItem("token")
        },
      data:{
        nickName:userDetail.nickName,
        workPlace:JSON.stringify(userDetail.workPlace),
        income:userDetail.income,
        height:userDetail.height,
        education:userDetail.education,
        sex:userDetail.sex,
        isMarry:userDetail.isMarry,
        birthday:userDetail.birthday
      }
    })
}
export const getUserDetail = ()=>{
    return request({
        url:'/getUserDetail',
        method:'get',
        headers: {
            token: localStorage.getItem("token")
        },
    })
}