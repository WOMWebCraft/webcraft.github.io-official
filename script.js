document.getElementById('hamburger').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('active');
});
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.closest('.faq-item');
        const answer = parent.querySelector('.faq-answer');
        
        // Toggle the "active" class for smooth transition
        parent.classList.toggle('active');
        
        // If the item is active, set the max-height to make it visible, otherwise hide it
        if (parent.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + "px"; // Get content height to allow it to expand
        } else {
            answer.style.maxHeight = "0"; // Collapse the content
        }
    });
});

