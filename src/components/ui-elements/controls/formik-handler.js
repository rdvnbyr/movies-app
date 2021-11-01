import { Formik, Form } from "formik";

export function FormikHandler({
  initialValues,
  validationSchema,
  onSubmitHandler,
  btnRef,
  children,
}) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onSubmitHandler(values);
      }}
    >
      {({ handleSubmit }) => (
        <Form>
          {children}
          <button
            ref={btnRef}
            type="submit"
            style={{ display: "none" }}
            onClick={handleSubmit}
          ></button>
        </Form>
      )}
    </Formik>
  );
}
