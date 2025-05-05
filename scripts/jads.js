document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');
    
    dropdownBtns.forEach(function(btn) { 
        btn.addEventListener('click', function() {
            this.classList.toggle('dropdown-btnactive');
            const content = this.nextElementSibling;
            
            if (content && content.classList.contains('dropdown-container')) {
                content.style.display = content.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
});