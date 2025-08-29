const app = Vue.createApp(
    {
        data() {
            return {
                counter: 0,
                name: "",
                fullName: "",
                lastName: "",
            }
        },
        watch: {
            name(value) {
                if (value == "") {
                    this.fullName = ""
                }
                else {
                    this.fullName = value + " " + this.lastName
                }
            },
            lastName(value) {
                if (value == "") {
                    this.fullName = ""
                }
                else {
                    this.fullName = this.name + " " + value
                }
            }
        },
        computed: {
            fullNameComputed() {
                console.log("Computed called");
                if (this.name == "" || this.lastName == "") {
                    return ""
                }
                return this.name + " " + this.lastName
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
