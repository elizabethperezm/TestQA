require('dotenv').config()
module.exports ={
    'Valid Login Test'(browser)
    {
        const usernamevalue= process.env.VALID_USER
        const passwordvalue= process.env.VALID_PASSWORD
        const page= browser.page.homePage()
        const pageLogin= browser.page.loginPage()
        const pageMain = browser.page.mainPage()

        
        page
            .navigate()
            .waitElement('@loginButton')
            .assert.title('Todoist: The to do list to organize work & life')
            .clickBtn('@loginButton')
        pageLogin
            .waitElement('@username')
            .assert.title('Log in to Todoist')
            .setUsername(usernamevalue)
            .setPassword(passwordvalue)
            .clickBtn('@loginButton')

        pageMain
            .waitElement('@inbox')
            .assert.title('Today: Todoist')
    }


}
