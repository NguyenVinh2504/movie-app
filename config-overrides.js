const { override, useBabelRc, addBabelPlugin } = require('customize-cra');

module.exports = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc(),
    process.env.REACT_APP_BUILD_MODE === 'production' &&
        addBabelPlugin('transform-remove-console'),
);
