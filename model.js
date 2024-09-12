class CalculatorModel {

    calculate(first, operator, second) {
        if (first < 0 || second < 0) throw new Error("Error :(");

        const operations = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => {
                if (b === 0) throw new Error("It's over 9000!");
                return a / b;
            },
            "%": (a, b) => {
                if (b === 0) throw new Error("It's over 9000!");
                return a % b;
            }
        };

        if (!operations[operator]) {
            throw new Error("Invalid operator");
        }

        return operations[operator](first, second);
    }
}
