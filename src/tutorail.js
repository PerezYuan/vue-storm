const Vue = require('vue');

var app = new Vue({
    // 需要绑定的Vue实例的节点
    el: '#app',
    // data为这个Vue实例中所需要的值
    data: {
        titleStr: 'You loaded this page on ' + new Date(),
        message: 'reverse message',
        seen: false,
        todos: [
            { text: 'list1' },
            { text: 'list2' },
            { text: 'list3' }
        ],
        html: '<p style="color: red">This is a label</p>'
    },
    // 提供的方法
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        },
        addOne: function () {
            this.todos.push({ text: 'list' + (this.todos.length + 1) });
        }
    }
})
// 不建议把事件绑定在外面，可以通过method与@click去处理，这儿只是测试app.seen
var toggleBtn = document.getElementById('toggle');
toggleBtn.onclick = function () {
    app.seen = !app.seen;
}

// 组件需要接收一个props座位父级单向传过来的值
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: "a1", text: 'Vegetables' },
            { id: "b2", text: 'Cheese' },
            { id: "c3", text: 'Whatever else humans are supposed to eat' }
        ]
    }
})

var data = { a: "oldVal" }
var vm = new Vue({
    el: '#example',
    data: data,
    methods: {
        changeA: function () {
            this.a = "newVal";
        }
    },
    filters: {
        capitalize: function (value, arg) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1) + arg
        }
    }
})
vm.$data === data // -> true
vm.$el === document.getElementById('example') // -> true
// $watch 是一个实例方法
vm.$watch('a', function (newVal, oldVal) {
    alert(oldVal + "修改了" + newVal);
})