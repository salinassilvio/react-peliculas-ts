import { Form, Formik, FormikHelpers } from "formik"
import { Link } from "react-router-dom"
import { actorCreacionDTO } from "../../models/actores.model"
import Button from "../utils/Button"
import FormGroupText from "../utils/FormGroupText"
import * as Yup from 'yup'

export default function FormularioActores(props:formularioActoresProps){
    return(
        <Formik
            initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
            })}
        >
            {(formikProps) =>(
                <Form>
                    <FormGroupText campo="nombre" label="nombre"></FormGroupText>
                    <Button disabled={formikProps.isSubmitting}
                      type="submit"  
                    >Salvar</Button>
                    <Link className="btn btn-secundary" to="/actores">Cancelar</Link>
                </Form>
            )}

        </Formik>
    )
}

interface formularioActoresProps{
    modelo: actorCreacionDTO;
    onSubmit(valores: actorCreacionDTO, acciones: FormikHelpers<actorCreacionDTO>):void;
}