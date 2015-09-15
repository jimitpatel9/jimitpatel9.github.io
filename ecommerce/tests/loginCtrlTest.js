describe('Product Filter Test', function() {
  beforeEach(module('app'));
  var $filter;

  beforeEach(inject(function(_$filter_){
    $filter = _$filter_;
  }));

  it('returns array of object', function() {
    var productFilter = $filter('productFilter');
    var testData=[{name:'jimit',age:2},
                {name:'nimit',age:3},
                {name:'rahul',age:2}
                ];
    var output=[{name:'jimit',age:2},
                {name:'nimit',age:3}];
    expect(productFilter(testData ,'i' )).toEqual(output);
  });
});