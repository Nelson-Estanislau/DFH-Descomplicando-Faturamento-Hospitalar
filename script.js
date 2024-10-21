function showModule(moduleId) {
    var modules = document.getElementsByClassName('module-content');
    for (var i = 0; i < modules.length; i++) {
        modules[i].classList.remove('active');
    }
    document.getElementById(moduleId).classList.add('active');
}

function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}
