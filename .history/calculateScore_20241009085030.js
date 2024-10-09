const fs = require('fs');

const employeeData =
{
    enjoys_job: "yes",
    respected_by_managers: "no",
    good_for_carers: "yes",
    contracted_hours: 20,
    hours_actually_worked: 34,
    unpaid_extra_work: "unsure",
    age: 26,
    hourly_rate: "£8.22",
    submitted_date: 1608211454000
  }

const calculateScore = (employee) => {
    
    let score = 0 
    let sumOfQuestions = 0

   if (employee.enjoys_job === "yes") {
    score ++;
   }; 
   sumOfQuestions ++;

   if (employee.respected_by_managers  === "yes") {
    score ++;
   }; 
   sumOfQuestions ++;

    if (employee.good_for_carers === "yes") {
     score ++;
    };
    sumOfQuestions ++;

    if (employee.hours_actually_worked - employee.contracted_hours <= 8) {
        score ++;
        sumOfQuestions ++;
    }

    if (employee.unpaid_extra_work === "no") {
        score ++;
    }
    sumOfQuestions ++;

    if (employee.hourly_rate.replace("£", "") >= 8.22) {
        score ++;
    }
    sumOfQuestions ++;
    
    console.log(`Score is ${score}/${sumOfQuestions}`);

    return( score , sumOfQuestions);



}

const readFileAnswers = () => {
    fs.readFile('answers.json', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        const answers = JSON.parse(data);
        calculateScore(answers); 
    });
}

const main = () => {
    readFileAnswers();
    // calculateScore (employeeData); 
}

main();
