import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../admin/assets/jss/nextjs-material-dashboard/components/typographyStyle"


export default function Quote(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { text, author } = props;
  return (
    <blockquote className={classes.defaultFontStyle + " " + classes.quote}>
      <p className={classes.quoteText}>{text}</p>
      <small className={classes.quoteAuthor}>{author}</small>
    </blockquote>
  );
}

Quote.propTypes = {
  text: PropTypes.node,
  author: PropTypes.node,
};
