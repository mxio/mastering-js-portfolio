var screen = document.getElementById('screen');

clear.onclick = function(){
    screen.value = "";
}

del.onclick = function() {
	var length = screen.value.length;
	var deletedStr = screen.value.substr(0, length - 1);
	screen.value = deletedStr;
}

settings.onclick = function () {
	screen.value = "";
}

decimal.addEventListener( 'click' , function(){  
	screen.value += decimal.innerHTML;
},false);

num1.addEventListener( 'click' , function(){  
	screen.value += num1.innerHTML;
},false);

num2.addEventListener( 'click' , function(){  
	screen.value += num2.innerHTML;
},false);

num3.addEventListener( 'click' , function(){  
	screen.value += num3.innerHTML;
},false);

num4.addEventListener( 'click' , function(){  
	screen.value += num4.innerHTML;
},false);

num5.addEventListener( 'click' , function(){  
	screen.value += num5.innerHTML;
},false);

num6.addEventListener( 'click' , function(){  
	screen.value += num6.innerHTML;
},false);

num7.addEventListener( 'click' , function(){  
	screen.value += num7.innerHTML;
},false);

num8.addEventListener( 'click' , function(){  
	screen.value += num8.innerHTML;
},false);

num9.addEventListener( 'click' , function(){  
	screen.value += num9.innerHTML;
},false);

num0.addEventListener( 'click' , function(){  
	screen.value += num0.innerHTML;
},false);

plus.addEventListener('click', function() {
	screen.value += '+';
}, false);

minus.addEventListener('click', function() {
	screen.value += '-';
}, false);

multiply.addEventListener('click', function() {
	screen.value += '*';
}, false);

divide.addEventListener('click', function() {
	screen.value += '/';
}, false);

openingPara.addEventListener('click', function() {
	screen.value += '(';
}, false);

closingPara.addEventListener('click', function() {
	screen.value += ')';
}, false);


calc.addEventListener('click', function() {
	var calc = eval(document.getElementById('screen').value);

	document.getElementById('screen').value = calc;
}, false);

function calculatePercentage() {
    var input = document.getElementById("screen").value;
    document.getElementById("screen").value = input/100;
    }
