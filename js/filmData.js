
var clickedId = localStorage.getItem("filmId");  


const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const APIURLSecond ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=2";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const main = document.getElementById("film");




// initially get fav movies
getMovies(APIURL);
getMovies(APIURLSecond);

async function getMovies(url) {
const resp = await fetch(url);
const respData = await resp.json();

showMoviesDetails(respData.results);
}

function showMoviesDetails(movies) {

    
// clear main

movies.forEach((movie) => {
    const { poster_path, title, vote_average ,id ,vote_count ,popularity ,overview  ,release_date ,adult} = movie;

    if (id == clickedId) {
        console.log(movie);
        const movieEl = document.createElement("div");
        movieEl.classList.add("details");

        
    movieEl.innerHTML = `
    <div class="img">
        <img src="${IMGPATH +poster_path}" alt="" srcset="">
    </div>
    <div class="data">
        <table class="movieTable full">
        <tbody>
            <tr>
            <td colspan="2" class="movie_title">
                <h4>${title}</h4>
            </td>
            </tr>
            <tr>
            <td class="nowrap">Language</td>
            <td> English</td>
            </tr>                    
            <tr>
            <td>popularity</td>
            <td>${popularity} </td>
            </tr>   
            <tr>
            <td class="nowrap">The Rate</td>
            <td>
                <i class="fa-solid fa-star"></i>
                <strong><span>${vote_average}</span></strong> From 
                <span>10</span> &nbsp; • &nbsp; ${vote_count} Vote
            </td>
            </tr>
            <tr>
            <td>overview</td>
            <td>${overview}</td>
            </tr>
            <tr>
            <td>Release Date</td>
            <td>${release_date}</td>
            </tr>
            <tr>
            <td>Transulation</td>
            <td>Translated&nbsp;  &nbsp;  </td>
            </tr>
            <tr>
            <td>For Adults Only ?</td>
            <td>${adult? "Yes" : "No"}  </td>
            </tr>
        </tbody>
        </table>
    </div>
    `;

        main.appendChild(movieEl);
    
    }else{
        console.log("nnn");
    }
  

});
}

























