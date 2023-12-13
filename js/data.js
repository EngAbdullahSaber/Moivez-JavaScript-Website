const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const APIURLSecond ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=2";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
"https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const main = document.getElementById("films");
const form = document.getElementById("form");
const search = document.getElementById("searchField");




// initially get fav movies
getMovies(APIURL);
getMovies(APIURLSecond);

async function getMovies(url) {
const resp = await fetch(url);
const respData = await resp.json();

    console.log(respData.results);
    console.log(respData);

showMovies(respData.results ,respData);
}

function showMovies(movies , number) {

    // clear main
movies.forEach((movie) => {
    const { poster_path, title, vote_average ,id } = movie;

    const movieEl = document.createElement("a");
    movieEl.classList.add("movie");
    movieEl.setAttribute("href" , "Movie Details.html")

    movieEl.innerHTML = `
        <img
            src="${IMGPATH + poster_path}"
            alt="${title}"
            width="235px"
            height="423px"
        />
        <div class="movie-info">
            <h5>${title}</h5>
            
        </div>
        <span >${vote_average}</span>
    `;

    main.appendChild(movieEl);


    movieEl.addEventListener("click" ,function(e){
        console.log(id);

        console.log(number);
        // e.preventDefault()
        localStorage.setItem("filmId", id);  


    });
});
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = "";

    const searchTerm = search.value;

    if (searchTerm) {
        getMovies(SEARCHAPI + searchTerm);

        search.value = "";
    }
});





