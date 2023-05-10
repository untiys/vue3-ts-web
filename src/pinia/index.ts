import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  // 所有数据持久化
  persist: false,
  // 部分数据持久化
  // persist: [
  // 默认是localstorage
  //   storage: window.sessionStorage,
      // userInfo:item
  // ],
  state: () => ({ count: 0 ,age: 0}),
  actions: {
    // 同步方法
    increment() {
      this.count++
    },
    // 异步方法
    setAge(age:number):void{
      setTimeout(() => {
        this.age = age
      },1000)
    }
  },
})



