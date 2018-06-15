(function(window){
var validator = {};


validator.isEmailAddress = function(input) {

  var at = input.indexOf("@");
  var str1 = input.substr(0, at);
  var str2 = input.substr(at+1);
  var symbol = input.substr(at, at-2);
  var symbolToSymbol = Symbol(symbol);
    
  if (input.indexOf("@") > -1 && input.indexOf(".") > -1 && str1 && str2) {
    return true;
  }
  else {
    return false;
  }
};


validator.isPhoneNumber = function(input) {
  var split = input.split("-");
  
    if (input.length === 10) {
      return true;
    }
    else if (split.length === 1) {
        return false;
     }
    else if (input.length !== 10) {
      if (split[0].length + split[1].length + split[2].length !== 10 ) {
        return false;
      }
      else if (split[0].length + split[1].length + split[2].length === 10 ) {
        return true;
      }
    }   
};
  


validator.withoutSymbols = function(input) {
  var symbols = [" ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
  var matches = [];
  var i = 0;

  for (i in input) {
    if (symbols.indexOf(input[i]) > -1) {
       matches.push(input[i]);
    }
  }

  var newStr = matches.toString();
  var char = "";
  var finalStr = newStr.split(',').join(char);
  console.log(finalStr);
};


validator.isDate = function(input) {
  var date = Date.parse(input);

  if (date > 0) {
    return true;
  }
  else {
    return false;
  }
};


validator.isBefore = function(input, reference) {
  var inputParse = Date.parse(input),
      referenceParse = Date.parse(reference);
  
  if (inputParse > referenceParse) {
    console.log(true);
  }
  else {
    console.log(false);
  }

};


validator.isAfter = function(input, reference) {
  var inputParse = Date.parse(input),
      referenceParse = Date.parse(reference);
  
  if (inputParse < referenceParse) {
    console.log(true);
  }
  else {
    console.log(false);
  }

};


validator.isBeforeToday = function(input) {
  
  var d = new Date(),
    dParse = Date.parse(d),
    inputParse = Date.parse(input);

  if  (inputParse < dParse) {
    console.log(true);
  }
  else {
    console.log(false);
  }
};


validator.isAfterToday = function(input) {
  
  var d = new Date(),
    dParse = Date.parse(d),
    inputParse = Date.parse(input);

  if  (inputParse > dParse) {
    return true;
  }
  else {
    return false;
  }
};


validator.isEmpty = function(input) {
  if (input.length === 0 || !input.trim()) {
      return true; 
  }
  else {
    return false;
  }
};

validator.contains = function(input, words) { 
    var inputLower = input.toLowerCase();
    var inputArr = inputLower.split(" ");
  
    for (var i in inputLower) {
      if (inputLower[i] === " " || inputLower[i] === "-") {
        var inputArr = inputLower.split(".");
        var split = inputArr.toString().split(",");
        var toStr = split.toString();
        var removeQuotes = toStr.split("\"");
        var split2 = removeQuotes.toString().split("-");
        var toStr2 = split2.toString();
        var removeSpaces = toStr2.split(" ");
        var removeCommas = removeSpaces.toString().split(",");
        var removeExcla = removeCommas.toString().split("!");
        var removeSemi = removeExcla.toString().split(";");
        var removeColon = removeSemi.toString().split(":");
        var finalInputArr = removeColon.toString().split(",");
      }
    }
    
    var wordsLower = words.toString().toLowerCase();
    var wordsArr = wordsLower.split(",");
    var matches = false;
    
    for (var k in wordsArr) {
      if (finalInputArr.indexOf(wordsArr[k]) > -1) {
        matches = true;
      }
    }
    console.log(matches);  
};


validator.lacks = function(input, words) { 
    var inputLower = input.toLowerCase();
    var inputArr = inputLower.split(" ");
  
    for (var i in inputLower) {
      if (inputLower[i] === " " || inputLower[i] === "-") {
        var inputArr = inputLower.split(".");
        var split = inputArr.toString().split(",");
        var toStr = split.toString();
        var removeQuotes = toStr.split("\"");
        var split2 = removeQuotes.toString().split("-");
        var toStr2 = split2.toString();
        var removeSpaces = toStr2.split(" ");
        var removeCommas = removeSpaces.toString().split(",");
        var removeExcla = removeCommas.toString().split("!");
        var removeSemi = removeExcla.toString().split(";");
        var removeColon = removeSemi.toString().split(":");
        var finalInputArr = removeColon.toString().split(",");
      }
    }
    
    var wordsLower = words.toString().toLowerCase();
    var wordsArr = wordsLower.split(",");
    var lacks = true;
    
    for (var k in wordsArr) {
      if (finalInputArr.indexOf(wordsArr[k]) > -1) {
        lacks = false;
      }
    }
    console.log(lacks);  
};


validator.isComposedOf = function(input, strings) { 
    var inputLower = input.toLowerCase();
    var strLower = strings.toString().toLowerCase();
    var strArr = strLower.split(",");
    var composedOf = [];
    var composed = true;
  
    for (var i in strArr) {
      if (inputLower.indexOf(strArr[i]) > -1) {
        composedOf.push("true");
      }
      else {
        composedOf.push("false");
      }
    }
   
    for (var j in composedOf) {
      if (composedOf[j] === "false") {
        composed = false;
      }
      else {
        composed = true;
      }
    }
  
  console.log(composed);
};


validator.isLength = function(input, n) { 
  if (input.length <= n) {
    return true;
  }
  else {
    return false;
  }
};


validator.isOfLength = function(input, n) { 
    if (input.length >= n) {
      return true;
    }
    else {
      return false;
    }
};


validator.countWords = function(input) { 
  if (input === "") {
      console.log(input.length);
     }
    else if (input !== "") {
      for (var i in input) {
        if (input[i] === "-") {
          split = input.split("-")
        }
        else if (input[i] === " ") {
          split = input.split(" ");
        }
        else if (input[i] !== " " && input[i] !== "-") {
          split = input.split(" ");
        }
      }
      var count = split.length;
      console.log(count);
    }
};


validator.lessWordsThan = function(input, n) { 
    if (input === "") {
      count = 0;
     }
    else if (input !== "") {
      for (var i in input) {
        if (input[i] === "-") {
          split = input.split("-")
        }
        else if (input[i] === " ") {
          split = input.split(" ");
        }
        else if (input[i] !== " " || input[i] !== "-") {
          split = input.split(" ");
        }
      }
      count = split.length;
    }
  
    if (count <= n) {
      console.log(true);
    }
    else {
      console.log(false);
    }
};


validator.moreWordsThan = function(input, n) { 
    if (input === "") {
      count = 0;
     }
    else if (input !== "") {
      for (var i in input) {
        if (input[i] === "-") {
          split = input.split("-")
        }
        else if (input[i] === " ") {
          split = input.split(" ");
        }
        else if (input[i] !== " " || input[i] !== "-") {
          split = input.split(" ");
        }
      }
      count = split.length;
    }
  
    if (count >= n) {
      console.log(true);
    }
    else {
      console.log(false);
    }
};


validator.isBetween = function(input, floor, ceil) {
  if (input >= floor && input <= ceil) {
    return true;
  }
  else {
    return false;
  }
};


validator.isAlphanumeric = function(input) {
  var alpha = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var matches = [];
  
  for (var i in input) {
    if (alpha.indexOf(input[i]) > -1) {
        matches.push("true")
    }
    else {
      matches.push("false");
    }
  }
  
  var trueFalse = true;
  
  try {
  for (var k = 0; k < matches.length; k++) {
    if (matches[k] === "false") {
        throw "Enter letters and numbers only"
    }
    else if (matches[k] !== "false") {
      truefalse = true;
    }
  }
    console.log(truefalse);
  }
  catch(err) {
    console.log(err);
  }
};




validator.isCreditCard = function(input) { 
  var newInp = input.split("-").join("");
  var alpha = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var isAlpha = false;
 
    for (var i in newInp) {
      if (newInp.length === 16) {
        if (alpha.indexOf(newInp[i]) > -1) {
          isAlpha = true;
        }
        else {
          isAlpha = false;
        }
      }
    }
    
    if(isAlpha === true) {
      return true;
    }
    else if (isAlpha === false) {
      return false;
    }
};


validator.isHex = function(input) {
  var hash = input.substr("0", "1");
  var hex = input.substr("1");
  var lettersNums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "D", "C", "E", "F", "a", "b", "c", "d", "e", "f"]
  var boolean = [];
  
  
  if (hash.length + hex.length === 7 || hash.length + hex.length === 4 && hash === "#") {
    for (var i in hex) {
      if (lettersNums.indexOf(hex[i]) > -1) {
        boolean.push("true");      
      }
      else {
        boolean.push("false");
      }
    }
  } 
  else {
    boolean.push("false");
  }
  
  try {
  for (i in boolean) {
    if (boolean[i] === "false") {
      throw "Enter valid Hex color";
    }
    else {
      isHex = true;
    }
  }
  console.log(isHex);
  }
  catch(err) {
    console.log(err);
  }
};


validator.isRGB = function(input) {
  var rgb = input.substr("0", "4");
  
  var split = input.split("(");
  var toStr = split.toString();
  var split = toStr.split(")");
  var inputArr = split.toString().split(",");
  var removeRGB = inputArr.shift(0);
  var removeParenthesis = inputArr.pop();
  
  var numArr = [];
  var boolean = [];
  var truth = true;
 
  
  for (i in inputArr) {
    num = parseInt(inputArr[i]);
    numArr.push(num);
  }
  
  if (rgb === "rgb(" && input.slice(-1) === ")") {
    if (numArr.length === 3) {
      for (i in numArr) {
        if (numArr[i] >= 0 && numArr[i] <= 255) {
          boolean.push("true");
        }
        else {
          boolean.push("false");
        }
      }
    }
    else {
      boolean.push("false");
    }
  }
  else {
    boolean.push("false");
  }
  
  for (i in boolean) {
    if (boolean[i] === "false") {
      truth = false;
    }
  }
  return truth;
};


validator.isHSL = function(input) {
  var hsl = input.substr("0", "4");
  var split = input.split("(");
  var toStr = split.toString();
  var split = toStr.split(")");
  var inputArr = split.toString().split(",");
  var removeRGB = inputArr.shift(0);
  var removeParenthesis = inputArr.pop();
  
  var numArr = [];
  
  for (i in inputArr) {
    num = parseFloat(inputArr[i]);
    numArr.push(num);
  }
  
  if (hsl === "hsl("  && input.slice(-1) === ")") {
    if (numArr.length === 3) {
        if (numArr[0] >= 0 && numArr[0] <= 360) {
          if (numArr[1] >=0 && numArr[1] <=1) {
            if(numArr[2] >=0 && numArr[2] <=1) {
              console.log(true);
            }
            else {
              console.log("false");
            }
          }
          else {
            console.log("false");
          }
        }
        else {
          console.log("false");
        }
    }
    else {
      console.log("false");
    }
  }
  else {
    console.log("false");
  }
};


validator.isColor = function(input) {

var isRGB = function(input) {
  var rgb = input.substr("0", "4");
  
  var split = input.split("(");
  var toStr = split.toString();
  var split = toStr.split(")");
  var inputArr = split.toString().split(",");
  var removeRGB = inputArr.shift(0);
  var removeParenthesis = inputArr.pop();
  
  var numArr = [];
  var boolean = [];
  
  for (i in inputArr) {
    num = parseInt(inputArr[i]);
    numArr.push(num);
  }
  
  if (rgb === "rgb(" && input.slice(-1) === ")") {
    if (numArr.length === 3) {
      for (i in numArr) {
        if (numArr[i] >= 0 && numArr[i] <= 255) {
          boolean.push("true");
        }
        else {
          boolean.push("false");
        }
      }
    }
    else {
      boolean.push("false");
    }
  }
  else {
    boolean.push("false");
  }
  
  isRGB = true;
  
  for (i in boolean) {
    if (boolean[i] === "false") {
      isRGB = false;
    }
  }
  
  return isRGB;
};
isRGB(input);

  
var isHex = function(input) {
  var hash = input.substr("0", "1");
  var hex = input.substr("1");
  var lettersNums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "D", "C", "E", "F", "a", "b", "c", "d", "e", "f"]
  var boolean = [];
  
  if (hash.length + hex.length === 7 || hash.length + hex.length === 4 && hash === "#") {
    for (var i in hex) {
      if (lettersNums.indexOf(hex[i]) > -1) {
        boolean.push("true");      
      }
      else {
        boolean.push("false");
      }
    }
  } 
  else {
    boolean.push("false");
  }
  
  
  for (i in boolean) {
    if (boolean[i] === "false") {
      isHex = false;
    }
    else {
      isHex = true;
    }
  }
  return isHex;
};
isHex(input);
  
var isHSL = function(input) {
  var hsl = input.substr("0", "4");
  var split = input.split("(");
  var toStr = split.toString();
  var split = toStr.split(")");
  var inputArr = split.toString().split(",");
  var removeRGB = inputArr.shift(0);
  var removeParenthesis = inputArr.pop();
  
  var numArr = [];
  
  for (i in inputArr) {
    num = parseFloat(inputArr[i]);
    numArr.push(num);
  }
  
  if (hsl === "hsl("  && input.slice(-1) === ")") {
    if (numArr.length === 3) {
        if (numArr[0] >= 0 && numArr[0] <= 360) {
          if (numArr[1] >=0 && numArr[1] <=1) {
            if(numArr[2] >=0 && numArr[2] <=1) {
              isHSL = true;
            }
            else {
              isHSL = false;
            }
          }
           else {
            isHSL= false;
          }
        }
       else {
        isHSL = false;
      }
    }
     else {
      isHSL = false;
    }
  }
   else {
    isHSL = false;
  }

};
isHSL(input);
  
  
if (isRGB === true || isHSL === true || isHex === true) {
  console.log(true);
}
else {
  console.log(false);
}
};


validator.isTrimmed = function(input) {
  var trim = input.trim();
  var split = trim.split(" ");
  var space = 0;
  var words = 0;
 
  for (var i in trim) {
    if (trim[i] === " ") {
      space++; 
    }
  }
  
  for (var j in split) {
    if (split[j] !== "") {
      words++;
    }
  }
  
  if (space > words -1) {
    return false;
  }
  else if (input.length === trim.length) {
    return true;
  }
  else {
    return false;
  }
};

window.validator = validator;

})(window);





