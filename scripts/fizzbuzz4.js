document.addEventListener('DOMContentLoaded', function() {
    const nameForm = document.getElementById('nameForm');
    const middleInitialInput = document.getElementById('middle_initial');
    const outputDiv = document.getElementById('output');
    
    middleInitialInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^A-Za-z]/g, '').substring(0, 1).toUpperCase();
    });

    nameForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const firstName = document.getElementById('first_name').value.trim();
        const middleInitial = middleInitialInput.value.replace(/[^A-Za-z]/g, '').toUpperCase();
        const lastName = document.getElementById('last_name').value.trim();
        
        if (!firstName || !lastName) {
            alert('Please enter both first and last name');
            return;
        }
        
        const divisor1 = parseInt(document.getElementById('divisor1').value);
        const divisor2 = parseInt(document.getElementById('divisor2').value);
        const divisor3 = parseInt(document.getElementById('divisor3').value);
        const word1 = document.getElementById('word1').value.trim();
        const word2 = document.getElementById('word2').value.trim();
        const word3 = document.getElementById('word3').value.trim();
        let maxNumber = parseInt(document.getElementById('maxNumber').value);
        
        if ([divisor1, divisor2, divisor3, maxNumber].some(isNaN)) {
            alert('Please enter valid numbers for all divisors and count');
            return;
        }
        
        maxNumber = Math.min(maxNumber, 500);
        
        let fullName = firstName;
        if (middleInitial) fullName += ` ${middleInitial}.`;
        fullName += ` ${lastName}`;
        document.getElementById('greeting').textContent = `Welcome to Custom Fizz Buzz, ${fullName}!`;
        
        const mappings = [
            { divisor: divisor1, word: word1 },
            { divisor: divisor2, word: word2 },
            { divisor: divisor3, word: word3 }
        ];
        
        outputDiv.innerHTML = '';
        const ol = document.createElement('ol');
        
        for (let i = 1; i <= maxNumber; i++) {
            const li = document.createElement('li');
            const matches = mappings.filter((m) => i % m.divisor === 0);
            
            li.textContent = matches.length > 0 ? matches.map((m) => m.word).join(' & ') : '';
            ol.appendChild(li);
        }
        
        outputDiv.appendChild(ol);
    });
});