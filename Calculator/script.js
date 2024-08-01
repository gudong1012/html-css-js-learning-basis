const screenExpression = document.getElementById('screen-expression');
const screenResult = document.getElementById('screen-result');

let expression = '';
let result = '';

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (buttonText === 'AC') {
            expression = '';
            result = '';
        } else if (buttonText === 'C') {
            expression = '';
        } else if (buttonText === '←') {
            expression = expression.slice(0, -1);
        } else if (buttonText === '=') {
            try {
                result = eval(expression);
                //expression = result.toString();
            } catch {
                result = 'Error';
            }
        } else {
            expression += buttonText;
        }

        screenExpression.textContent = expression;
        screenResult.textContent = result;
    });
});
