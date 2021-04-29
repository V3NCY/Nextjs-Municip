import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Input,
    Form,
    FormGroup,
    Label,
} from 'reactstrap';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { login, logout } from '../../redux/actions';
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from "react-redux";

const UserMenu = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const currentUser = useSelector(state => state.currentUser);
    const dispatch = useDispatch();
    const router = useRouter();

    const onLogin = async () => {
        const variables = {
            email,
            password,
        }
        const response = await dispatch(login(variables))
        if (response) {
            setModal(false);
        }
    }

    const [modal, setModal] = useState(false);

    const toggleModal = () => setModal(!modal);

    const onLogout = async () => {
        const response = await dispatch(logout());
        router.push("/");
    }
    const getUserMenu = () => {
        if (currentUser._id) {
            return <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faUser} />
                <div className="mx-2">{currentUser.email}</div>
                <Button size="sm" onClick={() => {
                    onLogout();
                }} color="primary">Logout</Button>
            </div>
        }
        return <Button onClick={() => {
            setModal(true)
        }} color="success" size="sm" color="primary">Login</Button>
    }

    return (
        <>
            { getUserMenu()}
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Вписване</ModalHeader>
                <ModalBody>
                    <Form onSubmit={e => {
                        e.preventDefault();
                        onLogin()
                    }}>
                        <FormGroup>
                            <Label for="email">Email:</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Your e-mail..." />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password:</Label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Your password..." />
                        </FormGroup>
                        <Button type="submit">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    );
}

export default UserMenu;