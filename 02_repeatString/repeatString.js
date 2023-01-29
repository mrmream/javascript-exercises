const repeatString = function(str, num) {
        let repeatedString = "";
        if (num < 0) {
            return "ERROR";}
        for (let i = 0; i < num; i++) {
          repeatedString += str;
        }
        return repeatedString;
      };

      repeatString("", 10)

// Do not edit below this line
module.exports = repeatString;
