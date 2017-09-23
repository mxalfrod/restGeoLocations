'use strict';

describe('Service: earthQuakesService', function () {

  // load the service's module
  beforeEach(module('documentsApp'));

  // instantiate service
  var earthQuakesService;
  beforeEach(inject(function (_earthQuakesService_) {
    earthQuakesService = _earthQuakesService_;
  }));

  it('should do something', function () {
    expect(!!earthQuakesService).toBe(true);
  });

});
