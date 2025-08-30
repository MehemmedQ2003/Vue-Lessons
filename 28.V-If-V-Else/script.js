const app = Vue.createApp(
    {
        data() {
            return {
                skills: [
                ],
                skill: "",
            }
        },
        watch: {
        },
        computed: {
        },
        methods: {
            addSkill() {
                this.skills.push(this.skill);
                this.skill = "";
            }
        },
    }
);

app.mount("#frontend");
