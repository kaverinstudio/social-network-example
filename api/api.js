import * as axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY":"4d26c180-daee-4e93-beff-c81668d96ec3"
    }
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,{
        }).then(response => response.data)

},
    followUser (userId){
        return instance.post(`follow/${userId}`).then(response => response.data)
    },

    unfollowUser (userId){
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/` + userId)
    },
    updateStatus(status){
        return instance.put(`profile/status`, { status: status });
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId)
    }
}

export const authAPI = {
    getMe(){
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false){
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    logout(){
        return instance.delete(`auth/login`)
    },
}


