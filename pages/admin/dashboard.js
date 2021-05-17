import React from "react";
import ChartistGraph from "react-chartist";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import Admin from "../../components/layouts/Admin";
import GridItem from "../../components/admin/Grid/GridItem";
import GridContainer from "../../components/admin/Grid/GridContainer.js";
import Table from "../../components/admin/Table/Table.js";
import Tasks from "../../components/admin/Tasks/Tasks";
import CustomTabs from "../../components/admin/CustomTabs/CustomTabs";
import Danger from "../../components/admin/Typography/Danger";
import Card from "../../components/admin/Card/Card";
import CardHeader from "../../components/admin/Card/CardHeader.js";
import CardIcon from "../../components/admin/Card/CardIcon.js";
import CardBody from "../../components/admin/Card/CardBody.js";
import CardFooter from "../../components/admin/Card/CardFooter.js";

import { bugs, website, server } from "../../variables/general";

import {
    dailySalesChart,
    emailsSubscriptionChart,
    completedTasksChart,
} from "../../variables/charts.js";

import styles from "../../components/admin/assets/jss/nextjs-material-dashboard/views/dashboardStyle"

function Dashboard() {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="warning">
                                <Icon className="fas fa-user"></Icon>
                            </CardIcon>
                            <p className={classes.cardCategory}>Използвано пространство</p>
                            <h3 className={classes.cardTitle}>
                                3/50 <small>GB</small>
                            </h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <Danger>
                                    <Warning />
                                </Danger>
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    Закупете още пространство
                </a>
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="dark" stats icon>
                            <CardIcon color="dark">
                                <Store />
                            </CardIcon>
                            <p className={classes.cardCategory}>Отчет</p>
                            <h3 className={classes.cardTitle}>100.00 лв</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <DateRange />
                За последните 24 часа
              </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="danger" stats icon>
                            <CardIcon color="danger">
                                <Icon></Icon>
                            </CardIcon>
                            <p className={classes.cardCategory}>Поправени бъгове</p>
                            <h3 className={classes.cardTitle}>5</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <LocalOffer />
                Сканирани от WebScan
              </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="info" stats icon>
                            <CardIcon color="info">
                                <Accessibility />
                            </CardIcon>
                            <p className={classes.cardCategory}>Последователи</p>
                            <h3 className={classes.cardTitle}>+300</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <Update />
                Последно обновени
              </div>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                    <Card chart>
                        <CardHeader color="success">
                            <ChartistGraph
                                className="ct-chart"
                                data={dailySalesChart.data}
                                type="Line"
                                options={dailySalesChart.options}
                                listener={dailySalesChart.animation}
                            />
                        </CardHeader>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Дневна статистика</h4>
                            <p className={classes.cardCategory}>
                                <span className={classes.successText}>
                                    <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                растеж на посещенията
              </p>
                        </CardBody>
                        <CardFooter chart>
                            <div className={classes.stats}>
                                <AccessTime /> обновена преди 2 минути
              </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Card chart>
                        <CardHeader color="warning">
                            <ChartistGraph
                                className="ct-chart"
                                data={emailsSubscriptionChart.data}
                                type="Bar"
                                options={emailsSubscriptionChart.options}
                                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                                listener={emailsSubscriptionChart.animation}
                            />
                        </CardHeader>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Нови регистрации</h4>
                            <p className={classes.cardCategory}>Нови потребители</p>
                        </CardBody>
                        <CardFooter chart>
                            <div className={classes.stats}>
                                <AccessTime /> статистика от преди 2 дни
              </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Card chart>
                        <CardHeader color="dark">
                            <ChartistGraph
                                className="ct-chart"
                                data={completedTasksChart.data}
                                type="Line"
                                options={completedTasksChart.options}
                                listener={completedTasksChart.animation}
                            />
                        </CardHeader>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Посетени страници</h4>
                            <p className={classes.cardCategory}>Статистика на посетените страници</p>
                        </CardBody>
                        <CardFooter chart>
                            <div className={classes.stats}>
                                <AccessTime /> статистика от преди 3 дни
              </div>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                    <CustomTabs
                        title="Tasks:"
                        headerColor="dark"
                        tabs={[
                            {
                                tabName: "Bugs",
                                tabIcon: BugReport,
                                tabContent: (
                                    <Tasks
                                        checkedIndexes={[0, 3]}
                                        tasksIndexes={[0, 1, 2, 3]}
                                        tasks={bugs}
                                    />
                                ),
                            },
                            {
                                tabName: "Website",
                                tabIcon: Code,
                                tabContent: (
                                    <Tasks
                                        checkedIndexes={[0]}
                                        tasksIndexes={[0, 1]}
                                        tasks={website}
                                    />
                                ),
                            },
                            {
                                tabName: "Server",
                                tabIcon: Cloud,
                                tabContent: (
                                    <Tasks
                                        checkedIndexes={[1]}
                                        tasksIndexes={[0, 1, 2]}
                                        tasks={server}
                                    />
                                ),
                            },
                        ]}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <Card>
                        <CardHeader color="warning">
                            <h4 className={classes.cardTitleWhite}>Статистика на потребителите</h4>
                            <p className={classes.cardCategoryWhite}>
                                последно добавен потребител на 17 май, 11:00 ч.
              </p>
                        </CardHeader>
                        <CardBody>
                            <Table
                                tableHeaderColor="warning"
                                tableHead={["ID", "Име", "Брой посетени страници", "Държава"]}
                                tableData={[
                                    ["1", "Йоан Петров", "4", "България"],
                                    ["2", "Candace Finnan", "2", "United States"],
                                    ["3", "Sage Rodriguez", "5", "Netherlands"],
                                    ["4", "Мария Чонева", "6", "България"],
                                ]}
                            />
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}

Dashboard.layout = Admin;

export default Dashboard
