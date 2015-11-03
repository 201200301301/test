'use strict';

angular.module('myApp.tree', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/main', {
            templateUrl: 'tree/tree.html',
            controller: 'ctrl.tree'
        });
    }])

    .controller('ctrl.tree', function ($scope) {
    var vm = $scope.vm = {};
    vm.countries = [
        {label : "中国", provinces : [
            {label : "北京", cities : [
                {label : "朝阳区"},{label : "宣武区"},{label : "海淀区"}
            ]},
            {label : "湖北", cities : [
                {label : "武汉市"},{label : "黄冈市"},{label : "黄石市"}
            ]}
        ]},
        {label : "美国", provinces : [
            {label : "纽约", cities : [
                {label : "曼哈顿区"},{label : "皇后区"}
            ]},
            {label : "德克萨斯州", cities : [
                {label : "休斯顿"},{label : "达拉斯"}
            ]},
            {label : "加利福利亚州", cities : [
            ]}
        ]}
    ];
    vm.select = function(country, province, city) {
        vm.country = country;
        vm.province = province;
        vm.city = city;
    };
});