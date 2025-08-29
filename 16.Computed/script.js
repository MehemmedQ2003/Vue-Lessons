const app = Vue.createApp(
    {
        data() {
            return {
                counter: 0,
                name: "",
            }
        },
        computed: {
            fullNameComputed() {
                console.log("Computed called");
                if (this.name == "") {
                    return ""
                }
                return this.name + " " + "Gardashov"
            }            
        },
        methods: {
            fullName() {
                console.log("Method called");
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
