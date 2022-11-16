import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
        actions:{
        

        },
        mutations:{
            adduser(state,value){
                console.log(value)
                state.person.uid = value.uid
                state.person.wecode = value.wecode
                state.person.pwd = value.pwd
            }
    
        },
        state:{
            person:{
                uid:0,
                wecode:"",
                pwd:""
            }
        }
})