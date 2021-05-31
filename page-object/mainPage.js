module.exports = {
    url:'https://todoist.com',
    elements:
    {
        inbox :'#filter_inbox' ,
        addtaskIcon : 'button.plus_add_button > span.icon_add',
        submittaskBtn : '.ist_button_red',
        cancelBtn : 'button.cancel',
        tasknameField : 'div.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr',
        allTasks : 'div.markdown_content.task_content',
        completeTask: '.task_checkbox__circle',
        warningBtn: 'a.timezone_link.timezone_link_block:nth-child(4)'

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