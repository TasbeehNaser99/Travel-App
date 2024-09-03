import { calculateTripLength } from "../app.js";

test('calculateTripLength should return the correct number of days between the dates', () => {
    const duration = calculateTripLength('2024-08-28' , '2024-08-31');
    expect(duration).toBe(2);
})
