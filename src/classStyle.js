const Vue = require('vue');

var vm = new Vue({
    el: "#example",
    data: {
        isActive: true,
        hasError: true,
        classObject: {
            active: true,
            'text-danger': false
        }
    }
})