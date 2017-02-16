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

    $scope.createUser = function () {

      // Make API call to submit selected data
      $uibModalInstance.close($scope.selected.item);
      console.log("Selected Item is" + $scope.selected.item);
    };

    $scope.editUser = function () {

      // Make API call to submit selected data
      $uibModalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  })

  // .controller('ModalDemoCtrl', function ($scope, $uibModal, $log) {

  //   $scope.open = function(size) {

  //     var modalInstance = $uibModal.open({
  //       templateUrl: 'myModalContent.html',
  //       controller: 'ModalInstanceCtrl',
  //       size: size,
  //       resolve: {
  //         items: function () {
  //           return $scope.items;
  //         }
  //       }
  //     });

  //     modalInstance.result.then(function (selectedItem) {
  //       $scope.selected = selectedItem;
  //     }, function () {
  //       $log.info('Modal dismissed at: ' + new Date());
  //     });
  //   };
  // })

  .controller('SplashDemoCtrl', function ($scope, $uibModal, $log) {
  
    $scope.openSplash = function(evegnt, size) {

      var options = angular.element(event.target).data('options');
      var id = angular.element(event.target).data('id');

      // detect id & open corresponding view 
      if(id == "create"){
        var modalInstance = $uibModal.open({
        templateUrl: 'createClient.html',     
        controller: 'userCtrl',      // assign controller for corresponding view
        size: size,
        backdropClass: 'splash' + ' ' + options,
        windowClass: 'splash' + ' ' + options
      });
     }else if(id == "edit"){
        var modalInstance = $uibModal.open({
        templateUrl: 'editClient.html',
        controller: 'userCtrl',
        size: size,
        backdropClass: 'splash' + ' ' + options,
        windowClass: 'splash' + ' ' + options
      });
    }

    modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
        $log.info('Selected Data:' + selected);
      }, function () { 
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  });
