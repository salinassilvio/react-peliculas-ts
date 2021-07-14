import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { generoCreacionDTO } from "../../models/generos.model.dt";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";


export default function FormularioGeneros(props: formularioGenerosProps){
    return(<Formik

        initialValues={props.modelo}
    
        onSubmit={props.onSubmit}

        validationSchema={Yup.object({
          nombre: Yup.string()
            .required("Este campo es requerido")
            .primeraLetraMayuscula(),
        })}
      >
        {(formikProps) => (
          <Form>
            <FormGroupText
              campo="nombre"
              label="Nombre"
              placeholder="Nombre genero"
            ></FormGroupText>
            <Button disabled={formikProps.isSubmitting} type="submit">Salvar</Button>
            <Link className="btn btn-secondary" to="/generos">
              Cancelar
            </Link>
          </Form>
        )}
      </Formik>)
}

interface formularioGenerosProps{
    modelo: generoCreacionDTO;
    onSubmit(valores: generoCreacionDTO, accion: FormikHelpers<generoCreacionDTO>): void;
}