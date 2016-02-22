'use strict';

describe('Service: province', function () {

  // load the service's module
  beforeEach(module('bookAroomApp'));

  // instantiate service
  var province;
  beforeEach(inject(function (_province_) {
    province = _province_;
  }));

  it('should do something', function () {
    expect(!!province).toBe(true);
  });

});
