$(document).ready(function(){
    //hamburger를 클릭하면 할일
    //nav 보이기

    $('.nav .menu').mouseenter(function(){
        $('.border').show()
        $('.nav .menu > li > ul').show()


    })
    $('.nav .menu').mouseleave(function(){
        $('.border').hide()
        $('.nav .menu > li > ul').hide()
    })

    /////////////////////////////////////////////

    $('.btn1, .btn3, .btn5, .btn8').click(function(){
        $('.ab-img2').show()
        $('.ab-img1').hide()
        $('.ab-img3').hide()
    })
    $('.btn2, .btn4, .btn6, .btn7').click(function(){
        $('.ab-img1').show()
        $('.ab-img2').hide()
        $('.ab-img3').hide()
    })
    $('.btn9, .btn10').click(function(){
        $('.ab-img3').show()
        $('.ab-img1').hide()
        $('.ab-img2').hide()
    })
    // /////////////////////////////////////////////////////////////////


    $(function(){
        //tab nav에 있는 li를 클릭했을때 할 일
        //a의 동작을 막고
        //tabnav li 안에 a를 찾아서 active 클래스 삭제
        //내가 선택한 li한테 active 클래스 추가
        $('.ab-button ul li').click(function(e){
            e.preventDefault();
            $('.ab-button ul li').find('a').removeClass('active')
            $(this).find('a').addClass('active')
            $('.ab-state').eq(idx).show()
        })
    })
       
    ////////////////////////////
    $('.default .btnl').click(function(){
        $('.default-left').toggle()
    })
    $('.default .btnr').click(function(){
        $('.default-right').toggle()
    })

    //////////////////////
    $('.gotop').click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop : 0
        },300)
    })

})


