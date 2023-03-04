const BASE_API_URL = "https://rickandmortyapi.com/api/character/";

const app = new Vue({
    el: "#app",
    data: {
        users: [],
        // localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : ,
    },
    methods: {
        deleteBtnHandler: function (index) {
            this.users.splice(index, 1);
            localStorage.setItem('users', JSON.stringify(this.users));
        },
    },
    created: function() {
        if (localStorage.getItem('users')) {
            this.users = JSON.parse(localStorage.getItem('users'));
            console.log(this.users);
        } else {
            fetch(BASE_API_URL + "?page=1")
            .then((response) => response.json())
            .then((data) => { 
                localStorage.setItem('users', JSON.stringify(data.results))
            });
        }
    }
    
});