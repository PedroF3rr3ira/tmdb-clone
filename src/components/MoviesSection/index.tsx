import { useEffect, useState } from "react";
import { Switcher } from "../Swicther";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import "./style.scss";
import { CircularProgressBar } from "../circularProgressBar";

interface MovieProps {
  id: number;
  "image-movie": string;
  title: string;
  rate: number;
  "released-date": string;
}

export function MovieSection() {
  const [movies, setMovies] = useState<MovieProps[]>();
  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  return (
    <section>
      <Switcher
        title="os mais populares"
        categories={["streaming", "na tv", "para alugar", "nos cinemas"]}
      />

      <div className="content-movieSection">
        {movies?.map((movie) => {
          return (
            <div className="card-movie" key={movie.id}>
              <div className="img-movie">
                <img src={movie["image-movie"]} alt={movie.title} />
                <div className="percent-movie-rate">
                  <CircularProgressBar
                    size={38}
                    progress={movie.rate}
                    trackWidth={5}
                    trackColor="#204529"
                    fill="#081C22"
                    indicatorWidth={2}
                    indicationColor={"#21D07A"}
                    label={`${movie.rate}%`}
                    labelColor={"#64c"}
                  />
                </div>
              </div>
              <h3>{movie.title}</h3>
              <p>
                {format(
                  new Date(movie["released-date"]),
                  "dd 'de' MMM 'de' uuuu",
                  {
                    locale: ptBR,
                  }
                )}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
