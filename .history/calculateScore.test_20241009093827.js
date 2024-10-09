const { calculateScore } = require('./calculateScore'); 

describe('calculateScore', () => {
  test('should calculate correct score for all positive answers', () => {
    const employee = {
      enjoys_job: 'yes',
      respected_by_managers: 'yes',
      good_for_carers: 'yes',
      hours_actually_worked: 40,
      contracted_hours: 38,
      unpaid_extra_work: 'no',
      hourly_rate: '£10.50'
    };

    const result = calculateScore(employee);
    expect(result).toEqual({ score: 6, sumOfQuestions: 6 });
  });

  test('should handle mixed answers correctly', () => {
    const employee = {
      enjoys_job: 'yes',
      respected_by_managers: 'no',
      good_for_carers: 'yes',
      hours_actually_worked: 44,
      contracted_hours: 38,
      unpaid_extra_work: 'no',
      hourly_rate: '£9.00'
    };

    const result = calculateScore(employee);
    expect(result).toEqual({ score: 4, sumOfQuestions: 6 });
  });

  test('should handle edge case for hours worked', () => {
    const employee = {
      enjoys_job: 'yes',
      respected_by_managers: 'yes',
      good_for_carers: 'yes',
      hours_actually_worked: 46,
      contracted_hours: 38,
      unpaid_extra_work: 'no',
      hourly_rate: '£10.00'
    };

    const result = calculateScore(employee);
    expect(result).toEqual({ score: 5, sumOfQuestions: 6 });
  });

  test('should handle edge case for hourly rate', () => {
    const employee = {
      enjoys_job: 'yes',
      respected_by_managers: 'yes',
      good_for_carers: 'yes',
      hours_actually_worked: 40,
      contracted_hours: 38,
      unpaid_extra_work: 'no',
      hourly_rate: '£8.22'
    };

    const result = calculateScore(employee);
    expect(result).toEqual({ score: 6, sumOfQuestions: 6 });
  });
});
