<template>
  <b-row>
    <b-col cols="2">
      <b-row>
        <b-col>
          <h1>Kul ekipa</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <ul>
            <li v-for="room in rooms" :key="room._id" @click="switchRoom(room)" class="cursor-pointer">{{ room.name }}</li>
          </ul>
          <b-input v-model="newRoomName"></b-input>
          <b-button variant="primary" @click="addRoom" block
            >Dodaj sobo</b-button
          >
          <b-button @click="logout" block>Odjava</b-button>
        </b-col>
      </b-row>
    </b-col>
    <b-col>
      
      <b-row>
        <b-col>
          <room-chat :room="selectedRoom">

          </room-chat>
        </b-col>
      </b-row>

      <!-- <b-row>
        <b-col>
          <b-row v-for="(msg, index) in messages" :key="index">
            <b-col>
              <b-badge variant="success" v-if="msg.sender == senderName">{{
                msg.sender
              }}</b-badge
              ><b-badge v-else>{{ msg.sender }}</b-badge> {{ msg.message }}
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-input placeholder="Message" v-model="message"> </b-form-input>
        </b-col>
        <b-col>
          <b-button @click="sendMessage" variant="primary"> Send </b-button>
        </b-col>
      </b-row> -->
    </b-col>
  </b-row>
</template>

<script>
const { getMyTeams, getRooms, addRoom } = require("../services/api/teamAPI");
import RoomChat from '../components/RoomChat.vue'
export default {
  components: {
    "room-chat": RoomChat,
  },
  data() {
    return {
      /* connection: null,
      connected: false,
      message: null,
      messages: [],
      senderName: null, */
      newRoomName: null,
      selectedRoom: null,
    };
  },
  methods: {
    addRoom() {
      console.log(this.$store.state.team.team._id);
      addRoom(this.$store.state.team.team._id, this.newRoomName).then((res) => {
        getRooms(this.$store.state.team.team._id).then((res) => {
          console.log(res.data);
          this.newRoomName=null
          this.$store.dispatch("setRooms", res.data);
        });
      });
    },
    switchRoom(room){
      this.selectedRoom = room
    },
    /* sendMessage() {
      const payload = {
        message: this.message,
        sender: this.senderName,
      };
      this.connection.send(JSON.stringify(payload));
      this.message = null;
    },
    messageReceived(data) {
      this.messages.push(data);
    }, */
    logout() {
      this.$store.dispatch("logout");
    },
  },
  computed: {
    rooms() {
      return this.$store.state.team.rooms;
    },
  },
  mounted() {
    // Connect to websocket
    /* const conn = new WebSocket("wss://ws-chat-api.herokuapp.com/");
    conn.onopen = (event) => {
      console.log("connected");
      this.connection = conn;
      this.connected = true;
    };
    conn.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      this.messageReceived(msg);
    }; */
    getMyTeams().then((res) => {
      console.log(res.data);
      this.$store.dispatch("setCurrentTeam", res.data[0]);
      getRooms(res.data[0]._id).then((res) => {
        console.log(res.data);
        this.$store.dispatch("setRooms", res.data);
        this.selectedRoom = res.data[0]
      });
    });
  },
};
</script>

<style scoped>
.cursor-pointer{
  cursor: pointer;
}
</style>
