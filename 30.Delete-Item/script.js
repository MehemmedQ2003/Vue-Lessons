const app = Vue.createApp(
    {
        data() {
            return {
                skills: [
                ],
                skill: "",
            }
        },
        watch: {},
        computed: {},
        methods: {
            addSkill() {
                this.skills.push(this.skill);
                this.skill = "";
            },
            deleteSkill(index) {
                this.skills.splice(index, 1);
            },
        },
    }
);

app.mount("#frontend");
