import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useFirebase } from "react-redux-firebase";
import { Link } from "react-router-dom";
import {
  Form,
  Input,
  Wrapper,
  NormalButton,
} from "../components/commonComponents";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const Login = () => {
  const { register, errors, handleSubmit, setValue } = useForm();
  const firebase = useFirebase();

  const [fbErrors, setFbError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    register({ name: "email" }, { required: true });
    register({ name: "password" }, { required: true, minLength: 6 });
  }, []);

  const onSubmit = ({ email, password }, e) => {
    setSubmitting(true);
    setFbError("");

    firebase
      .login({ email, password })
      .then((data) => {
        console.log(data);
        setSubmitting(false);
      })
      .catch((error) => {
        setSubmitting(false);
        setFbError(error.message);
      });
  };

  return (
    <>
      <Menu />
      <Wrapper>
        <h3 className="mb-3">Login</h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            onChange={(e) => {
              setValue(e.target.name, e.target.value);
            }}
            error={errors.email ? true : false}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            className="my-3"
            autoComplete="off"
            onChange={(e) => {
              setValue(e.target.name, e.target.value);
            }}
            error={errors.password ? true : false}
            required
          />
          <NormalButton disabled={submitting}>Login</NormalButton>
        </Form>
        {fbErrors.length > 0 && (
          <div className="alert alert-danger w-50 text-center mt-3">{fbErrors}</div>
        )}
        <span className="mt-3">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </span>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Login;
