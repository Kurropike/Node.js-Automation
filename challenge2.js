require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var By = webdriver.By;
var Key = webdriver.Key;
var until = webdriver.until;

describe("challenge2gi suite", function(){
    this.timeout(20000);
    var driver;
    before(function () {
        driver = new webdriver.Builder()
       .withCapabilities(webdriver.Capabilities.chrome())
       .build();
    });

    after(function () {
        return driver.quit();
    });
    it("Should open the copart website", function() {
        return driver.get("http://www.copart.com");
    });
    it("Should run a search for 'exotic'", function() {
        return driver.findElement(By.xpath('//form[@id="search-form"]//input')).sendKeys('exotic' + Key.ENTER)
    });
    // it("should look at serverSideDataTable to find PORSCHE in the list", async function() {
    //     await driver.wait(until.titleContains('exotic'), 10000);
    //     console.log(await driver.getTitle());
    //     var html = await driver.findElement(By.id(''))

    // });
    
    it("The title is '100% Online Auto Auction - Copart USA - Salvage Cars for Sale in Online Car Auctions'", function() {
        return driver.getTitle().then(function(title) {
            assert.equal(title, "100% Online Auto Auction - Copart USA - Salvage Cars for Sale in Online Car Auctions");
        });
    });
    it("The title is '100% Online Auto Auction - Copart USA - Salvage Cars for Sale in Online Car Auctions'", async function() {
        var title = await driver.getTitle();
        return assert.include(title, "100% Online Auto Auction - Copart USA - ");
    });
 
 
});
