const loadingBar = document.querySelector('.loading-bar');
const containerLoadingBar = document.querySelector('.container-loading-bar');

loadingBar.addEventListener('animationend', function () {
    loadingBar.classList.add('remove-loading-bar');
    containerLoadingBar.classList.add('remove-loading-bar');

    const header = document.querySelector('header')
    header.classList.add('show-header');

    const contentHome = document.querySelector('.content-home');
    contentHome.classList.add('show-home')

    const secInicio = document.querySelector('#inicio')
    secInicio.style.opacity = '1'

    const footer = document.querySelector('footer')
    footer.style.opacity = '1'

});









