const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
    const li = item.parentElement;

    item.addEventListener('click', function () {
        allSideMenu.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar?.addEventListener('click', function () {
    sidebar.classList.toggle('hide');
})





const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');







if (window.innerWidth < 768) {
    sidebar.classList.add('hide');
} else if (window.innerWidth > 576) {
    searchButtonIcon?.classList.replace('bx-x', 'bx-search');
    searchForm?.classList.remove('show');
}


window.addEventListener('resize', function () {
    if (this.innerWidth > 576) {
        searchButtonIcon?.classList.replace('bx-x', 'bx-search');
        searchForm?.classList.remove('show');
    }
})



setTimeout(() => {
    const switchMode = document?.getElementById('switch-mode');

    switchMode?.addEventListener('click', function () {
        alert(9)
        if (this?.checked) {
            document?.body?.classList.add('dark');
        } else {
            document?.body?.classList.remove('dark');
        }
    })
}, 500)