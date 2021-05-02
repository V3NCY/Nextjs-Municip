import React, { useState } from "react"
import { Button, Form } from "semantic-ui-react"
import { useMutation } from '@apollo/react-hooks'
import { REGISTER_USER } from "../../mutations/auth"

export default function Register() {
    const [values, setValues] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    })

    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    }
    const [addUser, { loading }] = useMutation(REGISTER_USER, {
        update(proxy, result) {
            console.log(result)
        },
        variables: values
    })
    const onSubmit = (event) => {
        event.preventDefault();
        addUser();
    }

    return (
        <div>
            <Form onSubmit={onSubmit} noValidate>
                <h1>Регистрация</h1>
                <Form.Input
                    label="Username"
                    placeholder="Your username..."
                    name="username"
                    value={values.username}
                    onChange={onChange}
                />
                <Form.Input
                    label="Email"
                    placeholder="Your e-mail..."
                    name="email"
                    value={values.email}
                    onChange={onChange}
                />
                <Form.Input
                    label="Password"
                    placeholder="Your password..."
                    name="password"
                    value={values.password}
                    onChange={onChange}
                />
                <Form.Input
                    label="Confirm Password"
                    placeholder="Confirm your password..."
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={onChange}
                />
                <Button type="submit" color="primary">
                    Регистрация
                </Button>
            </Form>
        </div>
    );
}