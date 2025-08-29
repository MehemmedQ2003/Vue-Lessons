const app = Vue.createApp(
    {
        data() {
            return {
                counter: 0,
                name: "",
            }
        },
        methods: {
            reset() {
                this.name = ""
            },
            setName(event) {
                this.name = event.target.value;
            },
            increase(num) {
                this.counter += num;
            },
            decrease(num) {
                this.counter -= num;
            },
        }
    }
);

app.mount("#frontend");
