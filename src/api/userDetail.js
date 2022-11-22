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
export const addInfoDetail = (infoDetail)=>{
    return request({
        url:'/updateDetailInformation',
        method:'post',
        headers: {
            token: localStorage.getItem("token")
        },
      data:{
        nativePlace:JSON.stringify(infoDetail.nativePlace),
        shape:infoDetail.shape,
        constellation:infoDetail.constellation,
        nation:infoDetail.nation,
        isHaveChild:infoDetail.isHaveChild,
        isWantChild:infoDetail.isWantChild,
        whenMarry:infoDetail.whenMarry,
        weight:infoDetail.weight
      }
    })
}
export const getInfoDetail = ()=>{
    return request({
        url:'/getDetailInformation',
        method:'get',
        headers: {
            token: localStorage.getItem("token")
        },
    })
}