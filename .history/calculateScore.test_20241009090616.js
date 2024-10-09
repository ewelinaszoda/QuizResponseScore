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

describe('calculateScore', () => {    
    test('should return a score of 3 when "enjoys_job", "good_for_carers", and "hourly_rate" meet the conditions')
    const result = calculateScore(employeeDataWithThreeScore);

    // Expectations
    expect(result.score).toBe(3);  // The expected score based on the conditions
    expect(result.sumOfQuestions).toBe(6);  // Total number of questions

})
