var app = new Vue({
    el: '#app',
    data:{
        one: 'testing'
    },
    methods:{
        change: function(){
            this.one = this.one == 'testing again' ? 'testing' : 'testing again';
        }
    }
});