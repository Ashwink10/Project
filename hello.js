function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    li = document.getElementsByTagName("tr");
    for (i = 1; i < li.length; i++) {
        if (li[i].childElementCount == 3) {
            txtValue = li[i].cells[1].childNodes[0].textContent;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }

        }

    }

}

