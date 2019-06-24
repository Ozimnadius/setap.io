const smartgrid = require('smart-grid');

smartgrid('./css/layout', {
    mobileFirst: false,
    columns: 24,
    offset: "40px",
    outputStyle: "scss",
    container: {
        maxWidth: "1200px",
        fields: "20px",
        containerWidth: "1200px"
    },
    breakPoints: {
        lg: {
            width: "1199.99px",
            fields: "20px",
            containerWidth: "960px"
        },
        md: {
            width: "991.99px",
            fields: "20px",
            containerWidth: "720px"
        },
        sm: {
            width: "767.99px",
            fields: "20px",
            containerWidth: "540px"
        },
        xs: {
            width: "575.99px",
            fields: "20px",
            containerWidth: "100%"
        }
    },
});