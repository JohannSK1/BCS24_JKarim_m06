function oddEvenChecker(num) { 
    if (typeof num !== 'number') {
      console.log('Invalid Input.');
      return;
    }
    
    
    if (num % 2 === 0) {
      console.log('The number is even.');
    } else {
      console.log('The number is odd.');
    };
  };

oddEvenChecker(5); 
oddEvenChecker(10); 
oddEvenChecker("abc")

console.log('  ')
console.log('  ')

function budgetChecker(num) {
    if (typeof num !== 'number') {
      console.log('Invalid Input.');
      return;
    }
    
    if (num > 40000) {
      console.log('You are over the budget.');
    } else {
      console.log('You have resources left.');
    };
  };

budgetChecker(50000); 
budgetChecker(30000); 
budgetChecker("abc");