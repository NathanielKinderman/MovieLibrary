(function($){
    function processForm( e ){
        var dict = {
        	Title : this["title"].value,
        	Director: this["director"].value,
          Genre: this ["genre"].value
        };

        $.ajax({
            url: 'https://localhost:44352/api/movie',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }

    $('#my-form').submit( processForm );
})(jQuery);

//getall method so user can see all the movies from the list

(function($){

    function getAllMovies( e ){

      $.ajax({
          url: 'https://localhost:44352/api/movie',
          dataType: 'json',
          type: 'get',
          contentType: 'application/json',
          success: function( data ){
            var json = data;
            json.forEach(function(index, e)){
              var row = '<tr><td>' + e.Title + '</td><td>' + e.Direcotr + '</td><td>' + e.Genre + '</td></tr>'
              $('#all-movies tbody').append(row);
            }            
            // data needs to be looped through
              $('#response pre').html( data );
          },
          error: function( jqXhr, textStatus, errorThrown ){
              console.log( errorThrown );
          }
      });

      e.preventDefault();
    }
    //still needs on html action link name so function can be called
     $(#'all-movies').

})(jQuery);



(function($))
{function makeTable(data)
  {
     $.ajax({
      url: 'https://localhost:44352/api/movie',
      dataType: 'json',
      type: 'get',
      contentType: 'application/json',
      success: function( data ){


          $('#response pre').html( data );
      },
      error: function( jqXhr, textStatus, errorThrown ){
          console.log( errorThrown );
      }
  });

  e.preventDefault();
}







  }





}






  (function($){


    function getAllMoviesById( e ){


      $.ajax({
          url: 'https://localhost:44352/api/movie',
          dataType: 'json',
          type: 'get',
          contentType: 'application/json',
          data: JSON.stringify(dict),
          success: function( data, textStatus, jQxhr ){
              $('#response pre').html( data );
          },
          error: function( jqXhr, textStatus, errorThrown ){
              console.log( errorThrown );
          }
      });

      e.preventDefault();
    }
    //still needs on html action link name so function can be called
    $('#my-form').submit( getAllMovies );
})(jQuery);
