const toggleOpen = (item) => {
    item.classList.toggle('open');
}
document.querySelectorAll('.panel').forEach(item => {
    item.addEventListener('click', () => {
        toggleOpen(item);
    });
    item.addEventListener('transitionend', (event) => {
        if (event.propertyName.toLowerCase() ==='flex-grow') {
            toggleOpen(item.firstElementChild);
            toggleOpen(item.lastElementChild);
        }
    })
})