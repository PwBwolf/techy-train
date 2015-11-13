angular.module('app').controller('mvMainCtrl', function($scope) {
  $scope.courses = [
    {name: 'C# for Cociopaths', featured: true, published: new Date('01/20/2013')},
    {name: 'Angular and UAL', featured: true, published: new Date('12/25/2015')},
    {name: 'Burberry', featured: false, published: new Date('11/22/2015')},
    {name: 'ual in kual', featured: false, published: new Date('01/20/2013')},
    {name: 'Bose', featured: false, published: new Date('01/20/2013')},
    {name: 'Emilys Book of Eminisims', featured: true, published: new Date('011/20/2013')},
    {name: 'A Aummer in Belmar', featured: true, published: new Date('09/20/2013')},
    {name: 'Javascript Pro', featured: true, published: new Date('08/20/2013')},
    {name: 'Fact Book: Computer programing', featured: true, published: new Date('07/20/2014')},
    {name: 'MongoDB for beginners', featured: false, published: new Date('08/20/2013')},
    {name: 'Practical Node.js apps', featured: false, published: new Date('05/20/2012')},
    {name: 'Future of AngularJS', featured: true, published: new Date('04/20/2015')}
  ]
  $scope.test = 'Test Working'
})