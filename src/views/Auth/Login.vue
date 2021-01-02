<template>
  <b-row>
      <b-col>
          <b-row>
              <b-col>
                  <h1>Prijava</h1>
                  <p>Pred uporabo se prijavite</p>
              </b-col>
          </b-row>
          <b-row>
              <b-col>
                  <b-button @click="googleLogin" variant="success">Google prijava</b-button>
              </b-col>
          </b-row>
      </b-col>
  </b-row>
</template>

<script>
export default {
    methods: {
        googleLogin(){
            this.$store.dispatch("googleLogin")
        }
    }
}
</script>

<style>

</style>