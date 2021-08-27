import FormularioCines from "./FormularioCines";

export default function EditarCines(){
    return(
        <>
            <h3>Editar Cine</h3>
            <FormularioCines
                modelo={{nombre: 'Sambil', latitud:12.128054406308863,longitud:-86.26471549272539}}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}