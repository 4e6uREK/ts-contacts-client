import { useAppDispatch } from "../../shared/hooks";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { searchContacts } from "../../entities/contacts/api";
import InputMask from "react-input-mask";
import { setContacts } from "../../entities/contacts/model";
import styles from "./styles.module.css";
import * as Yup from "yup";

interface FormValues {
  email: string;
  number: string;
}

const CustomField = (props: any) => {
  return (
    <InputMask {...props}>
      {(inputProps: any) => <Field {...inputProps} />}
    </InputMask>
  );
};

function Search() {
  const dispatch = useAppDispatch();

  const initialValues: FormValues = {
    email: "",
    number: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
  });

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    const changedNumber = values.number.replace(/-/g, "");
    const result = await searchContacts(
      values.email,
      values.number === "" ? null : changedNumber,
    );
    dispatch(setContacts(result));
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form className={styles.form}>
          <div>
            <label htmlFor="email"></label>
            <Field
              className={styles.input}
              placeholder="Email:"
              name="email"
              type="email"
            ></Field>
            <ErrorMessage name="email" component="div"></ErrorMessage>
          </div>
          <div>
            <label htmlFor="number"></label>
            <CustomField
              className={styles.input}
              placeholder="Number:"
              mask="99-99-99"
              name="number"
              onChange={(e: any) => {
                const value = e.target.value;

                setFieldValue("number", value);
              }}
            ></CustomField>
            <ErrorMessage name="number" component="div"></ErrorMessage>
          </div>
          <button className={styles.button} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default Search;
