function solve() {
    let button = document.getElementById('searchBtn');
    let searchFields = Array.from(document.querySelectorAll('tbody tr'));

    button.addEventListener('click', event);

    function event() {
        let input = document.getElementById('searchField').value.toLowerCase();
        for (let search of searchFields) {
            search.removeAttribute('class', 'select');
            if (search.textContent.toLowerCase().includes(input)) {
                search.setAttribute('class', 'select');
            }
        }
    }
}