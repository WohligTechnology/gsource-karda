app
  .controller('orderCtrl', function ($scope) {

     $scope.allOrdersStagesData = [
      { 
        name: 'Mark', recievedTime: '2017-01-22 19:25:14', status: 'pending', 
        amount: '1425', action: ''},
      { 
        name: 'Jacob', recievedTime: '2017-01-22 19:25:14', status: 'pending', 
        amount: '7425', action: '' },
      { 
        name: 'Mary', recievedTime: '2017-01-22 19:25:14', status: 'pending', 
        amount: '1925', action: '' },
      { 
        name: 'Marv', recievedTime: '2017-01-22 19:25:14', status: 'pending', 
        amount: '1425', action: '' },
      { 
        name: 'Larry', recievedTime: '2017-01-22 19:25:14', status: 'pending', 
        amount: '1825', action: '' },
      { 
        name: 'Jennifer', recievedTime: '2017-01-22 19:25:14', status: 'pending', 
        amount: '9425', action: '' },
      { 
        name: 'Sly', recievedTime: '2017-01-22 19:25:14', status: 'pending', 
        amount: '1455', action: '' },
      { 
        name: 'Arnold', recievedTime: '2017-01-22 19:25:14', status: 'pending', 
        amount: '1427', action: '' },
      { 
        name: 'Jack', recievedTime: '2017-01-22 19:25:14', status: 'pending', 
        amount: '14475', action: '' }
    ];

    $scope.selectedAll = false;

    $scope.selectAll = function () {
      angular.forEach($scope.allOrdersStagesData, function(order) {
        order.selected = $scope.selectedAll;
      });
    };



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
