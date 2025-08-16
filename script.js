// Handle form submission
document.querySelector('.access-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const button = document.querySelector('.submit-btn');
    const originalText = button.textContent;
    
    button.textContent = 'Submitted!';
    button.style.background = '#333333';
    
    // Reset after 2 seconds
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '#000000';
    }, 2000);
    
    console.log('Form submitted');
});