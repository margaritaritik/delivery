document.querySelectorAll('.delivery-option').forEach(option => {
    const selectedDelivery = option.querySelector('.selected-delivery');
    const comboBox = option.querySelector('.combo-box');

    selectedDelivery.addEventListener('click', () => {
        // Закрыть все остальные комбобоксы
        document.querySelectorAll('.combo-box').forEach(box => {
            if (box !== comboBox) {
                comboBox.classList.toggle('hidden_points');
                selectedDelivery.classList.toggle('hide_points');
            }
        });

        // Показать/скрыть текущий комбобокс
        selectedDelivery.textContent = 'Способ доставки';
        comboBox.classList.remove('hidden_points');
        selectedDelivery.classList.remove('hide_points');
        comboBox.classList.toggle('show');
        selectedDelivery.classList.toggle('show_points');
    });

    option.querySelectorAll('.option').forEach(opt => {
        opt.addEventListener('click', () => {
            selectedDelivery.textContent = opt.dataset.option; // Устанавливаем выбранный способ доставки
            comboBox.classList.toggle('hidden_points');
                comboBox.classList.remove('show');
                selectedDelivery.classList.toggle('hide_points');  
                selectedDelivery.classList.remove('show_points');
        });
    });
});