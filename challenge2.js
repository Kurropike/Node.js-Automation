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

    it("Should run a search for 'exotics'", async function() {
        var element = await driver.findElement(By.xpath('//form[@id="search-form"]//input'));
        return element.sendKeys("exotics" + Key.ENTER)
    });
    it("should assert that PORSCHE is in list of results", async function() {
        await driver.wait(until.titleContains('exotics'), 10000);
        console.log(await driver.getTitle());
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//table[@id="serverSideDataTable"]'))))
        var html = await driver.findElement(By.id("serverSideDataTable")).getAttribute('innerHTML');
        return assert.include(html, "PORSCHE")
    });
 
 
});
