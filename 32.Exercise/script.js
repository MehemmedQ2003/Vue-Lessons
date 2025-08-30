const app = Vue.createApp(
    {
        data() {
            return {
                enteredTask: "",
                tasks: [],
                isVisible: true
            }
        },
        watch: {},
        computed: {},
        methods: {
            addTask() {
                if (this.enteredTask === "") {
                    return
                };
                this.tasks.push(this.enteredTask);
                this.enteredTask = "";
            },
            toggleTask() {
                this.isVisible = !this.isVisible
            }
        },
    }
);

app.mount("#frontend");
