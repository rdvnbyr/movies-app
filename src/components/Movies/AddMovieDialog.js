import { useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";

const initialValues = {
  title: "", //"title"
  vote: "", //"vote_average"
  path: "", //"poster_path"
  overview: "", //"overview"
  //"release_date", "id"
};

const schema = Yup.object().shape({
  title: Yup.string().required("this field is required."),
  path: Yup.string().required("this field is required."),
});

export function AddMovieDialog({ show, onHide, setNewMovies }) {
  const btnRef = useRef();
  const submitByRef = () => {
    if (btnRef && btnRef.current) {
      btnRef.current.click();
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Add Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="px-3 py-2">
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
              console.log(values);
              const movie = {
                title: values.title,
                vote_average: values.vote,
                poster_path: values.path,
                overview: values.overview,
                release_date: "2021-01-20",
                id: uuidv4(),
              };
              setNewMovies(movie);
            }}
          >
            {({ handleSubmit }) => (
              <Form>
                <div className="mb-3 row">
                  <label className="col-12">Title</label>
                  <Field
                    className="col-12 form-control"
                    type="text"
                    placeholder="Enter title"
                    name="title"
                  />
                  <ErrorMessage
                    className="text-danger"
                    component="span"
                    name="title"
                  />
                </div>
                <div className="mb-3 row">
                  <label className="col-12">Vote Average</label>
                  <Field
                    className="col-12 form-control"
                    type="text"
                    placeholder="vote_average"
                    name="vote"
                  />
                </div>
                <div className="mb-3 row">
                  <label className="col-12">Poster Path</label>
                  <Field
                    className="col-12 form-control"
                    type="text"
                    placeholder="Poster Path"
                    name="path"
                  />
                  <ErrorMessage
                    className="text-danger"
                    component="span"
                    name="path"
                  />
                </div>
                <div className="mb-3 row">
                  <label className="col-12">Overview</label>
                  <Field
                    className="col-12 form-control"
                    type="text"
                    placeholder="Overview"
                    name="overview"
                  />
                </div>
                <button
                  ref={btnRef}
                  type="submit"
                  style={{ display: "none" }}
                  onClick={handleSubmit}
                ></button>
              </Form>
            )}
          </Formik>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="button" onClick={submitByRef}>
          Submit
        </Button>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
