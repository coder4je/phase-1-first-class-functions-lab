// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = drivers => drivers.slice(0,2)



const returnLastTwoDrivers = drivers => drivers.slice(-2)


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier, num) {
    return multiplier = num => num + num *4
}

const fareDoubler = num => num * 2 
const fareTripler = num => num * 3 

function selectDifferentDrivers(drivers, oneOfTwo) {
    return oneOfTwo === returnFirstTwoDrivers ? returnFirstTwoDrivers(drivers) : returnLastTwoDrivers(drivers)
}