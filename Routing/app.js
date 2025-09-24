var app = angular.module('myApp', ['ngRoute']);

// Route Configuration
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            template: '<h2>Home Page</h2><p>Welcome to our application!</p>' +
                '<button ng-click="showAlert()">Click Me</button>',
            controller: 'HomeController'
        })
        .when('/about', {
            template: '<h2>About Us</h2><p>We are a great company!</p>',
            controller: 'AboutController'
        })
        .when('/users', {
            templateUrl: 'users.html',
            controller: 'UsersController'
        })
        .when('/contact', {
            template: '<h2>Contact Us</h2>' +
                '<form>' +
                '<input type="text" placeholder="Your Name" ng-model="contact.name">' +
                '<button type="submit">Send</button>' +
                '</form>',
            controller: 'ContactController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

// Controllers
app.controller('HomeController', function ($scope) {
    $scope.showAlert = function () {
        alert('Hello from Home Controller!');
    };
});

app.controller('AboutController', function ($scope) {
    $scope.companyInfo = "Founded in 2020";
});

app.controller('UsersController', function ($scope) {
    $scope.users = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
    ];
});

app.controller('ContactController', function ($scope) {
    $scope.contact = {};
});