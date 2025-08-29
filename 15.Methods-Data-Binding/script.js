const app = Vue.createApp(
    {
        data() {
            return {
                counter: 0,
                name: "",
            }
        },
        methods: {
            fullName() {
                if (this.name == "") {
                    return ""
                }
                return this.name + " " + "Gardashov"
            },
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
