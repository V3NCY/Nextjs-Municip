import React, { useState } from "react";
import {
    Form,
    Container,
    Row,
    Col,
    Input,
    List,
    Button,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
} from "reactstrap";
import styles from "../../styles/components/ProfileContainer.module.scss";
import classnames from "classnames";

const ProfileContainer = () => {
    const [activeTab, setActiveTab] = useState("1");

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    return (
        <Container className={"background " + styles.emp_profile}>
            <Form>
                <Row>
                    <Col md="4">
                        <div className={styles.profile_img}>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                                alt=""
                            />
                            <div className={styles.file + " btn btn-lg btn-primary"}>
                                Change Photo
                <Input type="file" name="file" />
                            </div>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className={styles.profile_head}>
                            <h5>Кристина Джоунс </h5>
                            <h6>Web Developer and Designer</h6>
                            <p className={styles.profile_rating}>
                                RANKINGS: <span>8/10</span>
                            </p>

                            <div>
                                <div
                                    className={styles.profile_tab + " tab-content"}
                                    id="myTabContent"
                                >
                                    <Nav tabs className="nav nav-tabs">
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === "1" })}
                                                onClick={() => {
                                                    toggle("1");
                                                }}
                                            >
                                                За мен
                      </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === "2" })}
                                                onClick={() => {
                                                    toggle("2");
                                                }}
                                            >
                                                Публикации
                      </NavLink>
                                        </NavItem>
                                    </Nav>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md="2">
                        <Button
                            type="submit"
                            className={styles.profile_edit_btn}
                            name="btnAddMore"
                            color="primary">Edit profile</Button >
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                        <div className={styles.profile_work}>
                            <p>Линкове</p>
                            <a href="">Website Link</a>
                            <br />
                            <a href="">Bootsnipp Profile</a>
                            <br />
                            <a href="">Bootply Profile</a>
                            <p>Умения</p>
                            <a href="">Web Designer</a>
                            <br />
                            <a href="">Web Developer</a>
                            <br />
                            <a href="">WordPress</a>
                            <br />
                            <a href="">WooCommerce</a>
                            <br />
                            <a href="">PHP, .Net</a>
                            <br />
                        </div>
                    </Col>
                    <Col md="8">
                        <div
                            className={styles.profile_tab + " tab-content"}
                            id="myTabContent"
                        >
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1" className="tab-pane">
                                    <Row>
                                        <Col md="6">
                                            <label>User Id</label>
                                        </Col>
                                        <Col md="6">
                                            <p>christijones1204</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6">
                                            <label>Име</label>
                                        </Col>
                                        <Col md="6">
                                            <p>Кристина Джоунс</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6">
                                            <label>И-мейл:</label>
                                        </Col>
                                        <Col md="6">
                                            <p>christijones@gmail.com</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6">
                                            <label>Телефон</label>
                                        </Col>
                                        <Col md="6">
                                            <p>123 456 7890</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6">
                                            <label>Професия</label>
                                        </Col>
                                        <Col md="6">
                                            <p>Web Developer and Designer</p>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2" className="tab-pane">
                                    <Row>
                                        <Col md="6">
                                            <label>Опит</label>
                                        </Col>
                                        <Col md="6">
                                            <p>Expert</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6">
                                            <label>Часова ставка</label>
                                        </Col>
                                        <Col md="6">
                                            <p>10$/hr</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6">
                                            <label>Общ брой проекти</label>
                                        </Col>
                                        <Col md="6">
                                            <p>230</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6">
                                            <label>Ниво на английски език</label>
                                        </Col>
                                        <Col md="6">
                                            <p>Expert</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6">
                                            <label>Стаж</label>
                                        </Col>
                                        <Col md="6">
                                            <p>6 months</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <div className="col-md-12">
                                            <label>Биография</label>
                                            <br />
                                            <p>Аз съм американка, която работи в красивата България с цел партньорство.</p>
                                        </div>
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </div>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default ProfileContainer;
