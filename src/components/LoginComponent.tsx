import React from "react";

import { FormGroup, Input, Button } from "reactstrap";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { useMutation } from "react-query";
import { Navigate } from "react-router-dom";
import { DASHBOARD_PATH } from "../root/routeConstants";

const LoginComponent: React.FC = () => {
  const { isSuccess, data, mutate } = useMutation((data: {}) =>
    axios.post("https://reqres.in/api/login", data)
  );
  const authToken = localStorage.getItem("accessToken") || "";

  React.useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("accessToken", data?.data?.token);
    }
  }, [data, isSuccess]);

  const handleOnSubmit = (values: any): void => {
    const data = {
      email: values.email,
      password: values.password
    };
    mutate(data);
  };

  if (isSuccess || authToken) {
    return <Navigate to={DASHBOARD_PATH} />;
  }

  return (
    <Formik initialValues={{}} onSubmit={(values) => handleOnSubmit(values)}>
      {() => (
        <div className="bg-light vh-100">
          <p className="text-center py-3">
            <small className="text-success">
              Try visiting "/dashboard" without and with authenticated
              credentials
            </small>
            <p className="text-primary">
              Email- eve.holt@reqres.in
              <br /> password- cityslicka
            </p>
          </p>
          <div className="d-flex justify-content-center">
            <Form className=" form shadow p-3 mb-3 bg-white rounded mb-0 col-md-5 align-self-center">
              <p className="text-center pt-3 p-2 text-primary">SIGN IN</p>
              <FormGroup className="m-2 mx-5 py-2">
                <Input
                  tag={Field}
                  className="border border-0 bg-light p-2"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </FormGroup>
              <FormGroup className="m-2 mx-5 pb-2">
                <Input
                  tag={Field}
                  className="border border-0 bg-light p-2"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </FormGroup>
              <div className="text-center mb-2">
                <Button
                  color="primary"
                  className="px-5"
                  size="md"
                  type="submit"
                >
                  LOGIN
                </Button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default LoginComponent;
