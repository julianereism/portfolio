document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.show-and-hide');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var content = this.nextElementSibling;
            if (content.style.display === 'block' || content.style.display === '') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});