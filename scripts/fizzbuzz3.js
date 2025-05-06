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
        
        let fullName = firstName;
        if (middleInitial) fullName += ` ${middleInitial}.`;
        fullName += ` ${lastName}`;
        document.getElementById('greeting').textContent = `Welcome to Bold Cardinal FizzBuzz, ${fullName}!`;
        
        const count = prompt('How many numbers to generate (1-140)?', '140');
        let maxNumber = 140;
        if (count) {
            const num = parseInt(count);
            if (!isNaN(num) && num > 0) maxNumber = Math.min(num, 140);
        }
        
        const mappings = [
            { divisor: 3, word: 'Build Different' },
            { divisor: 5, word: 'Grow!' },
            { divisor: 7, word: 'BANG!' }
        ];
        
        outputDiv.innerHTML = '';
        const ol = document.createElement('ol');
        
        for (let i = 1; i <= maxNumber; i++) {
            const li = document.createElement('li');
            const matches = mappings.filter((m) => i % m.divisor === 0);
            
            li.textContent = (matches.length > 0 ? ` ${matches.map((m) => m.word).join(' & ')}` : '');
            
            ol.appendChild(li);
        }
        
        outputDiv.appendChild(ol);
    });
});