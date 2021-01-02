<template>
  <b-row>
    <b-col v-if="room">
        <b-row>
            <b-col>
                <h3>{{ room.name }}</h3>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <p>Chat</p>
            </b-col>
        </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    room: {
      type: Object,
      
    },
  },
  watch: {
      room: {
          deep:true,
          handler(room, oldRoom){
              console.log(room);
          }
      }
  }
};
</script>

<style>
</style>