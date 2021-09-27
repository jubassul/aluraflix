const movieadd = () => {
  let movieInput = document.getElementById("movie").value;
  //if para aceitar jpg
  if (movieInput.endsWith(".jpg")) {
    listMoviesOnScreen(movieInput);
    // else if para aceitar png
  } else if (movieInput.endsWith(".png")) {
    listMoviesOnScreen(movieInput);
    ////else para dar uma msg de erro para quem tentar add uma img fora do padrão jpg e png
  } else {
    alert("Atenção! O formato da imagem deve ser em .jpg ou .png");
  }
  document.getElementById("movie").value = "";
};

const listMoviesOnScreen = (movie) => {
  let movieElement = "<img src=" + movie + ">";
  let movieList = document.getElementById("movieList");
  movieList.innerHTML = movieList.innerHTML + movieElement;
};