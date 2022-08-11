import axios from "axios"

export default {
    name: "user",
    namespaced: true,
    actions: {
        login(store, data) {

            axios({
                url: 'http://192.168.205.58:3000/user/login',
                method: "POST",
                data: {
                    ...data
                }

            }).then(res => {

                let data = res.data
                store.commit('settoken', data.token)
            })


        }
    },
    mutations: {
        settoken(state, data) {
            state.token = data

        }
    },
    state: {
        token: "",
    }
}