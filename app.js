const cbabsred = document.getElementById('twabsred')
const cbabsblue = document.getElementById('twabsblue')
const buttonSelect = document.getElementById('forward')
const logoHondaDefault = document.querySelector('#default-logo')
const logoHondaAlternative_2 = document.querySelector('#logo-blue')
const logoHondaAlternative_3 = document.querySelector('#logo-grey')
const buttonTenhoInteresse = document.getElementById('button-tenho-interesse')


const buttonAbs = document.getElementsByClassName('btn-abs')
const buttonCbs = document.getElementsByClassName('btn-cbs')

buttonSelect.addEventListener('click', function (event) {

    if (cbabsred.classList.contains('active')) {

        cbabsred.classList.remove('active');
        cbabsblue.classList.add('active');

        buttonTenhoInteresse.style.backgroundColor = '#1D2E51';
        buttonAbs[0].style.backgroundColor = '#1D2E51'
        buttonCbs[0].style.borderColor = '#1D2E51'
        buttonCbs[0].style.color = '#1D2E51'

        logoHondaDefault.classList.remove('active')
        logoHondaAlternative_2.classList.add('active');

    } else {
        cbabsblue.classList.remove('active');
        cbabsred.classList.add('active');
        buttonTenhoInteresse.style.backgroundColor = '#b30000';
        buttonAbs[0].style.backgroundColor = '#b30000'
        buttonCbs[0].style.borderColor = '#b30000'
        buttonCbs[0].style.color = '#b30000'

        logoHondaDefault.classList.add('active');
        logoHondaAlternative_2.classList.remove('active');


    }

})


const cbcbsgrey = document.getElementById('twcbsgrey')
const cbcbsred = document.getElementById('twcbsred')

buttonCbs.addEventListener('click', function () {

    if (cbabsred.classList.contains('active')) {
        cbabsred.classList.remove('active')
        cbcbsgrey.classList.add('active')

    } else if (cbabsblue.classList.contains('active')) {
        cbabsblue.classList.remove('active')
        cbcbsgrey.classList.add('active')
    } else {



    }


})







