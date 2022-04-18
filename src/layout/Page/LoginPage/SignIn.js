import React from "react";
import "./SignIn.css";
import Logo from "image/logo.png";
import {
    Col,
    Row,
    Card,
    Form,
    InputGroup,
    FormControl,
    FormLabel,
    FormCheck,
    FormGroup,
    Button,
} from "react-bootstrap";

const SignIn = () => {
    return (
        <div className="SignIn__account-pages pt-3">
            <Row className="justify-content-center">
                <Col lg={4} xs={11}>
                    <div className="text-center mb-4">
                        <a href="/Home" className="mb-5">
                            <img
                                src={Logo}
                                alt="Logo"
                                style={{ width: 120, height: 100 }}
                            />
                        </a>

                        <h4 className="SignIn__title">Sign in</h4>
                        <p className="text-muted mb-4">
                            Sign in to continue to Chat.
                        </p>
                    </div>

                    <Card className="SignIn__card">
                        <Card.Body className="p-4">
                            <Form>
                                <FormGroup className="mb-3">
                                    <FormLabel className="SignIn__form-label">
                                        Username
                                    </FormLabel>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text className="SignIn__input-text">
                                            <i className="bi bi-person" />
                                        </InputGroup.Text>

                                        <FormControl
                                            className="SignIn__form-control SignIn__form-control-lg SignIn__form SignIn__bg-soft-light"
                                            placeholder="Enter Username"
                                            aria-label="Enter Username"
                                            required
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup className="mb-3">
                                    <div className="float-end">
                                        <a
                                            href="/Home"
                                            className="text-muted font-size-13"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                    <FormLabel className="SignIn__form-label">
                                        Password
                                    </FormLabel>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text className="SignIn__input-text">
                                            <i className="bi bi-lock-fill"></i>
                                        </InputGroup.Text>

                                        <FormControl
                                            className="SignIn__form-control SignIn__form-control-lg SignIn__form SignIn__bg-soft-light"
                                            placeholder="Enter Password"
                                            aria-label="Enter Password"
                                            type="password"
                                            required
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicCheckbox"
                                >
                                    <FormCheck
                                        className="cur-pointer"
                                        type="checkbox"
                                        label="Remember Me"
                                    />
                                </Form.Group>

                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="SignIn__btn-signin w-100"
                                >
                                    Sign in
                                </Button>
                            </Form>

                            <div className="or text-center">
                                <p>or</p>
                            </div>

                            <div className="other-signin">
                                <div className="d-grid">
                                    <button
                                        className="btn btn-primary waves-effect waves-light btn-signin-fb"
                                        type="submit"
                                    >
                                        <i className="bi bi-facebook" />
                                        Sign in with Facebook
                                    </button>
                                </div>

                                <div className="d-grid">
                                    <button
                                        className="btn btn-primary waves-effect waves-light btn-signin-gg"
                                        type="submit"
                                    >
                                        <i className="bi bi-google" />
                                        Sign in with Google
                                    </button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>

                    <div className="sign-up mt-5 text-center">
                        <p>
                            Don't have an account ?
                            <a href="/Home" className="fw-medium text-primary">
                                Signup now
                            </a>
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default SignIn;
