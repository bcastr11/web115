document.addEventListener('DOMContentLoaded', function() {
    const nameForm = document.getElementById('nameForm');
    const middleInitialInput = document.getElementById('middle_initial');
    const outputDiv = document.getElementById('output');
    
    middleInitialInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^a-zA-Z]/g, '').substring(0, 1).toUpperCase();
    });
    
    nameForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const firstName = document.getElementById('first_name').value.trim();
        const middleInitial = middleInitialInput.value.replace(/[^a-zA-Z]/g, '').toUpperCase();
        const lastName = document.getElementById('last_name').value.trim();
        

        if (!firstName || !lastName) {
            alert('Please enter both first and last name');
            return;
        }
        
        const count = prompt('How many numbers to generate (1-140)?', '140');
        let maxNumber = 140;
        
        if (count) {
            const num = parseInt(count);
            if (!isNaN(num) && num > 0) {
                maxNumber = Math.min(num, 140);
            }
        }
        
        let fullName = firstName;
        if (middleInitial) fullName += ` ${middleInitial}.`;
        fullName += ` ${lastName}`;
        document.getElementById('greeting').textContent = `Welcome to Bold Cardinal FizzBuzz, ${fullName}!`;
        
        outputDiv.innerHTML = '';
        const ol = document.createElement('ol');
        
        for (let i = 1; i <= maxNumber; i++) {
            const li = document.createElement('li');
            let outputText = '';
            
            if (i % 15 === 0) {
                outputText = 'Build Different & Grow!';
            } else if (i % 3 === 0) {
                outputText = 'Build Different';
            } else if (i % 5 === 0) {
                outputText = 'Grow!';
            }
            
            li.textContent = outputText; 
            ol.appendChild(li);
        }
        
        outputDiv.appendChild(ol);
    });
});