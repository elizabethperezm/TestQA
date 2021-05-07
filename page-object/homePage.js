module.exports = {
    url:'https://todoist.com',
    elements:
    {
        loginButton :'ul._3XsmI li:nth-child(1) > a._2q_cf'  

    },
    commands:[{
        clickBtn(selector){
            return this
                .click(selector)
            
        },
        waitElement(selector){
            return this
                .waitForElementVisible(selector)
            
        }
    }]


}
