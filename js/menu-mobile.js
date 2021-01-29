$(function(){
    $('nav.mobile h3').click(function(){
        var listaMenu = $('nav.mobile ul');
        if(listaMenu.is(':hidden') == true){
            var icone = $('h3').find('i');
            icone.removeClass('fas fa-bars');
            icone.addClass('fas fa-times');
            listaMenu.slideToggle();
        }
        else{
            var icone = $('h3').find('i');
            icone.removeClass('fas fa-times');
            icone.addClass('fas fa-bars');
            listaMenu.slideToggle();
        }
    });
})


