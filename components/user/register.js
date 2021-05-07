import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Input,
    Form,
    FormGroup,
    Label,
} from 'reactstrap'

import React, { useState } from 'react'
import { register } from '../../redux/actions'
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from 'next/router'


const RegisterUser = (props) => {

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const currentUser = useSelector(state => state.currentUser);
    const dispatch = useDispatch();
    const router = useRouter();

    const onRegister = async () => {
        const variables = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        }
        const response = await dispatch(register(variables))
        if (response) {
            setModal(false);
        }
    }
    const getRegisterUser = () => {         
        
        return <Button onClick={() => {
            setModal(true)
        }} size="md" color="primary" className='mr-2'>Регистрация</Button>
    }
    


    const [modal, setModal] = useState(false);

    const toggleModal = () => setModal(!modal);

    return (
        <>
            {getRegisterUser()}
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Регистрация</ModalHeader>
                <ModalBody>
                    <Form onSubmit={e => {
                        e.preventDefault();
                        onRegister()
                    }}>
                        <FormGroup>
                            <Label for="email">Име:</Label>
                            <Input
                                type="firstName"
                                name="firstName"
                                id="firstName"
                                value={firstName}
                                onChange={e => setfirstName(e.target.value)}
                                placeholder="Вашето име..." />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Фамилия:</Label>
                            <Input
                                type="lastName"
                                name="lastName"
                                id="lastName"
                                value={lastName}
                                onChange={e => setlastName(e.target.value)}
                                placeholder="Вашата фамилия..." />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">И-мейл:</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Вашият и-мейл..." />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Парола:</Label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Your password..." />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Потвърди паролата:</Label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                                placeholder="Потвърдете вашата парола..." />
                        </FormGroup>
                        <Button type="submit" color="primary">Регистрация</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    );
}

export default RegisterUser