
$('#option').on('click', function(){
    $('#profil-card').fadeToggle();
});


/*---------------------------------------*/

$('#notif').on('click', function(){
    $('#notification-card').fadeToggle();
});

/*---------------------------------------*/

$("#drop_onClick").click(function(){
    $('#my-dropdown').slideToggle();
    $('#rotation-icon').toggleClass('icon-rotate');
})

$("#drop_onClick2").click(function(){
    $('#my-dropdown2').slideToggle();
    $('#rotation-icon2').toggleClass('icon-rotate');
})

/*---------------------------------------*/
var init = 0;
$('#open-tchatbox').on('click', function(){
    $('#tchatbox').fadeToggle();
    if (init==0){
        $('#azereza').attr('src','../../adRessources/images/icons/cancel-music.svg');
        init = 1;
    }
    else{
        $('#azereza').attr('src','../../adRessources/images/icons/comments.svg');
        init = 0;
    }
});
