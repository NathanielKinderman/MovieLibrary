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
              document.getElementById("all-movies").innerHTML = "";
              getAllMovies();
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
          var row = `<tr><th>Title</th><th>Director</th><th>Genre</th><th></th></tr>`;
            $.each(data,function (index, obj){
           row +=
           "<tr><td>"
           + `<button onclick="getMovieId(${obj.MovieId})">  ${obj.Title} </button></td><td>`
           + obj.Director + "</td><td>"
           + obj.Genre + "</td><td>"
           // + obj.MovieId + "</td><td>"//need to make movie id hidden in the table so i can grab it in my editmovie function
           + `<button onclick="populateMovie(${obj.MovieId})">Edit</button>` +
           "</td><tr>";
            });
            $("#all-movies").append(row);
        }
    });
}

$(document).ready(getAllMovies);

//getbyid
function getMovieId(id){

  $.ajax({
    url: `https://localhost:44352/api/movie/${id}/`,
    dataType: 'json',
    type: 'get',
    contentType: 'application/json',
    data: JSON,
    success: function(data){
    alert("Title: " + data.Title);
    alert("Director: " + data.Director);
    alert("Genre: " + data.Genre);
    }
  });
}

//edit movie on table
(function($){
function editMovie(e){
// document.getElementById('movieId')
  var newValue = {
    MovieId : document.getElementById('movieId').value,
    Title : this["title"].value,
    Director: this["director"].value,
    Genre: this["genre"].value
  };
  $.ajax({
    url: `https://localhost:44352/api/movie/`,
    type: 'put',
    contentType: 'application/json',
    data: JSON.stringify(newValue),
    success: function(data, textStatus, jQxhr){
      console.log("Success");
      document.getElementById("all-movies").innerHTML = "";
      getAllMovies();
    },
    error: function(jqXhr, textStatus, errorThrown){
      console.log("error was here " + textStatus + " " +  errorThrown )
    }
  });
  e.preventDefault();
}
$('#my-editForm').submit( editMovie );
})(jQuery);

function populateMovie(id){
  $.ajax({
    url: `https://localhost:44352/api/movie/${id}/`,
    dataType: 'json',
    type: 'get',
    contentType: 'application/json',
    data: JSON,
    success: function(data){
      document.getElementById('title').value = data.Title;
      document.getElementById('director').value = data.Director;
      document.getElementById('genre').value = data.Genre;
      document.getElementById('movieId').value = data.MovieId;
      }
    });
}
