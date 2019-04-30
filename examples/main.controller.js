
angular.module('plunker', ['angularCharts']);

function MainCtrl($scope) {
$scope.config = {
title: 'Products',
tooltips: true,
labels: false,
mouseover: function() {},
mouseout: function() {},
click: function() {},
legend: {
display: false,
//could be 'left, right'
position: 'right'
},
height:100,
width:100
};

$scope.data = {
series: ['Sales', 'Income', 'Expense', 'Laptops', 'Keyboards'],
data: [{
x: "Laptops",
y: [10],
tooltip: "this is tooltip"
}, {
x: "Desktops",
y: [50]
}, {
x: "Mobiles",
y: [30]
}]
};
} 
 


	$scope.chartType = 'pie';

	$scope.config1 = {
		labels: false,
		title: "Products",
		legend: {
			display: true,
			position: 'left'
		},
		innerRadius: 0
	};

	$scope.config2 = {
		labels: false,
		title: "HTML-enabled legend",
		legend: {
			display: true,
			htmlEnabled: true,
			position: 'right'
		},
		lineLegend: 'traditional'
	}
}
