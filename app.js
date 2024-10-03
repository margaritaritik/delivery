
           
            const dropdownContent = document.querySelector('.dropdown-content');
            const img_delivery = dropdownContent.querySelector('.img_delivery');
            const dropbtn = dropdownContent.querySelector('.dropbtn');
            const checkboxes = dropdownContent.querySelectorAll('input[type="radio"]');
            
            function DeliveryClick(id) {
                
                const block = id.closest('.item_delivery');
               
                const block_dropdown = id.closest('.dropdown');
                // console.log();
                block_dropdown.querySelector('.dropdown-content').classList.toggle('show');
                id.classList.toggle('show_points');
                id.classList.remove('hide_points');
                block.querySelector('.img_delivery').classList.toggle('img_delivery_hide');
               
                
            }
            
    
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
  