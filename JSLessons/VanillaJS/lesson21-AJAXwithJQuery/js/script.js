$(function(){
    $('button').click(function(){
        $('p').load('../data/test.txt p',()=>{console.log('melumat ugurla yuklendi')})
    })
})