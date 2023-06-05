const angularModule = angular.module('angularModule', [])


angularModule.controller('ParagraphController', ['$scope', function($scope){
    $scope.message = "Hey World!"
    $scope.ninjas = [{
        name: 'Yoshi',
        belt: 'black',
        rate: 2,
        available: true
    },
    {
        name: 'Crystal',
        belt: 'yellow',
        rate: 3,
        available: false
    },
    {
        name: 'Ryu',
        belt: 'Orange',
        rate: 4,
        available: true
    },
    {
        name: 'Shaun',
        belt: 'Golden',
        rate: 5,
        available: false
    }
]

$scope.navLinks = [
    {
        name: 'Home'
    },
    {
        name: 'Gallery'
    },
    {
        name: 'About Us'
    },
    {
        name: 'Contact Us'
    }
]
}])


