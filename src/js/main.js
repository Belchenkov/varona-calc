$(document).ready(function(){

   

});     

new Vue({
    el: '#calc',
    data: {
        amountComp: 5,
        amountServer: 5,
        basePlan: false
    },
    methods: {
        rangeComp: function (event) {
            this.total = event.target.value;
        },
        rangeServer: function (event) {
            this.total = event.target.value;
        },
        plansBtn: function (event) {
            var currentEl = event.target;
            var buttons = document.querySelectorAll('.plans-btn__item');
            var basic = document.querySelector('.basic');
            var standart = document.querySelector('.standart');
            var premium = document.querySelector('.premium');
            var vip = document.querySelector('.vip');

            if(currentEl.classList.contains('basic') && !this.basePlan) {
                currentEl.classList.add('plans-btn__item-checked');
                standart.classList.remove('plans-btn__item-checked');
                premium.classList.remove('plans-btn__item-checked-pre-vip');
                vip.classList.remove('plans-btn__item-checked-pre-vip');
            }

            if (currentEl.classList.contains('standart')) {
                currentEl.classList.add('plans-btn__item-checked');
                basic.classList.remove('plans-btn__item-checked');
                premium.classList.remove('plans-btn__item-checked-pre-vip');
                vip.classList.remove('plans-btn__item-checked-pre-vip');
            }

            if(currentEl.classList.contains('premium')) {
                currentEl.classList.add('plans-btn__item-checked-pre-vip');
                standart.classList.remove('plans-btn__item-checked');
                basic.classList.remove('plans-btn__item-checked');
                vip.classList.remove('plans-btn__item-checked-pre-vip');
            }

            if (currentEl.classList.contains('vip')) {
                currentEl.classList.add('plans-btn__item-checked-pre-vip');
                basic.classList.remove('plans-btn__item-checked');
                standart.classList.remove('plans-btn__item-checked');
                premium.classList.remove('plans-btn__item-checked-pre-vip');
            }

        }

    }
});