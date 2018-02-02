const {Builder, By, Key, until} = require('selenium-webdriver');
let driver = new Builder()
    .forBrowser('firefox')
    .build();

    driver.get('http://localhost:3000/index/index');
    driver.findElement(By.id('J_praiseBtn')).click();
    driver.quit();
