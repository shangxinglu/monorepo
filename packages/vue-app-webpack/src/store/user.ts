import { defineStore } from 'pinia'
import { reactive } from 'vue'

const useUserStore = defineStore('user',()=>{
    const userInfo = reactive({
        name: 'vue3',
        age: 18
    })

    const setUserInfo = (name: string, age: number) => {
        userInfo.name = name
        userInfo.age = age
    }

    return {
        userInfo,
        setUserInfo
    }
})

export { useUserStore } 
