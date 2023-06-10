const angularModule = angular.module('angularModule', [])


angularModule.controller('NavbarController', ['$scope', function($scope){
    $scope.message = "Hey World!"
    $scope.date = new Date("2023-07-02")
    

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


angularModule.controller('CountdownController', ['$scope', '$interval', function($scope, $interval){

   
    // $scope.countDownDate = new Date("Oct 16, 2023 00:00:00").getTime();
    // $scope.days
    // $scope.hours
    // $scope.minutes
    // $scope.seconds

    // $scope.getTimeInterval = function(){
    //     $scope.now = new Date().getTime();
    //     $scope.distance = $scope.countDownDate - $scope.now;

    //     $scope.days = Math.floor($scope.distance / (1000 * 60 * 60 * 24));
    //     $scope.hours = Math.floor(($scope.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //     $scope.minutes = Math.floor(($scope.distance % (1000 * 60 * 60)) / (1000 * 60));
    //     $scope.seconds = Math.floor(($scope.distance % (1000 * 60)) / 1000);
        
    // }; 



    // $interval($scope.getTimeInterval, 1000)
      
    $scope.liveAuctionCard = [
        {
            name: "Alarm Clock 1990's",
            currentBid: "739.0$",
            imgPath: "images/time-antique-product.jpg",
            endDate: new Date("Oct 16, 2023 00:00:00").getTime(),
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        },
        {
            name: "Premium 1998 Typewriter",
            currentBid: "2,820,104.0$",
            imgPath: "images/typewriter-antique-product.jpg",
            endDate: new Date("Sep 1, 2023 00:00:00").getTime(),
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        },
        {
            name: "Macbook Pro 2018",
            currentBid: "30,007.0$",
            imgPath: "images/macbook-antique-product.jpg",
            endDate: new Date("Feb 16, 2024 00:00:00").getTime(),
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        },
        {
            name: "Black Analogue Watch",
            currentBid: "235.9$",
            imgPath: "images/watch-antique-product.jpg",
            endDate: new Date("July 2, 2023 00:00:00").getTime(),
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        },
        {
            name: "Ford Shelby White Car",
            currentBid: "5,898.9$",
            imgPath: "images/car-antique-product.jpg",
            endDate: new Date("July 22, 2023 00:00:00").getTime(),
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        },
        {
            name: "Stylish Digital Airpods",
            currentBid: "130.0$",
            imgPath: "images/airpods-antique-products.jpg",
            endDate: new Date("September 28, 2023 00:00:00").getTime(),
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        }
    ]

    $scope.updateCountdown = function(){
        $scope.now = new Date().getTime();
        angular.forEach($scope.liveAuctionCard, function(liveAuctionCard){
            $scope.endDate =  liveAuctionCard.endDate

            
            $scope.distance = $scope.endDate - $scope.now;

            $scope.days = Math.floor($scope.distance / (1000 * 60 * 60 * 24));
            $scope.hours = Math.floor(($scope.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            $scope.minutes = Math.floor(($scope.distance % (1000 * 60 * 60)) / (1000 * 60));
            $scope.seconds = Math.floor(($scope.distance % (1000 * 60)) / 1000);

            liveAuctionCard.days = $scope.days
            liveAuctionCard.hours = $scope.hours
            liveAuctionCard.minutes = $scope.minutes
            liveAuctionCard.seconds = $scope.seconds

        })
    }

    $scope.updateCountdown()

    $interval($scope.updateCountdown, 1000)

}])


