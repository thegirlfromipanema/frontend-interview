Vue.component('agent-dropdown', {
  template: document.getElementById('dropdown').innerHTML,
  data() {
    return {
      value: [],
      options: [{
        type: "team",
        name: "Manage",
        id: 1234
      }, {
        type: "team",
        name: "Traig",
        id: 1235
      }, {
        type: "team",
        name: "Mantain",
        id: 1236
      }, {
        type: "team",
        name: "Test",
        id: 1237
      }]
    }
  }
});

var app = new Vue({
  el: "#app"
});

