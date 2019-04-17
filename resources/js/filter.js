$(function(){
    
    $("#filter li").click(function(){
       
        var category = $(this).html();
        
        $("#filter li").removeClass("active"); //dodato poslije addClass
        
        $(this).addClass("active"); //Dodato poslije stilizovanja filtera
        
        $("#portfolio li").fadeOut();
        
        $("#portfolio li").each(function(){
           
            if($(this).hasClass(category)){
                $(this).fadeIn();
            }
            
        });
        
    });
    
    
    
});