require('dotenv').config()
module.exports ={
        

    Before : function(browser){
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

    },


    'Add a Task'(browser)
    {
        const pageMain = browser.page.mainPage()
        pageMain
            .waitElement('@inbox')
            .waitElement('@warningBtn')
            .clickBtn('@warningBtn')
            .pause(3000)
            .waitElement('@addtaskIcon')
            .clickBtn('@addtaskIcon')
            .waitElement('@tasknameField')
            .setValue('@tasknameField', 'Only one task test')
            .pause(2000)
            .waitElement('@submittaskBtn')
            .pause(2000)
            .clickBtn('@submittaskBtn')
            .pause(2000)
            .expect.element('@allTasks').text.to.contain('Only one task test')
        pageMain.clickBtn('@completeTask')
            .pause(2000)
        
    },

    'Add multiple Task'(browser)
    {
        const pageMain = browser.page.mainPage()
       
        for(let i= 0; i<10; i++)
        {
            pageMain
                .waitElement('@tasknameField')
                .pause(2000)
                .setValue('@tasknameField', 'Task ' + [i+1])
                .pause(2000)
                .waitElement('@submittaskBtn')
            pageMain.clickBtn('@submittaskBtn')
                .pause(2000)
                .expect.element('@allTasks').text.to.contain('Task ' + [i+1])
            pageMain.clickBtn('@completeTask')
                .pause(2000)

        }
        
       
    }
}



