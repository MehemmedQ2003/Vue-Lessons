const app = Vue.createApp(
    {
        data() {
            return {
                counter: 0
            }
        },
        methods: {
            increase() {
                this.counter++;
            },
            decrease() {
                this.counter--;
            }
        }
    }
);

app.mount("#frontend");
