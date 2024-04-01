#! /usr/bin/env node
import inquirer from "inquirer";

// Asking Question through Inquirer

const answers = await inquirer.prompt([
    {message: "Enter First Number", type: "number", name: "firstname"},
    {message: "Enter Second Number", type: "number", name: "secondName"},
    {
        message: "Select one Operator to perform Operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtractions", "Multiplication", "Division"],
    },
]);

// Conditional Statement If-Else
if (answers.operator === "Addition"){
console.log(answers.firstname + answers.secondName)
}

else if (answers.operator === "Subtractions"){
    console.log(answers.firstname - answers.secondName)
}

else if (answers.operator === "Multiplication"){
    console.log(answers.firstname * answers.secondName)
}

else if (answers.operator === "Division"){
    console.log(answers.firstname / answers.secondName)
}
else {
    console.log("Invalid Input")
}