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
        }
    }
});