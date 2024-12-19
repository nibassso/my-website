  // Theme toggle functionality
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeToggleButton.textContent = document.body.classList.contains('dark-theme') ? 'الوضع الفاتح' : 'الوضع المظلم';
});

// Search functionality (basic)
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const content = document.body.textContent.toLowerCase();
    if (content.includes(query)) {
        console.log('نتائج البحث موجودة.');
    } else {
        console.log('لا توجد نتائج.');
    }
});
