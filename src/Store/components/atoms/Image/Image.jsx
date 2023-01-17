import React from "react";
import PropTypes from "prop-types";

// Styles
import styles from './image.module.scss'

const Image = ({ src, alt }) => {
  return (
    <picture className={styles.image}>
      <img src={src} alt={alt} />
    </picture>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
