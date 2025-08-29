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
            },
            changeMessage() {
                if (this.counter < 25) {
                    return this.message = "Less than 25";
                }
                else if (this.counter == 25) {
                    return this.message = "Equal to 25";
                }
                else {
                    return this.message = "Greater than 25";
                }
            }
        }
    }
);

app.mount("#frontend");
