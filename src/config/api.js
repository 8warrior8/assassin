const HOST = "http://localhost:8080/server";
const api = {
    // 设置的请求host地址
    HOST,

    // 获取项目更新信息
    GET_UPDATE_INFO: `${HOST}/getUpdateInfo`,

    // 获取登陆信息
    GET_LOGIN_INFO: `${HOST}/getLoginInfo`
}
export default api