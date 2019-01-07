const first = () => {
    console.log('frist from justExport')
}
  
  const second = () => {
    console.log('second fromt justExport')
  }

  var obj1 = {
      foo: 'bar',
      x: 42
    };

    var obj2 = {
        obj1
    }


    var a = 'foo', b = 42, c = {};
    var o = {
        a: { a: "toutoutne" }
    };
    console.log(o)

  module.exports = {
    // first,
    // second,
    obj2
  }