//JavaScript for RPN.HTML

$(document).ready(function(){
	//Initialize the x stack temporary state
	var tempState = false;
	var tempOpertation = false;
	
	//Set both temporary x stack states to zero
	function TempNull(){
		tempState = false;
		tempOpertation = false;
	}
	
	//Clear all stacks and set to zero no possible
	function ClearAll(){
		$('.xNum').html('0');
		$('.yNum').html('0');
		$('.zNum').html('0');
		$('.wNum').html('0');
	}
	
	$('#clearAll').click(function(){
		ClearAll();
	});
	
	//Initialize every stack as zero
	$(document).onload = ClearAll();
	
	//Attempt at a placeholder
	function NewInput(){
		if ($('.xNum').html() == '0'){
			$('.xNum').html('');
		} 
		else {
			$('.xNum').html();
		}
	}
	
	//Moves stack positions when an operation takes place
	function StackMove(){
		var yStack = $('.yNum').html();
		var zStack = $('.zNum').html();
		var wStack = $('.wNum').html();
		(zStack == 0) ? $('.yNum').html('0') : $('.yNum').html(zStack);
		(wStack == 0) ? $('.zNum').html('0') : $('.zNum').html(yStack);
		$('.wNum').html('0');
		tempOpertation = true;

	}
	
	//Adds x and y stacks
	function Add(yStack, xStack){
		$('.xNum').html(yStack + xStack);
		StackMove();
	}
	
	$('#addition').click(function(){
		NewInput()
		var xStack = Number($('.xNum').html());
		var yStack = Number($('.yNum').html());
		Add(yStack, xStack);
	});
	
	
	//Subtracts x stack from y stack
	function Subtract(yStack, xStack){
		$('.xNum').html(yStack - xStack);
		StackMove();
	}
	
	$('#subtraction').click(function(){
		NewInput()
		var xStack = Number($('.xNum').html());
		var yStack = Number($('.yNum').html());
		Subtract(yStack, xStack);
	});
	
	//Multiplies x and y stacks
	function Multiply(yStack, xStack){
		$('.xNum').html(yStack * xStack);
		StackMove();
	}
	
	$('#multiplication').click(function(){
		NewInput()
		var xStack = Number($('.xNum').html());
		var yStack = Number($('.yNum').html());
		Multiply(yStack, xStack);
	});
	
	//Divides y stack by x stack
	function Divide(yStack, xStack){
		$('.xNum').html(yStack / xStack);
		StackMove();
	}
	
	$('#division').click(function(){
		NewInput()
		var xStack = Number($('.xNum').html());
		var yStack = Number($('.yNum').html());
		Divide(yStack, xStack);
	});
	
	//Raises y stack to x stack power
	function Power(yStack, xStack){
		$('.xNum').html(Math.pow(yStack, xStack));
		StackMove();
	}
	
	$('#power').click(function(){
		NewInput()
		var xStack = Number($('.xNum').html());
		var yStack = Number($('.yNum').html());
		Power(yStack, xStack);
	});
	
	//Square root of x stack
	function Root(xStack){
		$('.xNum').html(Math.sqrt(xStack));
		StackMove();
	}
	
	$('#root').click(function(){
		var xStack = Number($('.xNum').html());
		Root(xStack);
	});
	
	//Natural log of x stack
	function Log_LN(xStack){
		$('.xNum').html(Math.log(xStack));
		StackMove();
	}
	
	$('#log-e').click(function(){
		var xStack = Number($('.xNum').html());
		Log_LN(xStack);
	});
	
	//Log base 10 of x stack
	function Log_10(xStack){
		$('.xNum').html(Math.log10(xStack));
		StackMove();
	}
	
	$('#log-10').click(function(){
		var xStack = Number($('.xNum').html());
		Log_10(xStack);
	});
	
	//Raises E, Euler's constant, to the x stack power
	function Power_E(xStack){
		$('.xNum').html(Math.exp(xStack));
		StackMove();
	}
	
	$('#Euler-power').click(function(){
		var xStack = Number($('.xNum').html());
		Power_E(xStack);
	});
	
	//Tan of x stack
	function Tan_x(xStack){
		$('.xNum').html(Math.tan(xStack));
		StackMove();
	}
	
	$('#tan').click(function(){
		var xStack = Number($('.xNum').html());
		Tan_x(xStack);
	});
	
	//Sin of x stack
	function Sin_x(xStack){
		$('.xNum').html(Math.sin(xStack));
		StackMove();
	}
	
	$('#sin').click(function(){
		var xStack = Number($('.xNum').html());
		Sin_x(xStack);
	});
	
	//Cos of x stack
	function Cos_x(xStack){
		$('.xNum').html(Math.cos(xStack));
		StackMove();
	}
	
	$('#cos').click(function(){
		var xStack = Number($('.xNum').html());
		Cos_x(xStack);
	});
	
	//Checks the temporary state of the x stack
	function TempCheck(){
		if (tempState == true){
			$('.xNum').html('');
			tempState = false;
			tempOpertation = false;
		}
		else if (tempOpertation == true){
			InputEnter();
			$('.xNum').html('');
			tempOpertation = false;
			tempState = true;
		}
	}
	
	//Pi number is now functional
	$('#numPi').click(function(){
		tempOpertation = true;
		tempState = false;
		NewInput();
		TempCheck();
		Number($('.xNum').html(Math.PI));
		TempNull;
	});
	
	//Euler's "e" is now functional
	$('#numEuler').click(function(){
		tempOpertation = true;
		tempState = false;
		NewInput();
		TempCheck();
		Number($('.xNum').html(Math.E));
		TempNull();
	});
	
	//When a number button is pressed, the x stack is updated
	function InputNumber(thisNum){
		NewInput();
		TempCheck();
		var initValue = $('.xNum').html();
		var numberValue = thisNum.html();
		var newValue = initValue + numberValue;
		(newValue.length < 15) ? $('.xNum').html(newValue) : $('.xNum').html(initValue);
		TempNull();
	}
	
	//Upon clicking a number, the x stack is updated
	$('.num').click(function(){
		InputNumber($(this));
	});
	
	//Deleting one number from the x stack is now possible
	function DeleteLast(){
		var initValue = $('.xNum').html();
		var thisValue = initValue.slice(0,-1);
		(initValue.length == 1) ? $('.xNum').html('0') : $('.xNum').html(thisValue);
	}
	
	$('#delete').click(function(){
		DeleteLast();
	});
	
	//Only one decimal is allowed to be added to the x stack
	function InputDeci(thisDeci){
		NewInput();
		TempCheck();
		var initValue = $('.xNum').html();
		var thisValue = thisDeci.html();
		var newValue = initValue + thisValue;
		(initValue.indexOf('.') > 0) ? $('.xNum').html(initValue) : $('.xNum').html(newValue);
	}
	
	$('#deci').click(function(){
		InputDeci($(this));
	});
	
	//POsitive and negative sign change now supported
	function InputSign(){
		var initValue = $('.xNum').html();
		var newValue = (initValue == 0) ? $('.xNum').html(initValue) : $('.xNum').html(-initValue);
	}
	
	$('#numSign').click(function(){
		InputSign();
	});
	
	//Pressing enter rotates stacks up on level. Stacks fall off after the w stack
	function InputEnter(){
		var xStack = $('.xNum').html();
		var yStack = $('.yNum').html();
		var zStack = $('.zNum').html();
		var wStack = $('.wNum').html();
		(zStack == '') ? $('.wNum').html(0) : $('.wNum').html(zStack);
		(yStack == '') ? $('.zNum').html(0) : $('.zNum').html(yStack);
		(xStack == '') ? $('.yNum').html(0) : $('.yNum').html(xStack);
		tempState = true;
	}
	
	$('#enter').click(function(){
		InputEnter();
	});
	
	//Switching the x and y stacks is now possible
	function SwitchXY(){
		var xStack = $('.xNum').html();
		var yStack = $('.yNum').html();
		var varStack = yStack;
		$('.yNum').html(xStack);
		$('.xNum').html(varStack);
	}
	
	$('#switch').click(function(){
		SwitchXY();
	});
	
	//Adding function to keyboard keys for certain buttons on the calculator. Commenting will be updated eventually
	$(document).keyup(function(event){
		var numKeyMap = [];
		var numPadKeyMap = [];
		for (var i = 0; i < (57 - 47); i++){		//48 to 57 are the numerical key codes
			numKeyMap[i] = 48 + i;
			numPadKeyMap[i] = 96 + i;
		}
		var thisKey = event.keyCode;
		for (var j = 0; j < numKeyMap.length; j++){
			if (thisKey == numKeyMap[j] || thisKey == numPadKeyMap[j]){
				InputNumber($('#' + (numKeyMap[j] - 48)));
			}
		}
		var delKeyMap = [8];
		for (var j = 0; j < delKeyMap.length; j++){
			if (thisKey == delKeyMap[j]){
				DeleteLast();
			}
		}
		var delAllKeyMap = [46];
		for (var j = 0; j < delAllKeyMap.length; j++){
			if (thisKey == delAllKeyMap[j]){
				ClearAll();
			}
		}
		var deciKeyMap = [110, 190];
		for (var j = 0; j < deciKeyMap.length; j++){
			if (thisKey == deciKeyMap[j]){
				InputDeci($('#deci'));
			}
		}
		var enterKeyMap = [13];
		for (var j = 0; j < enterKeyMap.length; j++){
			if (thisKey == enterKeyMap[j]){
				InputEnter();
			}
		}
		var addKeyMap = [107];
		for (var j = 0; j < addKeyMap.length; j++){
			if (thisKey == addKeyMap[j]){
				var xStack = Number($('.xNum').html());
				var yStack = Number($('.yNum').html());
				Add(yStack, xStack);
			}
		}
		var subtractKeyMap = [109];
		for (var j = 0; j < subtractKeyMap.length; j++){
			if (thisKey == subtractKeyMap[j]){
				var xStack = Number($('.xNum').html());
				var yStack = Number($('.yNum').html());
				Subtract(yStack, xStack);
			}
		}
		var multiplyKeyMap = [106];
		for (var j = 0; j < multiplyKeyMap.length; j++){
			if (thisKey == multiplyKeyMap[j]){
				var xStack = Number($('.xNum').html());
				var yStack = Number($('.yNum').html());
				Multiply(yStack, xStack);
			}
		}
		var divideKeyMap = [111];
		for (var j = 0; j < divideKeyMap.length; j++){
			if (thisKey == divideKeyMap[j]){
				var xStack = Number($('.xNum').html());
				var yStack = Number($('.yNum').html());
				Divide(yStack, xStack);
			}
		}
		var switchKeyMap = [39];
		for (var j = 0; j < switchKeyMap.length; j++){
			if (thisKey == switchKeyMap[j]){
				SwitchXY();
			}
		}
	});
});