/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
// layout for this page
import Admin from "../../components/layouts/Admin";
// core components
import GridItem from "../../components/admin/Grid/GridItem";
import GridContainer from "../../components/admin/Grid/GridContainer.js";
import Card from "../../components/admin/Card/Card.js";
import CardHeader from "../../components/admin/Card/CardHeader.js";
import styles from "../../components/admin/assets/jss/nextjs-material-dashboard/views/iconsStyle";

function Icons() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>Дизайн на Венцеслава Мандулова</h4>
            <p className={classes.cardCategoryWhite}>
              Ръчно израбен сайт от{" Венцеслава Мандулова "}
              <a
                href="https://google.com"
                target="_blank"
              >
                Google
              </a>
            </p>
          </CardHeader>

        </Card>
      </GridItem>
    </GridContainer>
  );
}

Icons.layout = Admin;

export default Icons;
