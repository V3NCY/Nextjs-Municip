/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// layout for this page
import Admin from "../../components/layouts/Admin";
// core components
import GridItem from "../../components/admin/Grid/GridItem.js";
import GridContainer from "../../components/admin/Grid/GridContainer.js";
import Button from "../../components/admin/CustomButtons/Button.js";
import SnackbarContent from "../../components/admin/Snackbar/SnackbarContent.js";
import Snackbar from "../../components/admin/Snackbar/Snackbar.js";
import Card from "../../components/admin/Card/Card.js";
import CardHeader from "../../components/admin/Card/CardHeader.js";
import CardBody from "../../components/admin/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

function Notifications() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [tl, setTL] = React.useState(false);
  const [tc, setTC] = React.useState(false);
  const [tr, setTR] = React.useState(false);
  const [bl, setBL] = React.useState(false);
  const [bc, setBC] = React.useState(false);
  const [br, setBR] = React.useState(false);
  React.useEffect(() => {
    // Specify how to clean up after this effect:
    return function cleanup() {
      // to stop the warning of calling setState of unmounted component
      var id = window.setTimeout(null, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    };
  });
  const showNotification = (place) => {
    switch (place) {
      case "tl":
        if (!tl) {
          setTL(true);
          setTimeout(function () {
            setTL(false);
          }, 6000);
        }
        break;
      case "tc":
        if (!tc) {
          setTC(true);
          setTimeout(function () {
            setTC(false);
          }, 6000);
        }
        break;
      case "tr":
        if (!tr) {
          setTR(true);
          setTimeout(function () {
            setTR(false);
          }, 6000);
        }
        break;
      case "bl":
        if (!bl) {
          setBL(true);
          setTimeout(function () {
            setBL(false);
          }, 6000);
        }
        break;
      case "bc":
        if (!bc) {
          setBC(true);
          setTimeout(function () {
            setBC(false);
          }, 6000);
        }
        break;
      case "br":
        if (!br) {
          setBR(true);
          setTimeout(function () {
            setBR(false);
          }, 6000);
        }
        break;
      default:
        break;
    }
  };
  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Известия</h4>
        <p className={classes.cardCategoryWhite}>
          Дизайн на Венцеслава Мандулова{" "}
          <a
            target="_blank"
            href="https://google.com"
          >
          </a>
          <a
            target="_blank"
            href="https://www.google.com"
          >
            Creative Team
          </a>

        </p>
      </CardHeader>
      <CardBody>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <h5>Стилове известия</h5>
            <br />
            <SnackbarContent message={"Това е обикновено известие"} />
            <SnackbarContent
              message={'Това е обикновено известие със бутон „затваряне".'}
              close
            />
            <SnackbarContent
              message={'Това е обикновено известие със бутон „затваряне" и иконка.'}
              close
              icon={AddAlert}
            />
            <SnackbarContent
              message={
                "Други стилове"
              }
              close
              icon={AddAlert}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <h5>Състояния на цветовете</h5>
            <br />
            <SnackbarContent
              message={
                'INFO - Това е обикновено известия с цвят "info"'
              }
              close
              color="info"
            />
            <SnackbarContent
              message={
                'SUCCESS - Това е обикновено известия с цвят "success"'
              }
              close
              color="success"
            />
            <SnackbarContent
              message={
                'WARNING - Това е обикновено известия с цвят "warning"'
              }
              close
              color="warning"
            />
            <SnackbarContent
              message={
                'DANGER - Това е обикновено известия с цвят "danger"'
              }
              close
              color="danger"
            />
            <SnackbarContent
              message={
                'PRIMARY - Това е обикновено известия с цвят "primary"'
              }
              close
              color="primary"
            />
          </GridItem>
        </GridContainer>
        <br />
        <br />
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6} style={{ textAlign: "center" }}>
            <h5>
              Места на известията
              <br />
              <small>Кликнете, за да видите известието</small>
            </h5>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={10} lg={8}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  fullWidth
                  color="primary"
                  onClick={() => showNotification("tl")}
                >
                  Горе вляво
                </Button>
                <Snackbar
                  place="tl"
                  color="info"
                  icon={AddAlert}
                  message="Welcome to NextJS MATERIAL DASHBOARD - a beautiful freebie for every web developer."
                  open={tl}
                  closeNotification={() => setTL(false)}
                  close
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  fullWidth
                  color="primary"
                  onClick={() => showNotification("tc")}
                >
                  Горе в средата
                </Button>
                <Snackbar
                  place="tc"
                  color="info"
                  icon={AddAlert}
                  message="Welcome to NextJS MATERIAL DASHBOARD - a beautiful freebie for every web developer."
                  open={tc}
                  closeNotification={() => setTC(false)}
                  close
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  fullWidth
                  color="primary"
                  onClick={() => showNotification("tr")}
                >
                  Горе вдясно
                </Button>
                <Snackbar
                  place="tr"
                  color="info"
                  icon={AddAlert}
                  message="Welcome to NextJS MATERIAL DASHBOARD - a beautiful freebie for every web developer."
                  open={tr}
                  closeNotification={() => setTR(false)}
                  close
                />
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <GridContainer justify={"center"}>
          <GridItem xs={12} sm={12} md={10} lg={8}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  fullWidth
                  color="primary"
                  onClick={() => showNotification("bl")}
                >
                  Долу вляво
                </Button>
                <Snackbar
                  place="bl"
                  color="info"
                  icon={AddAlert}
                  message="Welcome to NextJS MATERIAL DASHBOARD - a beautiful freebie for every web developer."
                  open={bl}
                  closeNotification={() => setBL(false)}
                  close
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  fullWidth
                  color="primary"
                  onClick={() => showNotification("bc")}
                >
                  Долу в средата
                </Button>
                <Snackbar
                  place="bc"
                  color="info"
                  icon={AddAlert}
                  message="Welcome to NextJS MATERIAL DASHBOARD - a beautiful freebie for every web developer."
                  open={bc}
                  closeNotification={() => setBC(false)}
                  close
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  fullWidth
                  color="primary"
                  onClick={() => showNotification("br")}
                >
                  Долу вдясно
                </Button>
                <Snackbar
                  place="br"
                  color="info"
                  icon={AddAlert}
                  message="Welcome to NextJS MATERIAL DASHBOARD - a beautiful freebie for every web developer."
                  open={br}
                  closeNotification={() => setBR(false)}
                  close
                />
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </CardBody>
    </Card>
  );
}

Notifications.layout = Admin;

export default Notifications;
