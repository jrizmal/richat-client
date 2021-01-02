import Vue from 'vue'
const firebase = require('firebase').default
const axios = require("axios").default
import createPersistedState from "vuex-persistedstate";



const authModule = {
    state: {
        isLoggedIn: false,
        token: null,
        user: {
            email: null,
            displayName: null,
            photoURL: null,
        }
    },
    mutations: {
        setLoggedIn(state, { user, token }) {
            state.token = token
            state.user = {
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL
            }
            state.isLoggedIn = true
        },
        setLoggedOut(state) {
            state.isLoggedIn = false
            state.token = null
            state.user = {
                email: null,
                displayName: null,
                photoURL: null,
            }
        }
    },
    actions: {
        googleLogin({ commit }) {
            var provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
                .then(async (result) => {
                    var credential = result.credential;
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    // The signed-in user info.
                    var user = result.user;
                    const token = await user.getIdToken()

                    axios.defaults.headers.common["Authorization"] = token

                    commit("setLoggedIn", {
                        user: user,
                        token: token
                    })
                }).catch((error) => {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;

                });
        },
        logout({ commit }) {
            commit("setLoggedOut")
        }
    },
    plugins: [
        createPersistedState({
            rehydrated: function ({ state }) {
                axios.defaults.headers.common['Authorization'] = state.token
            }
        }),
    ]
}

export default authModule
