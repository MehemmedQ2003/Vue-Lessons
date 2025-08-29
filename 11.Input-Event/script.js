const app = Vue.createApp(
    {
        data() {
            return {
                counter: 0,
                name: "",
            }
        },
        methods: {
            setName(event, lastName) {
                this.name = event.target.value + " " + lastName;
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
