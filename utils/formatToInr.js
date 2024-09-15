function formatToINR(amount) {
    if (isNaN(amount) || amount === null || amount === undefined) {
        return 'Invalid amount';
    }

    // Ensure the amount is a number and convert it to a string with two decimal places
    amount = Number(amount).toFixed(2);

    // Split the amount into integer and decimal parts
    let [integerPart, decimalPart] = amount.split('.');

    // Regex for Indian Numbering System
    let lastThree = integerPart.slice(-3);
    let otherNumbers = integerPart.slice(0, -3);
    if (otherNumbers !== '') {
        lastThree = ',' + lastThree;
    }
    integerPart = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;

    // Combine the integer part with the decimal part
    return `₹${integerPart}${decimalPart ? `.${decimalPart}` : ''}`;
}

export default formatToINR