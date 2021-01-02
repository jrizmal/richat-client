import createPersistedState from "vuex-persistedstate";

const authModule = {
    state: {
        team: null,
        rooms: [],
    },
    mutations: {
        setTeam(state,team){
            state.team = team
        },
        setRooms(state,rooms){
            state.rooms = rooms
        }
    },
    actions: {
        setCurrentTeam({commit},team){
            commit("setTeam",team)
        },
        setRooms({commit},rooms){
            commit("setRooms",rooms)
        },
    },
    plugins: [
    ]
}

export default authModule
