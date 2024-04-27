// JavaScript code for filter search
function filterSearch() {
    var input, filter, section, div, a, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    section = document.getElementById("explore");
    div = section.getElementsByClassName("place");
    for (i = 0; i < div.length; i++) {
        a = div[i].getElementsByTagName("h3")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "";
        } else {
            div[i].style.display = "none";
        }
    }
}
