(function($){
    function processForm( e ){
        var dict = {
        	Title : this["title"].value,
        	Director: this["director"].value,
          Genre: this ["genre"].value
        };

        $.ajax({
            url: 'https://localhost:44352/api/movie',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
              console.log("success");
              var row = "<tr><td>" + dict.Title + "</td><td>" + dict.Director + "</td><td>" + dict.Genre + "</td><tr>";
              $("#all-movies").append(row);
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
function getAllMovies(){
  console.log();
    $.ajax({
        url: 'https://localhost:44352/api/movie',
        dataType: 'json',
        type: 'get',
        async: true,
        data: JSON,
        success: function ( data ){
          var row = '';
            $.each(data,function (index, obj){
           row += "<tr><td>" + obj.Title + "</td><td>" + obj.Director + "</td><td>" + obj.Genre + "</td><tr>";
            });
            $("#all-movies").append(row);
        }
    });
}

$(document).ready(getAllMovies);

//get by id

















//edit
function editMovie(id){

<<<<<<< HEAD
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

//getbyid
function getMovieId(id){
  $ajax({
    url: 'https://localhost:44352/api/movie/ + id +/'',
    dataType: 'json',
    type: 'get',
    contentType: 'application/json',
    data: JSON,
    success: function(data){
      var row = '';
      $.this(data,function(index,obj){
      })
    }
  });
};
=======
}
>>>>>>> 127b1f9caf376408512d7c766b2b4e4851a029d6
