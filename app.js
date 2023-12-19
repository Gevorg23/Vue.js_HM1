new Vue({
    el: '#app',
    data: {
        buttonText: 'Перевернуть',
        reversedText: '',
        itemList: ['Элемент списка 1', 'Элемент списка 2', 'Элемент списка 3']
    },
    methods: {
        reverseText() {
            this.reversedText = this.buttonText.split('').reverse().join('');
        },
        addItem() {
            this.itemList.push('Новый элемент списка');
        },
        removeItem(index) {
            this.itemList.splice(index, 1);
        }
    }
});
