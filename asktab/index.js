
function onSearch() {
    var input = document.querySelector('#search-term')
    var n = input.value.trim();
    window.open('https://www.bing.com/search?q='.concat(n));
}

