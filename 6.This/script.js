const app = Vue.createApp(
    {
        data() {
            return {
                firstGoal: "HTML",
                secondGoal: "CSS",
                count1: 10,
                count2: 20,
                website: "https://dev.homora.ai/"
            }
        },
        methods: {
            ourGoal() {
                return this.secondGoal
            },
            sumOfCounters() {
                return this.count1 + this.count2
            }
        },
    }
);

app.mount("#frontend");
