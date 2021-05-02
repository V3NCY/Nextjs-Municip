import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Form,
    Button,
} from 'reactstrap'
import { FormControl } from "react-bootstrap"
import Logo from '../../mountain.svg'
import Link from 'next/link'
import UserMenu from "../user/menu"
import { useSelector } from "react-redux"

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const currentUser = useSelector(state => state.currentUser);

    const getAdminNavItem = () => {
        if (!currentUser.roles || !currentUser.roles.includes("ADMIN")) {
            return null;
        }
        return <NavItem>
            <Link href='/admin'>
                <a className="nav-link">Админ</a>
            </Link>
        </NavItem>
    }


    return (
        <Navbar color="dark" dark expand="md" className="shadow p-2 bg-light">
            <NavbarBrand href="/" className="ml-2">
                <Logo width="50" height="50" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link href='/'>
                            <a className="nav-link">Начало</a>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href='/culture'>
                            <a className="nav-link">Култура</a>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href='/tourism'>
                            <a className="nav-link">Туризъм</a>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href='/news'>
                            <a className="nav-link">Новини</a>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href='/museums'>
                            <a className="nav-link">Музеи</a>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href='/hotels'>
                            <a className="nav-link">Хотели</a>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href='/information'>
                            <a className="nav-link">Информация</a>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href='/contacts'>
                            <a className="nav-link">Контакти</a>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href='/addhotel'>
                            <a className="nav-link">Добави хотел</a>
                        </Link>
                    </NavItem>
                    {getAdminNavItem()}
                </Nav>
                <UserMenu />
                <Form inline>
                    <FormControl type="text" placeholder="Търси..." className="mr-sm-2" />
                    <Button variant="primary" className="mr-2" color="primary">Търси</Button>
                </Form>
            </Collapse>
        </Navbar>
    );
}

export default Navigation