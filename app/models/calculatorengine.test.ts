import { CalculatorEngine, State } from "./calculatorengine";

describe('CalculatorEngine', () => {

    let calculatorEngine = new CalculatorEngine();

    let cases = [{operation: '1+2=', result: 3}, {operation: '120/3=', result: 40}];


    const process = (myString: string, calculatorEngine: CalculatorEngine) => {
        myString.split('').forEach((char) => {
            // if is number
            if(!isNaN(parseInt(char))) {
                calculatorEngine.processNumber(parseInt(char));
            }
            // if is string
            else if (isNaN(parseInt(char))) {
                calculatorEngine.processSymbol(char);
            }
        });
        return calculatorEngine.result;
    }

    beforeEach(() => {
        calculatorEngine = new CalculatorEngine();
    });

    it('should process valid cases', () => {
        cases.forEach((c) => {
            expect(process(c.operation, calculatorEngine)).toBe(c.result);
            calculatorEngine.clearCalculator();
        });        
    });
    it('should process 1/0=Infinity', () => {
        expect(process('1/0=', calculatorEngine)).toBe(Infinity);
    });
    it('should resolve 0/0=NaN', () => {
        expect(process('0/0=', calculatorEngine)).toBe(NaN);
    });
    it('should resolve =0', () => {
        console.log(process('=', calculatorEngine));
        
        expect(process('=', calculatorEngine)).toBe(0);

    });
});