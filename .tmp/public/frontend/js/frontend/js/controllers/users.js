app
  .controller('userCtrl', function ($scope) {
    $scope.tableHeader = [
      {head:'FirstName'},
      {head:'LastName'},
      {head:'Email'},
      {head:'DOB'},
      {head:'Mobile'}
    ]; 

    $scope.selectedAll = false;

    $scope.allUsersTempData = [
      {firstName :'John',lastName:'Doe',email:'john@gmail.com',dob:'21-12-1996', mobile:'6627143047'},
      {firstName :'Amit',lastName:'Banana',email:'amit@gmail.com',dob:'11-04-1996', mobile:'6627587487'},
      {firstName :'Ashish',lastName:'Apple',email:'ashish@gmail.com',dob:'10-02-1996', mobile:'6627458967'},
      {firstName :'Suksha',lastName:'Orange',email:'john@gmail.com',dob:'19-11-1996', mobile:'8758985685'},
      {firstName :'Aaditya',lastName:'Strobery',email:'john@gmail.com',dob:'21-01-1996', mobile:'9858585896'} 
    ];

    $scope.selectAll = function () {
      angular.forEach($scope.allUsersTempData, function(user) {
        user.selected = $scope.selectedAll;
      });
    }

  })

  .controller('ModalsCtrl', function ($scope) {
    $scope.page = {
      title: 'Modals',
      subtitle: 'Place subtitle here...'
    };
  })

  .controller('ModalDemoCtrl', function ($scope, $uibModal, $log) {

    $scope.open = function(size) {

      var modalInstance = $uibModal.open({
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  })

  // Please note that $modalInstance represents a modal window (instance) dependency.
  // It is not the same as the $modal service used above.

  .controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

    $scope.items = items;
    $scope.selected = {
      item: $scope.items[0]
    };

    $scope.createUser = function () {

      // Make API call to submit selected data
      $uibModalInstance.close($scope.selected.item);
    };

    $scope.editUser = function () {

      // Make API call to submit selected data
      $uibModalInstance.close($scope.selected.item);
    };


    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  })

  .controller('SplashDemoCtrl', function ($scope, $uibModal, $log) {
    // $scope.items = ['item1', 'item2', 'item3'];

    $scope.openSplash = function(event, size) {

      var options = angular.element(event.target).data('options');
      var id = angular.element(event.target).data('id');

      //console.log(id); 

      if(id == "create"){
        var modalInstance = $uibModal.open({
        templateUrl: 'createClient.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        backdropClass: 'splash' + ' ' + options,
        windowClass: 'splash' + ' ' + options,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });
    }else if(id == "edit"){
        var modalInstance = $uibModal.open({
        templateUrl: 'editClient.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        backdropClass: 'splash' + ' ' + options,
        windowClass: 'splash' + ' ' + options,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });
    }

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  });
