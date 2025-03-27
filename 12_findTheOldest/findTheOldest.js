const findTheOldest = function (arr) {
  arr.sort((a, b) => {
    let ageA, ageB;

    ageA = checkAge(a);
    ageB = checkAge(b);

    return ageB - ageA;
  });

  return arr[0];
};

function checkAge(obj) {
  let age;

  let year  = new Date();
  year = year.getFullYear();

  if (Object.hasOwn(obj, "yearOfDeath")) {
    age = obj.yearOfDeath - obj.yearOfBirth;
  } else {
    age = year - obj.yearOfBirth;
  }

  return age;
}

// Do not edit below this line
module.exports = findTheOldest;
