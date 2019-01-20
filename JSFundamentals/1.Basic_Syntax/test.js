var casper = require('casper').create();

var x = require('casper').selectXpath;

casper.start('http://youtube.com');

casper.then(function () {
    this.sendKeys('#search_item', 'Stubborn Love');
    casper.capter('ourImage.png')
});

casper.thenClick(x('//*[@id="search_items"]'), function () {
    console.log('Searching Itunes')
});