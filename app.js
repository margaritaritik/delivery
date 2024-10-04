const img_delivery = document.querySelector('.img_delivery');
const dropbtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');
const checkboxes = dropdownContent.querySelectorAll('input[type="radio"]');

dropbtn.addEventListener('click', function() {
    dropdownContent.classList.toggle('show');
    dropbtn.classList.toggle('show_points');
    dropbtn.classList.remove('hide_points');
    img_delivery.classList.toggle('img_delivery_hide');
    
});

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        dropdownContent.classList.remove('show');
        
        
        img_delivery.classList.remove('img_delivery_hide');
    }
};

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
         const selectedOptions = Array.from(checkboxes)
             .filter(i => i.checked)
             .map(i => i.value);
     dropbtn.textContent = selectedOptions.length > 0 ? selectedOptions.join(', ') : 'Выберите опции';
     dropbtn.classList.toggle('hide_points');
     dropbtn.classList.remove('show_points');
     
     });
});