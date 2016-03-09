var libgen = require('.');

var options = {
  mirror: 'http://gen.lib.rus.ec',
  query: 'python programming',
  count: 5
};
libgen.search(options,function(err,data){
  if (err) return console.error(err);
  var n = data.length;
  console.log('top ' + n + ' results for "' +
             options.query + '"');
  while (n--){
    console.log('***********');
    console.log('Title: ' + data[n].Title);
    console.log('Author: ' + data[n].Author);
    console.log('Download: ' +
                'http://gen.lib.rus.ec/book/index.php?md5=' +
                data[n].MD5.toLowerCase());
  }
});
