// function in case day/month number is only one digit long
const formatToTwoDigits = (number) => (number < 10 ? `0${number}` : number);

function SetDateString(day, month, year){
    return  `${formatToTwoDigits(day)}.${formatToTwoDigits(month)}.${year}`
}

export default SetDateString;