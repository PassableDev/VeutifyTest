<template>
  <v-container fluid>
    <v-layout id="calendarNav" row wrap align-center>
      <v-flex xs6>
        <h1>This Title</h1>
      </v-flex>
      <v-flex xs2 class="text-sm-left text-xs-center" style="height=15%;">
        <v-btn @click="$refs.calendar.prev()">Prev</v-btn>
      </v-flex>
      <v-flex xs2 class="text-xs-center">
        <v-select v-model="type" :items="typeOptions" label="View Type"></v-select>
      </v-flex>
      <v-flex xs2 class="text-sm-right text-xs-center">
        <v-btn @click="$refs.calendar.next()">Next</v-btn>
      </v-flex>
    </v-layout>
    <hr class="mb-1">

    <v-layout id="calendarComp">
      <v-flex xs10 class="mb-3">
        <v-sheet height="650">
          <v-calendar ref="calendar" v-model="start" :type="type" :end="end" color="primary">
            <template slot="day" slot-scope="{ date }">
              <v-layout align-end row>
                <v-flex>test</v-flex>
              </v-layout>
              <template v-for="event in eventsMap[date]">
                <v-menu :key="event.title" v-model="event.open" full-width offset-x>
                  <div
                    v-if="!event.time"
                    slot="activator"
                    v-ripple
                    class="my-event"
                    v-html="event.title"
                  ></div>
                  <v-card color="grey lighten-4" min-width="350px" flat>
                    <v-toolbar color="primary" dark>
                      <v-btn flat>edit</v-btn>
                      <v-toolbar-title v-html="event.title"></v-toolbar-title>
                    </v-toolbar>
                    <v-card-title primary-title>
                      <span v-html="event.details"></span>
                    </v-card-title>
                    <v-card-actions>
                      <v-btn flat>Cancel</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-menu>
              </template>
              
            </template>
          </v-calendar>
        </v-sheet>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      type: "month",
      start: "2019-02-03",
      end: "2019-02-06",
      typeOptions: [
        { text: "Day", value: "day" },
        { text: "Week", value: "week" },
        { text: "Month", value: "month" }
      ],
      events: [
        {
          title: "Vacation",
          details: "Going to the beach!",
          date: "2018-12-30",
          open: false
        },
        {
          title: "Vacation",
          details: "Going to the beach!",
          date: "2018-12-31",
          open: false
        },
        {
          title: "Vacation",
          details: "Going to the beach!",
          date: "2019-01-01",
          open: false
        },
        {
          title: "Meeting",
          details: "Spending time on how we do not have enough time",
          date: "2019-01-07",
          open: false
        },
        {
          title: "30th Birthday",
          details: "Celebrate responsibly",
          date: "2019-01-03",
          open: false
        },
        {
          title: "New Year",
          details: "Eat chocolate until you pass out",
          date: "2019-01-01",
          open: false
        },
        {
          title: "Conference",
          details:
            "Mute myself the whole time and wonder why I am on this call",
          date: "2019-01-21",
          open: false
        },
        {
          title: "Hackathon",
          details: "Code like there is no tommorrow",
          date: "2019-02-01",
          open: false
        }
      ]
    };
  },
  props: {
    source: String
  },
  computed: {
    // convert the list of events into a map of lists keyed by date
    eventsMap() {
      const map = {};
      this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e));
      return map;
    }
  },
  methods: {
    open(event) {
      alert(event.title);
    }
  }
};
</script>

<style>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  width: 100%;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
}
</style>
