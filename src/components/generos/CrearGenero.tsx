import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import * as Yup from "yup";

export default function CrearGenero() {
  return (
    <>
      <h3>Crear Genero Contenido</h3>

      <Formik
        initialValues={{
          nombre: "Accion",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          nombre: Yup.string().required("Este campo es requerido"),
        })}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <Field name="nombre" className="form-control"></Field>
            <ErrorMessage name="nombre">
              {(mensaje) => <div className="text-danger">{mensaje}</div>}
            </ErrorMessage>
          </div>
          <Button type="submit">Salvar</Button>
          <Link className="btn btn-secondary" to="/generos">
            Cancelar
          </Link>
        </Form>
      </Formik>
    </>
  );
}
