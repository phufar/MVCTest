class CalculatorView {
	displayResult(Result) {
		document.getElementById("Result").innerText = "Result : " + Result;
	}

	displayError(message) {
		document.getElementById("Result").innerText = "Result : " + message;
	}

    displayAwake(){
        document.getElementById("Result").innerText = "Use me";
    }
}