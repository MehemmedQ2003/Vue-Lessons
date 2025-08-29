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
                return "CSS"
            },
            sumOfCounters(count1, count2) {
                return count1 + count2
            }
        },
    }
);

app.mount("#frontend");
