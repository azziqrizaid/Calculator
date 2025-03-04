let display = document.getElementById('display');
function appendValue(value) {
    display.value += value;
}
function clearInput() {
    display.value = '';
}
function toggleSign() {
    if (display.value) {
        display.value = (parseFloat(display.value) * -1).toString();
    }
}
function calculateResult() {
    try {
        display.value = eval(display.value.replace('×', '*').replace('÷', '/'));
    } catch {
        display.value = 'Error';
    }
}
