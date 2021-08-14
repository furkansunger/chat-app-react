import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useFirebase } from "react-redux-firebase";
import { Link } from "react-router-dom";
import {
  Form,
  Input,
  NormalButton,
  Wrapper,
} from "../components/commonComponents";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const SignUp = () => {
  const { register, errors, handleSubmit, setValue } = useForm();
  const firebase = useFirebase();

  const [fbErrors, setFbError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    register({ name: "name" }, { required: true });
    register({ name: "email" }, { required: true });
    register({ name: "password" }, { required: true, minLength: 6 });
  }, []);

  const onSubmit = ({ name, email, password }, e) => {
    setSubmitting(true);
    setFbError([]);

    const [first, last] = name.split(" ");

    firebase
      .createUser(
        { email, password },
        {
          name: name,
          avatar: `https://ui-avatars.com/api/?name=${first}+${last}&background=random`,
        }
      )
      .then((user) => {
        console.log(user);
        setSubmitting(false);
      })
      .catch((error) => {
        setFbError(error.message);
        setSubmitting(false);
      });
  };

  return (
    <>
      <Menu />
      <Wrapper>
        <h3 className="mb-3">Login</h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="name"
            name="name"
            placeholder="Full Name"
            autoComplete="off"
            onChange={(e) => {
              setValue(e.target.name, e.target.value);
            }}
            error={errors.name ? true : false}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="my-3"
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
            autoComplete="off"
            onChange={(e) => {
              setValue(e.target.name, e.target.value);
            }}
            error={errors.password ? true : false}
            required
          />
          <NormalButton className="my-3" disabled={submitting}>
            Sign Up
          </NormalButton>
        </Form>
        {
            fbErrors.length > 0 && <div className="alert alert-danger w-50 mt-3 text-center">{fbErrors}</div>
        }
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </Wrapper>
      <Footer />
    </>
  );
};

export default SignUp;
