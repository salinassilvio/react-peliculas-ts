export interface pelicula{
    id: number;
    titulo: string;
    poster: string;
}

export interface landingPageDto {
    enCartelera?: pelicula[];
    proximosEstrenos?: pelicula[];
}