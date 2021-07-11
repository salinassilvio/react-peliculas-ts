import { useEffect, useState } from "react";
import { landingPageDto } from "../../models/peliculas.model";
import ListadoPeliculas from "./ListadoPeliculas";

export default function LandingPage(){
  //Estado
  const [peliculas,setPeliculas] = useState<landingPageDto>({})

  useEffect(() => {
    const timerId = setTimeout(() => {
      setPeliculas({enCartelera: [
        {
          id:1,
          titulo: 'Spider-Man: Far from Home',
          poster:'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
        },
        {
          id:2,
          titulo: 'Moana',
          poster:'https://m.media-amazon.com/images/M/MV5BZDlhYmYwZWMtNTkwOS00YjVkLTk0NTItMzM2NTc1NGFiYmU0XkEyXkFqcGdeQXVyNzEzNjU1NDg@._V1_UX182_CR0,0,182,268_AL_.jpg'
        }
      ],
      proximosEstrenos:[
        {
          id:3,
          titulo: 'Soul',
          poster:'https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_UX182_CR0,0,182,268_AL_.jpg'
        }
      ]
      })
    },1000)
    return () => clearTimeout(timerId);
  })

  return(
      <>
        <h3>En Cartelera</h3>
        <ListadoPeliculas peliculas={peliculas.enCartelera}></ListadoPeliculas>

        <h3>Proximamente</h3>
        <ListadoPeliculas peliculas={peliculas.proximosEstrenos}></ListadoPeliculas>

      </>
      )
}