window.onload = function() {
    const nameForm = document.getElementById('nameForm');
    
    nameForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        
        const firstName = document.getElementById('first_name').value;
        const middleInitial = document.getElementById('middle_initial').value;
        const lastName = document.getElementById('last_name').value;
        
        
        let fullName = firstName;
        if (middleInitial) {
            fullName += ' ' + middleInitial + '.';
        }
        fullName += ' ' + lastName;
        
       
        document.getElementById('greeting').textContent = 
            'Welcome to Bold Cardinal, ' + fullName + '!';
        
        
        const countMessage = 'How high do you want to count, ' + firstName + '?';
        const userNumber = prompt(countMessage, "125");
        const countTo = userNumber ? parseInt(userNumber) : 125;
        
        
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = '';
        
       
        const numberList = document.createElement('ol');
        
        
        for (let i = 1; i <= countTo; i++) {
            const listItem = document.createElement('li');
            const numberType = (i % 2 === 0) ? 'even' : 'odd';
            
            listItem.textContent = 'Build Different - the number is ' + numberType;
            numberList.appendChild(listItem);
        }
        
        outputDiv.appendChild(numberList);
    });
};
