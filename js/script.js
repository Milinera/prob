document.querySelectorAll('.main_str_item').forEach((item, index, items) => {
    item.addEventListener('click', () => {
        let toggle = true;
        for (let i = index; i < items.length; i++) {
            if (toggle) {
                items[i].classList.add('main_str_item_work');
            } else {
                items[i].classList.remove('main_str_item_work');
            }
            if ((i - index + 1) % 2 === 0) {
                toggle = !toggle;
            }
        }
    });
});