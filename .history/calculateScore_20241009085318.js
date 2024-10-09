const fs = require('fs');

filename = 'answers.json'

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

const readFileAnswers = (filename) => {
    fs.readFile(filename, (err, data) => {
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
}

main();
