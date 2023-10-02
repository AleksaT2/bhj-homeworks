const rotators = document.getElementsByClassName("rotator");
let k = 0;

for (const rotator of rotators) {
    const rotatorCaseList = rotator.children;
    function rotatorChange() {
    
        for (let i = 0; i < rotatorCaseList.length; i++) {
            rotatorCaseList[i].classList.remove("rotator__case_active");
         }
         rotatorCaseList[k].classList.add("rotator__case_active");

         if (k < rotatorCaseList.length - 1) {
            ++k;
         }
         else {
            k = 0;
         }
         setTimeout(rotatorChange, 1000);
    }
    setTimeout(rotatorChange, 1000);
}