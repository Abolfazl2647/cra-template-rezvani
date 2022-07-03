module.exports = {
    icon: true,
    dimensions: false,
    expandProps: false, // passing props to some svg icons makes them cruped - make true and check your icons
    replaceAttrValues: {
        '#000': 'currentColor'
    }
};

// for more information about svgr and templates
// check this link => https://react-svgr.com/docs/custom-templates/
