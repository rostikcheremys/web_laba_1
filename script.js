document.addEventListener('DOMContentLoaded', function () {
    const carItem = document.querySelectorAll('.car-item');
    const sidebar = document.querySelector('.sidebar');
    const sidebarText = sidebar.querySelector('p');

    sidebarText.textContent = 'BMW';

    carItem.forEach(block => {
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