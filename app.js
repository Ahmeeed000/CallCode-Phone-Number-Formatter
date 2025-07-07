document.addEventListener('DOMContentLoaded', () => {
  // Grabbing elements
  const input = document.getElementById('phone-input');
  const button = document.getElementById('format-btn');
  const output = document.getElementById('output');
  const select = document.getElementById('country-select');

  // Format function
  const formatNumber = (number, countryCode) => {
    // 1. Remove (0) — optional national digit
    number = number.replace(/\(0\)/g, '');

    // 2. Remove all non-numeric characters
    number = number.trim().replace(/[^0-9]/g, '');

    // 3. If number starts with 00, remove both zeros
      if (number.startsWith('00')) {
        number = number.slice(2);
      }
      
     /*  if (number.startsWith('000')){
        number = number.slice(3);
      } */
     
      // 4. Remove leading zero(s)
      while (number.startsWith('0')) {
        number = number.slice(1);
      }

    // 5. Add proper country code if missing or partial
    if (number.startsWith('+')) {
      return number;
    } else if (number.startsWith(countryCode.replace('+', ''))) {
      return '+' + number;
    } else {
      return countryCode + number;
    }
  };

  // Format on button click
  button.addEventListener('click', () => {
    const rawNumber = input.value;
    const selectedCode = select.value;

    const formattedNumber = formatNumber(rawNumber, selectedCode);

    output.value = formattedNumber;
    input.value = ''; // clear input after formatting
  });

  // Optional: trigger formatting with Enter key
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      button.click();
    }
  });
});



