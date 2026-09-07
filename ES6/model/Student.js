import Person from "./Person.js";

export default class Student extends Person {
    score;
    constructor(name, age, score) {
        super(name, age);
        this.score = score;
    }

    avgScore() {
        const total = this.score.reduce((a, b) => a + b, 0);
        const avg = total / this.score.length;
        console.log(`Name: ${this.name}\nAge: ${this.age}\nAverage Score: ${avg.toFixed(2)}\nPerformance: ${avg >= 8 ? "Excellent" : "Need Improvement"}\n`);
        return;
    }

    createScore(...score) {
        try {
            this.score = [...this.score, ...score];
        }
        catch (e) {
            console.log(e);
        }
    }
}