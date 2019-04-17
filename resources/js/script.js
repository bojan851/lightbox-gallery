$(document).ready(function() {
    //3
    var current_li;
    
    
    //Zadnja stvar-dodavanje search funckije    
    $("#search").keyup(function(){
       var current_query = $("#search").val();
        
        if(current_query != "") {
            
            $("#portfolio li").hide();
        
            $("#portfolio li").each(function(){
            
                var current_keyword = $(this).attr("data-keywords");
            
                if(current_keyword.indexOf(current_query) >=0) {
                $(this).show();
            }
            
        });  
            
        } else {
            $("#portfolio li").show();
        }
        
                
        
    });
    
    
    
    
    
    
    function setImg(src,id){
        $("#main").attr("src", src);
        var path = "resources/text/"+id+".txt";
        $.get(path, function(data){
            $("#description p").html(data);
        });
    }
    
    
    //1
    $("#portfolio img").click(function(){
        var src = $(this).attr("src");
        var id = $(this).attr("id"); //dodata varijabla
        current_li = $(this).parent(); //korak 3, selektovanje <li> iz liste
        
       // $("#main").attr("src", src); -prebaceno u setImg funkciju iznad
        setImg(src, id); //pozvana funckija 
        $("#frame").fadeIn();
        $("#overlay").fadeIn();
    });
    
    
    //2 Kada se klikne sa strane slika se zatvara
    $("#overlay").click(function(){
        $(this).fadeOut();
        $("#frame").fadeOut();
    });

    
    //3 Programiranje strelica, poslije ubacivanja u html/css
    $("#right").click(function(){
        
        if (current_li.is(":last-child")){  //4 - rjesavanja problema sa listanjem poslije zadnje slike
            var next_li = $("#portfolio li").first();
        } else {
            var next_li = current_li.next();
        }
        
       // - ubaceno gore u 4. koraku var next_li = current_li.next();
        var next_src = next_li.children("img").attr("src");
        var id = next_li.children("img").attr("id"); //dodato sada za ajax
        
        $("#main").attr("src", next_src);
        setImg(next_src, id); //dodato za ajax
        current_li = next_li //da radi za vise od jedne slike
    });
    
    $("#left").click(function(){
        
        if (current_li.is(":first-child")){  //4 - rjesavanja problema sa listanjem poslije zadnje slike
            var prev_li = $("#portfolio li").last();
        } else {
            var prev_li = current_li.prev();
        }
        
        // - ubaceno gore u 4. koraku var prev_li = current_li.prev();
        var prev_src = prev_li.children("img").attr("src");
        var id = prev_li.children("img").attr("id");  //dodato sada za ajax
        
        setImg(prev_src, id);
        
        current_li = prev_li //da radi za vise od jedne slike
    });
    
});