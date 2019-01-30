var casper = require('casper').create();

var ex = require('casper').selectXpath;

this.start('link');

this.then(function (){
    this.sendKeys('#search_teams', 'Stubborn Love');
    this.capture('ourImaga.png');
});

this.thenClick(ex("//*[@id='term']"), function () {
    this.capture('my.png');
});

this.wait(5000, function (){
    this.capture("my2.png");
});




this.run();