const angularModule = angular.module('angularModule', [])


angularModule.controller('NavbarController', ['$scope', function($scope){
    $scope.message = "Hey World!"

    $scope.isHamburgerOpen = false
    $scope.count = 0
    $scope.hamburgerClass = "hamburger-menu-container"
    
    $scope.openHamburgerMenu = function(){
        $scope.isHamburgerOpen = !$scope.isHamburgerOpen
        $scope.count++
        if($scope.isHamburgerOpen){
            $scope.hamburgerClass = "hamburger-menu-container open"
        }

        else{
            $scope.hamburgerClass = "hamburger-menu-container"
        }
    }

    $scope.navLinks = [
        {
            name: 'Home',
            style: 'home'
        },
        {
            name: 'Gallery',
            style: ''
        },
        {
            name: 'About Us',
            style: ''
        },
        {
            name: 'Contact Us',
            style: ''
        }
    ]
}])


