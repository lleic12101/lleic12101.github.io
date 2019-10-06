var ctx = document.getElementById('myChart').getContext('2d');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
		labels: ['2019-09-03', '2019-09-04', '2019-09-06', '2019-09-10', '2019-09-11', 
				'2019-09-13', '2019-09-14', '2019-09-16', '2019-09-17', '2019-09-18'],
		 datasets: [{
            backgroundColor: 'transparent',
            borderColor: '#36a2eb',
			borderWidth: 3,
            data: [0, 0, 0, 2, 3, 3, 2, 3, 1, 0]
		},{
            backgroundColor: 'transparent',
            borderColor: '#ffa500',
			borderWidth: 3,
            data: [4, 2, 1, 3, 5, 4, 3, 4, 4, 5]
		},{
            backgroundColor: 'transparent',
            borderColor: '#ff6384',
			borderWidth: 3,
            data: [2, 1, 3, 0, 1, 3, 4, 2, 3, 2]
		},{
            backgroundColor: 'transparent',
            borderColor: '#9966ff',
			borderWidth: 3,
            data: [6, 5, 4, 4, 2, 1, 0, 0, 0, 0]
		}],
	},
	options: {
	 legend: {
            display: false
        }
	}
});