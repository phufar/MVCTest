class CalculatorController {
	constructor(Model, View) {
		this.Model = Model;
		this.View = View;
		this.init();
	}

	init() {
		this.DontSleep();
		document.getElementById("Submit").addEventListener("click", () => {
			this.HandleCalculation();
		});
	}

	HandleCalculation() {
		try {
			const first = Number(document.getElementById("First").value);
			const operator = document.getElementById("Operator").value;
			const second = Number(document.getElementById("Second").value);

			const result = this.Model.calculate(first, operator, second);
			this.View.displayResult(result);
		} catch (error) {
			this.View.displayError(error.message);
		}
	}

	DontSleep() {
		setInterval(function () {
			this.View.displayAwake();
		}, 3000);
	}

}
class CalculatorView {
	displayResult(Result) {
		document.getElementById("Result").innerText = "Result : " + Result;
	}

	displayError(message) {
		document.getElementById("Result").innerText = "Result : " + message;
	}

	displayAwake() {
		document.getElementById("Result").innerText = "Use me";
	}
}
document.addEventListener("DOMContentLoaded", function () {
	const model = new CalculatorModel;
	const View = new CalculatorView;
	const controller = new CalculatorController(model, View);
})
