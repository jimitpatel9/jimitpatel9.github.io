describe('loginCtrlTest', function() {
  var $scope,loginCtrl;
  describe('$scope.validateLogin',function ( ){
    beforeEach(module('app'));

    beforeEach(inject(function ($controller, $rootScope) {
      $scope = $rootScope.$new();
      loginCtrl = $controller('loginCtrl', {
        $scope: $scope
      });
    }));
    it('validate the user login', function() {

      var controller = loginCtrl;

      expect($scope.foo).toEqual('foo');
    });
  });
});