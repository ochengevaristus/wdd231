// Light/Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

// Contact Form Submission
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        alert(`Thank you, ${name}! Your email (${email}) has been submitted.`);
    });
}

// Comments Section
const submitComment = document.getElementById('submitComment');
const commentInput = document.getElementById('commentInput');
const commentList = document.getElementById('commentList');

if (submitComment) {
    submitComment.addEventListener('click', () => {
        const comment = commentInput.value;
        if (comment) {
            const div = document.createElement('div');
            div.textContent = comment;
            commentList.appendChild(div);
            commentInput.value = '';
        }
    });
}

// Modal functionality for gallery images
const galleryImages = document.querySelectorAll('.gallery-image');
const modals = document.querySelectorAll('.modal');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        const modalId = image.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
        const modalImg = modal.querySelector('.modal-content');
        modalImg.src = image.src;
    });
});

const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.parentElement;
        modal.style.display = 'none';
    });
});
