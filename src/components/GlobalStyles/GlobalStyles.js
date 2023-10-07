import PropTypes from 'prop-types';

// import React from 'react';
import './GlobalStyles.scss';

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default function GlobalStyles({ children }) {
    return children;
}
