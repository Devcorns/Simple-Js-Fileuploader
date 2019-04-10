var realFile = document.querySelectorAll(".real-file");
var selBtns = document.querySelectorAll(".select-file");

for(rf of realFile) {

    rf.hidden = "true";

}

for(selectBtn of selBtns) {
    
    selectBtn.addEventListener("click", function(e) {
       e.target.nextElementSibling.click();
       chooseInput(e.target.nextElementSibling);
    });

}
function chooseInput(input) {
    
    input.addEventListener("change", function(ch) {

        var arr = ch.target.value.split('\\');
        ch.target.parentNode.querySelectorAll(".devcorns-plugin")[0].value = arr[arr.length-1];

    })

}
