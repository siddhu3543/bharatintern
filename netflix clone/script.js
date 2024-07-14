const api ="api-key=c57a29a9457952a91218b35a28fe7622";
const base_url = "https://api.themoviedb.org/3";
const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w300";

const request = {
    fetchTrending: `${base-url}/treading/all/week?${api}&language-US`,
    fetchNetflixOriginal: `${base-url}/discover/tv?${api}&with_network=213`,
    fetchActionMovies: `${base-url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base-url}/discover/movie?${api}&with_genres=35`,
    fetchHorrerMovies: `${base-url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base-url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries: `${base-url}/discover/movie?${api}&with_genres=99`,
}
function truncate(str,n){
    return str?.length > n ? str.substr(0,n-1)+"...":str;
}

fetch(request.futchNetflixOriginals)
.then((res) => res.json())

.then((data) => {
    console.log(data.results);

    const setMovie =
    data.results[Math.floor(Math.random() * data.result.length - 1)];

    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("banner_title");
    var banner_desc = document.getElementById("banner_description");

    banner.style.backgroundImage = 
    "url(" + banner_url + setMovie.backdrop_path + ")";
    banner_desc.innerText = truncate(setMovie.overview, 150);
    banner_title.innerText = setMovie.name;
});

fetch(request.fetchNetflixOriginal)
.then((res) => res.json())

.then((data) => {
    const headrow = documentById("hheadrow");
    const row = document.createElement("div");

    row.className = "row";
    row.classList.add("netflixrow");

    headrow.appendChild(row);

    const title = ddocument.createElement("h2");

    title.className = " row_title";
    title.innerText = " NETFLIX ORIGINALS";

    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";

        var s = movie.name.replace(/\s+/g,"");

        poster.id = s;
        poster.src = img_url + movie.poster_path;
        row_posters.appendChild(poster);
    });
});

fetch(request.fetchTrending)
.then((res) => res.json())
.then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = " Top Rated";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";  
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";
        var s = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.poster_path;
        row_posters.appendChild(poster);
    });
});
fetch(request.fetchActionMovies)
.then((res) => res.json())
.then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = " Action Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";  
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";
        var s = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row_posters.appendChild(poster);
    });
});
fetch(request.fetchComedyMovies)
.then((res) => res.json())
.then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = " Comedy Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";  
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";
        var s = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row_posters.appendChild(poster);
    });
});
fetch(request.fetchHorrerMovies)
.then((res) => res.json())
.then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = " Horrer Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";  
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";
        var s = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row_posters.appendChild(poster);
    });
});
fetch(request.fetchRomanceMovies)
.then((res) => res.json())
.then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = " Romance Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";  
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";
        var s = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row_posters.appendChild(poster);
    });
});
fetch(request.fetchDocumentaries)
.then((res) => res.json())
.then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = "Documentries";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";  
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";
        var s = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row_posters.appendChild(poster);
    });
});