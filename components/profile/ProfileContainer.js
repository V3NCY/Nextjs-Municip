import styles from "../../styles/components/ProfileContainer.module.scss"

const ProfileContainer = () => {
    return (
        <div className={'background container ' + styles.emp_profile}>
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className={styles.profile_img}>
                            <img src="https://ph-files.imgix.net/81c8176a-1b00-4f10-b60f-2ab2729d0a14?auto=format" alt="" />
                            <div className={styles.file + ' btn btn-lg btn-primary'}>
                                Change Photo
                                <input type="file" name="file" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className={styles.profile_head}>
                            <h5>
                                Jennifer Stones
                                    </h5>
                            <h6>
                                Web Developer and Designer
                                    </h6>
                            <p className={styles.profile_rating}>RANKINGS: <span>8/10</span></p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Относно</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile_tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Публикации</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <input type="submit" className={styles.profile_edit_btn} name="btnAddMore" value="Edit Profile" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className={styles.profile_work}>
                            <p>Допълнителни работни линкове</p>
                            <a href="">Website Link</a><br />
                            <a href="">Bootsnipp Profile</a><br />
                            <a href="">Bootply Profile</a>
                            <p>SKILLS</p>
                            <a href="">Web Designer</a><br />
                            <a href="">Web Developer</a><br />
                            <a href="">WordPress</a><br />
                            <a href="">WooCommerce</a><br />
                            <a href="">PHP, .Net</a><br />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className={styles.profile_tab + ' tab-content'} id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>User Id</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>jenst123</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Име</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Jennifer Stones</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>И-мейл:</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>jenstones@gmail.com</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Телефон:</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>123 456 7890</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Професия:</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Web Developer and Designer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile_tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Професионален опит:</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Expert</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Часова ставка</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>10$/hr</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Всички проекти:</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>230</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Ниво на английски език:</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Expert</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Достъпност</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>6 months</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Биография</label><br />
                                        <p>Your detail description</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    );
}

export default ProfileContainer