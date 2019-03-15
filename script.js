document.addEventListener("DOMContentLoaded", function() {
    // automatically sets the year
    document.querySelector("#myFooter").innerHTML = "(c) " + new Date(Date.now()).getFullYear() + " - johhnnydev";
 });