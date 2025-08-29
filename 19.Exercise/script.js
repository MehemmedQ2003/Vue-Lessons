const app = Vue.createApp(
    {
        data() {
            return {
                counter: 0,
                message: "",
            }
        },
        computed: {
            result() {
                return this.counter > 25 ? "Greater than 25" : (this.counter === 25 ? "Equal to 25" : "Less than 25");
            }
        },
        methods: {
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
