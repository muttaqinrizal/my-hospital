import React from "react";
import axios from "axios";
import MovieCard from "../component/MovieCard";
import { Grid } from "@material-ui/core";
import MediaCard from "../component/MovieCard";

class DataAPI extends React.Component {
  state = {
    movies: []
  };

  getMovies = () => {
    const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
    axios
      .get(
        // API dari luar
        "https://api.themoviedb.org/3/movie/now_playing?api_key=95505221523326a53dc7a80dd32760d6&language=en-US&page=1"
      )
      //parameter response
      .then(response => {
        // script JS melakukan respone data yang ditampung di const movie
        const movie = response.data.results.map(film => {
          return {
            id: film.id,
            judul: film.title,
            poster: IMAGE_URL + film.poster_path,
            rilis: film.release_date,
            prolog: film.overview
          };
        });
        //menambahkan data dari respone data ke state movies
        this.setState({
          movies: movie
        });
      })
      //menampilkan kalau ada error
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <div>
        <Grid container spacing={3}>
          {/* menampilkan data dari state dengan method 'map' / looping dari JS */}
          {this.state.movies.map(datafilm => {
            return (
              <Grid item md={4}>
                <MediaCard
                  judul={datafilm.judul}
                  poster={datafilm.poster}
                  prolog={datafilm.prolog}
                  rilis={datafilm.rilis}
                />
              </Grid>

              // <div>
              //   <p> {datafilm.id} </p>
              //   <p> {datafilm.judul} </p>
              //   <img src={datafilm.poster} />
              //   <p> {datafilm.rilis} </p>
              //   <p> {datafilm.prolog} </p>
              // </div>
            );
          })}
        </Grid>
      </div>
      // <div style={{ flexGrow: 1 }}>
      //   <Grid container spacing={3} style={{ marginTop: 10 }}>
      //     {/* menampilkan data dari state dengan method 'map' / looping dari JS */}
      //     {this.state.movies.map(datafilm => {
      //       return (
      //         <Grid item xs={6} sm={3}>
      //           <MovieCard
      //             judul={datafilm.judul}
      //             gambar={datafilm.poster}
      //             rilis={datafilm.rilis}
      //             prolog={datafilm.prolog}
      //           />
      //         </Grid>
      //       );
      //     })}
      //   </Grid>
      // </div>
    );
  }
}

export default DataAPI;
