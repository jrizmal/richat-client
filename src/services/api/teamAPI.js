const axios = require("axios").default

module.exports.getMyTeams = () => {
    return axios.get("/teams/my")
}

module.exports.getRooms = (teamId) => {
    return axios.get(`/teams/${teamId}/rooms`)
}

module.exports.addRoom = (teamId, roomName) => {
    return axios.post(`/teams/${teamId}/rooms/add`, { room_name: roomName })
}