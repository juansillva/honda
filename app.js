const cbabsred = document.getElementById('twabsred')
const cbabsblue = document.getElementById('twabsblue')
const buttonSelect = document.getElementById('forward')
const logoHonda = document.getElementById('logo-honda')


buttonSelect.addEventListener('click', function(event){

    if(cbabsred.classList.contains('active')){
        cbabsred.classList.remove('active');
        cbabsblue.classList.add('active');
    } else {
        cbabsblue.classList.remove('active');
        cbabsred.classList.add('active');
    }
   
    


})


