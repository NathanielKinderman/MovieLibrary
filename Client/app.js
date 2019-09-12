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

$(document).ready(function(){
  $.ajax({
      url: 'https://localhost:44352/api/movie',
      dataType: 'json',
      type: 'get',
      contentType: 'application/json',
      data: JSON,
      success: function ( data ){
        var row = '';
          $.each(data,function (index, obj){
         row += "<tr><td>" + obj.Title + "</td><td>" + obj.Director + "</td><td>" + obj.Genre + "</td><tr>";
          });
          $("#all-movies").append(row);
      }
  });
});
