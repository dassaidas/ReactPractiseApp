import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AuthProvider from "../../Services/AuthService";
import { useContext } from "react";
import { UserContext } from "../../Context/UserProvider";

function LoginForm() {
  const { loginUser } = useContext(UserContext);
  const handleSubmit = (values) => {
    // Handle form submission
    console.log("Form submitted with values:", values);
    if (values.username === "admin" && values.password === "admin") {
      alert("Login successful");
      // Redirect or perform any other actions
      loginUser({
        username: values.username,
        password: values.password,
      });
    } else {
      alert("Invalid username or password");
    }
  };
  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Password must be at least 6 characters"),
  });
  return (
    <div className="container mt-4 align-items-center">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-3 form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <Field
              type="text"
              id="username"
              name="username"
              className="form-control"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="mb-3 form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="form-control"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-danger"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}
export default LoginForm;
