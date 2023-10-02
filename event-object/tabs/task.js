const tabList = document.getElementsByClassName("tab");
const tabContentList = document.getElementsByClassName("tab__content");

for (let i = 0; i < tabList.length; ++i) {
    tabList[i].onclick = function() {
        for (let j = 0; j < tabList.length; ++j) {
            if (tabList[j].classList.contains("tab_active")) {
                tabList[j].classList.remove("tab_active");
                tabContentList[j].classList.remove("tab__content_active");
            }
        }
        tabList[i].classList.add("tab_active");
        tabContentList[i].classList.add("tab__content_active");
    }

}