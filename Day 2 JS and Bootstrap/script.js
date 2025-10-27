// lets create a gneral external js file and link it to our html file.
// Function to display famous movies in the console

const famousMovies = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "Forrest Gump"
];

function displayfamousMovies() {
    console.log("Famous Movies:");
    famousMovies.forEach((movie => {
        console.log("- " + movie);
    }));
}


displayfamousMovies();