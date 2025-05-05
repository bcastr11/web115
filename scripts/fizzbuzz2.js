document.addEventListener('DOMContentLoaded', function() {
    const nameForm = document.getElementById('nameForm');
    const middleInitialInput = document.getElementById('middle_initial');
    const outputDiv = document.getElementById('output');
    
    middleInitialInput.addEventListener('input', function() {
        const cleanValue = this.value.replace(/[^A-Za-z]/g, '');
        if (this.value !== cleanValue) {
            this.value = cleanValue;
        }
        if (this.value) {
            this.value = this.value.toUpperCase();
        }
    });

    middleInitialInput.addEventListener('blur', function() {
        this.value = this.value.replace(/[^A-Za-z]/g, '').substring(0, 1).toUpperCase();
    });
    
    nameForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const firstName = document.getElementById('first_name').value.trim();
        let middleInitial = middleInitialInput.value.replace(/[^A-Za-z]/g, '').toUpperCase();
        const lastName = document.getElementById('last_name').value.trim();
        
        // Validate required fields
        if (!firstName || !lastName) {
            alert('Please enter both first and last name');
            return;
        }
        
        middleInitial = middleInitial.substring(0, 1);
        
        let fullName = firstName;
        if (middleInitial) {
            fullName += ' ' + middleInitial + '.';
        }
        fullName += ' ' + lastName;
        document.getElementById('greeting').textContent = 'Welcome to Bold Cardinal FizzBuzz, ' + fullName + '!';
        
        const count = prompt('How many numbers to generate (1-140)?', '140');
        let maxNumber = 140; // Default maximum
        
        if (count) {
            const num = parseInt(count);
            if (!isNaN(num) && num > 0) {
                maxNumber = Math.min(num, 140); 
            }
        }
        
        const firstDivisor = 3;
        const secondDivisor = 5;
        
        function checkDivision(number, divisor) {
            return number % divisor === 0;
        }
        
        outputDiv.innerHTML = '';
        const ol = document.createElement('ol');
        
        for (let i = 1; i <= maxNumber; i++) {
            const li = document.createElement('li');
            let outputText = '';
            
            const isDivisibleByFirst = checkDivision(i, firstDivisor);
            const isDivisibleBySecond = checkDivision(i, secondDivisor);
            
            if (isDivisibleByFirst && isDivisibleBySecond) {
                outputText = 'Build Different & Grow!';
            } else if (isDivisibleByFirst) {
                outputText = 'Build Different';
            } else if (isDivisibleBySecond) {
                outputText = 'Grow!';
            }
            
            li.textContent = outputText;
            ol.appendChild(li);
        }
        
        outputDiv.appendChild(ol);
    });
});