export enum State {
    INIT,
    FIRST_FIGURE,
    SECOND_FIGURE,
    RESULT
}

export class CalculatorEngine {

    currentState = State.INIT;
    firstNumber = 0;
    secondNumber = 0;
    operator = '';
    result = 0;
    display = '';

    processNumber = (value: number): string => {
        switch (this.currentState) {
            case State.INIT:
                this.firstNumber = value;
                this.display = (value.toString());
                this.currentState = State.FIRST_FIGURE;
                break;
            case State.FIRST_FIGURE:
                this.firstNumber = this.firstNumber * 10 + value;
                this.display = (this.display + value.toString());
                break;
            case State.SECOND_FIGURE:
                this.secondNumber = this.secondNumber * 10 + value;
                this.display = (this.display + value.toString());
                break;
            case State.RESULT:
                this.firstNumber = value;
                this.clearCalculator();
                this.display = (value.toString());
                this.currentState = State.FIRST_FIGURE;
                break;
        }

        return this.display;

    }

    processSymbol = (value: string): string => {
        switch (this.currentState) {
            case State.INIT:
                this.currentState = State.FIRST_FIGURE;
                break;
            case State.FIRST_FIGURE:
                if (value === '+' || value === '-' || value === '*' || value === '/') {
                    this.operator = value;
                    this.display = (this.display + value);
                    this.currentState = State.SECOND_FIGURE;
                }
                break;
            case State.SECOND_FIGURE:
                if (value === '=') {
                    this.result = this.resolve();
                    this.display = (this.display + '=' + this.result);
                    this.currentState = State.RESULT;
                }
                break;
            case State.RESULT:
                let temp = this.result;
                this.clearCalculator();
                this.firstNumber = temp;
                this.operator = value;
                this.display = (temp + value.toString());
                this.currentState = State.SECOND_FIGURE;
                break;
        }

        return this.display;
    }

    printCalculatorState = () => {
        console.log('this.firstNumber: ' + this.firstNumber);
        console.log('this.secondNumber: ' + this.secondNumber);
        console.log('this.operator: ' + this.operator);
        console.log('this.result: ' + this.result);
        console.log('this.currentState: ' + this.currentState);
    }

    resolve = () => {
        let result = 0;
        switch (this.operator) {
            case '+':
                result = this.firstNumber + this.secondNumber;
                break;
            case '-':
                result = this.firstNumber - this.secondNumber;
                break;
            case '*':
                result = this.firstNumber * this.secondNumber;
                break;
            case '/':
                result = this.firstNumber / this.secondNumber;
                break;
        }
        return result;
    }

    clearCalculator = () => {
        this.firstNumber = 0;
        this.secondNumber = 0;
        this.operator = '';
        this.result = 0;
        this.currentState = State.INIT;
    }

}