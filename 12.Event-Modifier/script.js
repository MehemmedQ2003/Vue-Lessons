const app = Vue.createApp(
    {
        data() {
            return {
                counter: 0,
            }
        },
        methods: {

            login() {
                alert("Login");
            },
            increase(num) {
                this.counter += num;
            },
            decrease(num) {
                this.counter -= num;
            }
        }
    }
);

app.mount("#frontend");
