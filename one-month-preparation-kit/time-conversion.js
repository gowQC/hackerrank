let time = "07:05:45PM";

function timeConversion(s) {
  let period = s.charAt(s.length - 2) + s.charAt(s.length - 1);
  let hour = Number(s.charAt(0) + s.charAt(1));
  if (period === "PM") {
    // if hour is 1 through 11 inclusive
    if (hour < 12 && hour > 0) {
      hour += 12;
    }
    return hour + s.slice(2).replace("PM", "");
  } else if (period === "AM") {
    // if hour is = 12
    if (hour === 12) {
      return "00" + s.slice(2).replace("AM", "");
    } else {
      return s.replace("AM", "");
    }
  } else {
    return "invalid time of day";
  }
}

console.log(timeConversion(time));
