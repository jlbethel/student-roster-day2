studentRoster.controller('FieldTripsCtrl', function FieldTripsCtrl($scope) {
  $scope.addStudentsWithPermissionSlip = function(student) {
    student.permissionSlip = true;
  };
});
