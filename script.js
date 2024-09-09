document.addEventListener('DOMContentLoaded', function () {
    const blocks = document.querySelectorAll('.block');
    const sidebar = document.querySelector('.sidebar');
    const sidebarText = sidebar.querySelector('p');

    sidebarText.textContent = 'BMW';

    blocks.forEach(block => {
        block.addEventListener('mouseover', function () {
            sidebarText.textContent = this.getAttribute('data-model');
            sidebar.classList.add('active');
        });

        block.addEventListener('mouseout', function () {
            sidebarText.textContent = 'BMW';
            sidebar.classList.remove('active');
        });
    });
});