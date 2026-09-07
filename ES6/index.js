import Student from "./model/Student.js";
import readline from "readline/promises";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main() {
    const student1 = new Student("Minh", 20, [8, 7.5, 9]);
    const student2 = new Student("Long", 21, [6.5, 8, 7]);
    const student3 = new Student("Dương", 20, [9, 9.5, 8.5]);
    const data = [student1, student2, student3];

    let choice;
    while (choice !== "0") {
        try {
            displayMenu();
            choice = await rl.question("Enter your choice (0 to exit): ");
            switch (choice) {
                case "1":
                    data.forEach(student => {
                        student.introduce();
                    });
                    break;
                case "2":
                    const name = await rl.question("Enter student name: ");
                    const foundData = data.find((s) => s.name === name);
                    const score = await rl.question(`Enter score(Split by ","): `);
                    const scores = score.split(",").map((i) => parseFloat(i));
                    foundData.createScore(...scores);
                    break;
                case "3":
                    data.forEach(student => {
                        student.avgScore();
                    });
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }
    rl.close();
}

function displayMenu() {
    console.log("1. Display student information");
    console.log("2. Add score for student");
    console.log("3. Calculate average score for student");
}

main();