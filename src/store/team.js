import createPersistedState from "vuex-persistedstate";
import io from 'socket.io-client';

const authModule = {
    state: {
        team: null,
        rooms: [],
        socket: null,
    },
    mutations: {
        setTeam(state, team) {
            state.team = team
        },
        setRooms(state, rooms) {
            state.rooms = rooms
        }
    },
    actions: {
        setCurrentTeam({ commit, dispatch }, team) {
            commit("setTeam", team)
            dispatch("establishWebsocket")
        },
        setRooms({ commit }, rooms) {
            commit("setRooms", rooms)
        },
        establishWebsocket({state}) {
            const currentTeam = state.team._id
            const socket = io("http://localhost:3000")
            socket.onAny((ev)=>{
                console.log("message received: %s",ev);
                
            })
        }
    },
    plugins: [
    ]
}

export default authModule
