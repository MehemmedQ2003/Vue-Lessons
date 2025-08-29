const app = Vue.createApp(
    {
        data() {
            return {
                firstGoal: "HTML",
                secondGoal: "<h1>CSS</h1>",
                website: "https://dev.homora.ai/"
            }
        },
        methods: {
            ourGoal() {
                return this.secondGoal
            }
        },
    }
);

app.mount("#frontend");
