// Filter projects based on the selected category
function filterProjects(category) {
    $('.filter-item').hide(); // Hide all projects

    if (category === 'all') {
        $('.filter-item').show(); // Show all projects if 'All' is selected
    } else {
        $('.filter-item.' + category).show(); // Show projects with the selected category
    }
}

// Handle click events on filter buttons
$('.btn-group .btn').on('click', function () {
    $('.btn-group .btn').removeClass('active'); // Remove 'active' class from all buttons
    $(this).addClass('active'); // Add 'active' class to the clicked button

    var category = $(this).data('filter'); // Get the category from data-filter attribute
    filterProjects(category); // Call the filterProjects function with the selected category
});
/*==================== SHOW SCROLL Up ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
