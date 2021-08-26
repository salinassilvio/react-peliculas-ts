import FormularioCines from "./FormularioCines";

export default function EditarCines(){
    return(
        <>
            <h3>Editar Cine</h3>
            <FormularioCines
                modelo={{nombre: 'Sambil'}}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}