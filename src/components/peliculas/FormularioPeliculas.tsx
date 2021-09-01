import { Form, Formik, FormikHelpers, yupToFormErrors } from "formik";
import { peliculaCreacionDTO } from "../../models/peliculas.model";
import * as Yup from 'yup'
import FormGroupText from "../utils/FormGroupText";
import FormGroupCheckbox from "../utils/FormGroupCheckbox";
import { FormGroupFecha } from "../utils/FormGroupFecha";
import FormGroupImagen from "../utils/FormGroupImagen";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import SelectorMultiple, { selectorMultipleModel } from "../utils/SelectorMultiple";
import { generoDTO } from "../../models/generos.model";
import { useState } from "react";

export default function FormularioPeliculas(props: formularioPeliculasProps){
    const [generosSeleccionados,setGenerosSeleccionados] =  useState(mapear(props.generosSeleccionados));
    const [generosNoSeleccionados,setGenerosNoSeleccionados] =  useState(mapear(props.generosNoSeleccionados));

    function mapear(arreglo:{id:number,nombre:string}[]): selectorMultipleModel[]{
        return arreglo.map(valor => {
            return {llave: valor.id, valor:valor.nombre}
        })
    }

    return(
        <Formik
            initialValues={props.modelo}
            onSubmit={(valores,acciones) => {
                valores.generosIds = generosSeleccionados.map(valor => valor.llave);
                props.onSubmit(valores,acciones);
            }}
            validationSchema={Yup.object({
                titulo: Yup.string().required('Este Campo es requerido').primeraLetraMayuscula()
            })}
        >
            {formikProps => (
                <Form>
                    <FormGroupText label="Título" campo="titulo"    />
                    <FormGroupCheckbox label="En Cines" campo="enCines" />
                    <FormGroupText label="Trailer" campo="trailer" />
                    <FormGroupFecha campo="fechaLanzamiento" label="Fecha Lanzamiento"/>
                    <FormGroupImagen campo="poster" label="Poster" imagenURL={props.modelo.posterURL}/>
                    <div className="form-group">
                        <label>Géneros:</label>
                        <SelectorMultiple seleccionados={generosSeleccionados} noSeleccionados={generosNoSeleccionados} 
                            onChange={(seleccionados,noSeleccionados) => {
                                    setGenerosSeleccionados(seleccionados);
                                    setGenerosNoSeleccionados(noSeleccionados);
                            }}
                        />
                    </div>
                    <Button disabled={formikProps.isSubmitting} type="submit">Enviar</Button>
                    <Link className="btn btn-secondary" to="/">Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}

interface formularioPeliculasProps{
    modelo:peliculaCreacionDTO;
    onSubmit(valores:peliculaCreacionDTO, acciones:FormikHelpers<peliculaCreacionDTO>): void;
    generosSeleccionados: generoDTO[];
    generosNoSeleccionados: generoDTO[];
}