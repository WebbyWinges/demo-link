import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "ce384cc2-30fc-4843-ac4a-1d597e662636"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    unfollowed(id = 1) {
        return instance.delete(`/follow/${id}`)
            .then(response => response.data);
    },
    followed(id = 1) {
        return instance.post(`/follow/${id}`, {})
            .then(response => response.data);
    },
    getProfile(userId ) {
        console.warn('Obsolete methodd. Please profileAPI object')
        return profileAPI.getProfile(userId);
    }
};

export const profileAPI = {
    getProfile(userId ) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`/profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`/profile/status/`, { status:status })
    },
} 
export const authAPI = {
    me() {
        return instance.get(`/auth/me`)
            .then(response => response.data);
    },
    login(email, password, rememberMe = false ) {
        return instance.post(`auth/login/`, {email, password, rememberMe})
            .then(response => response.data);
    },
    logout( ) {
        return instance.delete(`auth/login/`)
            
    },
} 






