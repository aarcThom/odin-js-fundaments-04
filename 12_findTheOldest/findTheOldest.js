const findTheOldest = function(people) {

    const orderedPeople = people.sort((a,b) => getAge(a) > getAge(b) ? 1 : -1);
    return orderedPeople.slice(-1)[0];
};

function getAge(person) {
    const endDate = person.yearOfDeath ?? new Date().getFullYear();
    return endDate - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
