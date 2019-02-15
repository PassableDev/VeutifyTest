<template>
  <v-app>
    <v-toolbar color="indigo darken-4" fixed dark app>
      <v-toolbar-title id="appName">Test</v-toolbar-title>
      <v-toolbar-items>
        <v-btn flat>Main Menu</v-btn>
        <v-btn flat>Requests</v-btn>
        <v-btn flat>Schedule</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-title id="appUser">User: {{ firstName + ' ' + lastName }}</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <MainPage></MainPage>
    </v-content>

    <v-footer color="indigo darken-4" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import MainPage from "./views/MainPage";
export default {
  name: "app",
  components: {
    MainPage
  },
  data() {
    return {
      firstName: "John",
      lastName: "Smith"
    };
  }
};
</script>

<style>
#appName {
  font-size: 2rem;
  color: rgb(255, 255, 255);
  padding-right: 30px;
}

#content {
  padding-top: 70px;
}
</style>