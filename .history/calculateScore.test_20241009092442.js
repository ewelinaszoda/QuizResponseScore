const fs = require('fs');
const { calculateScore, readFileAnswers } = require('./calculateScore');

jest.mock('fs');

const employeeDataWithThreeScore = {
    enjoys_job: "yes",
    respected_by_managers: "no",
    good_for_carers: "yes",
    contracted_hours: 20,
    hours_actually_worked: 34,
    unpaid_extra_work: "unsure",
    age: 26,
    hourly_rate: "£8.22",
    submitted_date: 1608211454000
};

const employeeDataWithFourScore = {
    enjoys_job: "yes",
    respected_by_managers: "yes",
    good_for_carers: "yes",
    contracted_hours: 20,
    hours_actually_worked: 30,
    unpaid_extra_work: "no",
    age: 22,
    hourly_rate: "£8.00",
    submitted_date: 1608211454000
};

describe('calculateScore', () => {    
    test('should return a score of 3 when "enjoys_job", "good_for_carers", and "hourly_rate" meet the conditions', () => {
        const result = calculateScore(employeeDataWithThreeScore);

         expect(result.score).toBe(3);  
        expect(result.sumOfQuestions).toBe(6); 
    });
    test('should give no score if the employee doesn’t meet any condition', () => {
        const employee = {
            enjoys_job: "no",
            respected_by_managers: "no",
            good_for_carers: "no",
            contracted_hours: 40,
            hours_actually_worked: 50,
            unpaid_extra_work: "yes",
            age: 22,
            hourly_rate: "£7.00",
            submitted_date: 1608211454000
        };

        const result = calculateScore(employee);
        expect(result.score).toBe(0);  // No conditions met
        expect(result.sumOfQuestions).toBe(6);  // Total number of questions
    });
});
