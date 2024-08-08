document.addEventListener('DOMContentLoaded', function () {
    const dayLinks = document.querySelectorAll('.agenda-nav a');
    const sections = document.querySelectorAll('.agenda-div > section');

    function showSection(dayId) {
        sections.forEach(section => {
            section.style.display = 'none';
        });

        dayLinks.forEach(link => {
            link.classList.remove('active');
        });

        document.querySelector(dayId).style.display = 'block';
        document.querySelector(`.agenda-nav a[href="${dayId}"]`).classList.add('active');
    }

    dayLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const dayId = this.getAttribute('href');
            showSection(dayId);
        });
    });

    showSection('#sevenYears');
});
