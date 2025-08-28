const app = Vue.createApp(
    {
        data() {
            return {
                message: "HTML",
                website: "https://dev.homora.ai/"
            }
        },
        methods: {
            ourGoal() {
                return "Learn Vue js"
            }
        },
    }
);

app.mount("#frontend");
