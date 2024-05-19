export interface Expression {
    first_number: number;
    second_number?: number;
    expression: "addition" | "subtraction" | "multiplication" | "division" | "exponentiation" | "root";
}

interface AdditionExpression extends Expression {
    expression: "addition";
    second_number: number;
}

interface SubtractionExpression extends Expression {
    expression: "subtraction";
    second_number: number;
}

interface MultiplicationExpression extends Expression {
    expression: "multiplication";
    second_number: number;
}

interface DivisionExpression extends Expression {
    expression: "division";
    second_number: number;
}

interface ExponentiationExpression extends Expression {
    expression: "exponentiation";
    second_number: number;
}

interface RootExpression extends Expression {
    expression: "root";
    second_number?: undefined;
}

interface SineExpression extends Expression {
    expression: "sine";
    second_number?: undefined;
}

interface CosineExpression extends Expression {
    expression: "cosine";
    second_number?: undefined;
}

interface TangentExpression extends Expression {
    expression: "tangent";
    second_number?: undefined;
}

export type RandomExpression = AdditionExpression | SubtractionExpression | MultiplicationExpression | DivisionExpression | ExponentiationExpression | RootExpression | SineExpression | CosineExpression | TangentExpression;

export const generateRandomExpression = (): RandomExpression => {
    const expression = Math.floor(Math.random() * 8);

    switch (expression) {
        case 0: {
            const first_number = Math.floor(Math.random() * 100);
            const second_number = Math.floor(Math.random() * 100);

            return {
                first_number,
                second_number,
                expression: "addition"
            };
        }
        case 1: {
            const first_number = Math.floor(Math.random() * 100);
            const second_number = Math.floor(Math.random() * 100);

            return {
                first_number,
                second_number,
                expression: "subtraction"
            };
        }
        case 2: {
            const first_number = Math.floor(Math.random() * 100);
            const second_number = Math.floor(Math.random() * 100);

            return {
                first_number,
                second_number,
                expression: "multiplication"
            };
        }
        case 3: {
            const first_number = Math.floor(Math.random() * 100);
            const second_number = Math.floor(Math.random() * 100);

            return {
                first_number,
                second_number,
                expression: "division"
            };
        }
        case 4: {
            const first_number = Math.floor(Math.random() * 100);
            const second_number = Math.floor(Math.random() * 10);

            return {
                first_number,
                second_number,
                expression: "exponentiation"
            };
        }
        case 5: {
            const first_number = Math.floor(Math.random() * 100);

            return {
                first_number,
                expression: "root"
            };
        }
        case 6: {
            const first_number = (Math.random() * 2 * Math.PI).toFixed(2);

            return {
                first_number,
                expression: "sine"
            };
        }
        case 7: {
            const first_number = (Math.random() * 2 * Math.PI).toFixed(2);

            return {
                first_number,
                expression: "cosine"
            };
        }
        case 8: {
            const first_number = (Math.random() * 2 * Math.PI).toFixed(2);

            return {
                first_number,
                expression: "tangent"
            };
        }
    }
}

export const getFullExpression = (expression: RandomExpression): string => {
    switch (expression.expression) {
        case "addition":
            return `${expression.first_number} + ${expression.second_number} = ${expression.first_number + expression.second_number}`;
        case "subtraction":
            return `${expression.first_number} - ${expression.second_number} = ${expression.first_number - expression.second_number}`;
        case "multiplication":
            return `${expression.first_number} * ${expression.second_number} = ${expression.first_number * expression.second_number}`;
        case "division":
            return `${expression.first_number} / ${expression.second_number} = ${(expression.first_number / expression.second_number).toFixed(2)}`;
        case "exponentiation":
            return `${expression.first_number} ^ ${expression.second_number} = ${Math.pow(expression.first_number, expression.second_number)}`;
        case "root":
            return `√${expression.first_number} = ${Math.sqrt(expression.first_number).toFixed(2)}`;
        case "sine":
            return `sin(${expression.first_number}) = ${Math.sin(expression.first_number).toFixed(2)}`;
        case "cosine":
            return `cos(${expression.first_number}) = ${Math.cos(expression.first_number).toFixed(2)}`;
        case "tangent":
            return `tan(${expression.first_number}) = ${Math.tan(expression.first_number).toFixed(2)}`;
    }
}

