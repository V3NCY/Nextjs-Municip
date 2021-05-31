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
import Logo from '../../mountain.svg'
import Link from 'next/link'
import UserMenu from "../user/menu"
import { useSelector } from "react-redux"
import RegisterUser from '../user/register'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from "next/router";
import LanguageSelector from "../../components/language/translations";

const Navigation = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle1 = () => setDropdownOpen(prevState => !prevState);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const currentUser = useSelector(state => state.currentUser);
    const router = useRouter();
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
    const getUserProfileNavItem = () => {
        if (!currentUser.roles || !currentUser.roles.includes("USER")) {
            return null;
        }
        return <NavItem>
            <Link href='/profile'>
                <a className="nav-link">Моят профил</a>
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
                            <a className="nav-link">  Начало</a>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href='/culture'>
                            <a className="nav-link"> Култура</a>
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
                        <Link href='/restaurants'>
                            <a className="nav-link">Ресторанти</a>
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
                    {getUserProfileNavItem()}
                </Nav>
                <UserMenu />
                <RegisterUser />
                <Dropdown isOpen={dropdownOpen} toggle={toggle1}>
                    <DropdownToggle caret color="primary">
                        <FontAwesomeIcon icon={faGlobeAmericas} />
                    </DropdownToggle>
                    <DropdownMenu>
                        <LanguageSelector />
                    </DropdownMenu>
                </Dropdown>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Търси..." className="mr-sm-2" />
                    <Button className="mr-2" color="primary">Търси</Button>
                </Form> */}
            </Collapse>
        </Navbar>
    );
}

export default Navigation