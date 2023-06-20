const angularModule = angular.module('angularModule', ['ngRoute'])

angularModule.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: './views/home.html'
        })
        .when('/contact', {
            templateUrl: './views/contact.html'
        })
        .when('/gallery', {
            templateUrl: './views/gallery.html'
        })
        .when('/about', {
            templateUrl: './views/about.html'
        })
        .otherwise({ redirectTo: '/'});
}])


angularModule.controller('NavbarController', ['$scope', '$location', '$route', function($scope, $location){
    $scope.url = $location.path()
    $scope.date = new Date("2023-07-02")

    $scope.currentPath = ''
    $scope.$on('$routeChangeSuccess', function() {
        $scope.currentPath = $location.path();
        console.log($scope.currentPath, typeof $scope.currentPath); // Outputs the updated current path whenever it changes
    });

    $scope.isActive = function(route) {
        return $scope.currentPath === route;
    };

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
            id: 1,
            name: 'Home',
            style: 'home'
        },
        {
            id: 2,
            name: 'Gallery',
            style: ''
        },
        {
            id: 3,
            name: 'About Us',
            style: ''
        },
        {
            id: 4,
            name: 'Contact Us',
            style: ''
        }
    ]

    $scope.username = 'Godrice'
    
    $scope.formData = {}
    $scope.isUsernameModalOpen = false

    $scope.openUsernameModal = function(){
        $scope.isUsernameModalOpen = !$scope.isUsernameModalOpen

    }

    $scope.addUsername = function(){
        $scope.username = $scope.formData.username
        return false
    }

}])


angularModule.controller('CountdownController', ['$scope', '$interval', '$timeout', function($scope, $interval, $timeout){

   
    $scope.countDownDate = new Date("Feb 16, 2024 00:00:00").getTime();
    $scope.days
    $scope.hours
    $scope.minutes
    $scope.seconds

    $scope.getTimeInterval = function(){
        $scope.now = new Date().getTime();
        $scope.distance = $scope.countDownDate - $scope.now;

        $scope.days = Math.floor($scope.distance / (1000 * 60 * 60 * 24));
        $scope.hours = Math.floor(($scope.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        $scope.minutes = Math.floor(($scope.distance % (1000 * 60 * 60)) / (1000 * 60));
        $scope.seconds = Math.floor(($scope.distance % (1000 * 60)) / 1000);
        
    }; 



    $interval($scope.getTimeInterval, 1000)
      
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

    $timeout(function(){
        const upcomingAuctionSwiper = new Swiper('.upcoming-auction-swiper', {
            // slidesPerView: 1,
            speed: 1000,
            spaceBetween: 24,
            loop: true,
            // loopedSlides: 3,
            roundLengths: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: 'true',
            },
            navigation: {
                nextEl: '.swiper-next-arrow',
                prevEl: '.swiper-prev-arrow',
            },
    
            breakpoints: {
                480: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                },
    
            }
        });

        const heroSwiper = new Swiper('.hero-swiper', {
            autoplay: {
              delay: 2000,
              disableOnInteraction: false,
            },
            loop: true,
          
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            slidesPerView: 5,
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        
            spaceBetween: 10,
        
            breakpoints: {
              // when window width is >= 320px
              320: {
                slidesPerView: 2,
                spaceBetween: 20
              },
        
              767: {
                slidesPerView: 3,
                spaceBetween: 15
              },
              1100: {
                slidesPerView: 5,
                spaceBetween: 10
              }
            },
        
            transition: {
              name: 'carousel-animation',
              duration: 300,
              easing: 'ease-in-out'
            },
        
            scrollbar: {
              el: '.swiper-scollbar',
              hide: true
            },
            on: {
              
            }
        })
        
        heroSwiper.autoplay.start()
        
    }, 0)

       



        
}])

angularModule.controller('TestimonialController', ['$scope', '$timeout', function($scope, $timeout){
    $timeout(function(){
        var swiper = new Swiper(".testimonial-swiper", {
            slidesPerView: 1,
            speed: 1000,
            spaceBetween: 24,
            loop: true,
            roundLengths: true,
            navigation: {
              nextEl: '.testimonial-button-next',
              prevEl: '.testimonial-button-prev',
            },
        
            breakpoints: {
              280: {
                slidesPerView: 1
              },
              480: {
                slidesPerView: 1,
                autoplay: true,
              },
              768: {
                slidesPerView: 1
              },
              992: {
                slidesPerView: 2
              },
              1200: {
                slidesPerView: 3
              },
        
            }
        })
    }, 0)
}])
