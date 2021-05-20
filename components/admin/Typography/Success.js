import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import styles from "../../admin/assets/jss/nextjs-material-dashboard/components/typographyStyle"


export default function Success(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.successText}>
      {children}
    </div>
  );
}

Success.propTypes = {
  children: PropTypes.node,
};