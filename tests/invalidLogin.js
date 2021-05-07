require('dotenv').config()
module.exports ={
    'Invalid Login Tests'(browser)
    {
        const invalidEmail= process.env.INVALID_USER
        const passwordvalue= process.env.INVALID_PASSWORD
        const page= browser.page.homePage()
        const pageLogin= browser.page.loginPage()

        
        page
            .navigate()
            .waitElement('@loginButton')
            .assert.title('Todoist: The to do list to organize work & life')
            .clickBtn('@loginButton')

        pageLogin
            .waitElement('@username')
            .assert.title('Log in to Todoist')
            .clickBtn('@loginButton')
            .expect.element('@errorMessage').text.to.equal('Invalid email address.')
        pageLogin.setUsername(invalidEmail)
            .clickBtn('@loginButton')
            .expect.element('@errorMessage').text.to.equal('Blank password.')
        pageLogin.setPassword(passwordvalue)
            .clickBtn('@loginButton')
            .waitElement('@errorMessage')
            .expect.element('@errorMessage').text.to.equal('Wrong email or password.')  
    }

}