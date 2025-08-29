const app = Vue.createApp(
    {
        data() {
            return {
                firstBox: false,
                secondBox: false,
                thirdBox: false
            }
        },
        watch: {

        },
        computed: {
            boxOneSelected() {
                return { selectedFirst: this.firstBox }
            },
            boxTwoSelected() {
                return { selectedSecond: this.secondBox }
            },
            boxThreeSelected() {
                return { selectedThird: this.thirdBox }
            }
        },
        methods: {
            chooseBox(number) {
                if (number === '1') {
                    this.firstBox = !this.firstBox
                }
                else if (number === '2') {
                    this.secondBox = !this.secondBox
                }
                else if (number === '3') {
                    this.thirdBox = !this.thirdBox
                }
            }
        },
    }
);

app.mount("#frontend");
