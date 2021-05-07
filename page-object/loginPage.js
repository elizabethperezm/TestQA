module.exports = {
    url:'https://www.saucedemo.com',
    elements:
    {
        username :'#email',
        password: '#password',
        loginButton: 'button.submit_btn.ist_button.ist_button_red.sel_login:nth-child(7)',
        errorMessage: 'div.error_msg > span:nth-child(2)'

    },
    commands:[{
        clickBtn(selector){
            return this
                .click(selector)
            
        },
        waitElement(selector){
            return this
                .waitForElementVisible(selector)
            
        },
        setUsername(username) {
            this
                .waitForElementVisible('@username')
                .setValue('@username', `${username}`)
            return this
        },
      
        setPassword(password) {
            this
                .waitForElementVisible('@password')
                .setValue('@password', `${password}`)
            return this
        }
    }]


}
