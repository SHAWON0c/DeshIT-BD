// Constant/pageMeta.js
const pageMeta = {
    home: {
        title: "Home",
        breadcrumbs: [{ label: "HomePage" }]
    },
    product: {
        title: "Our Product",
        breadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Our Product" }
        ]
    },
     projects: {
        title: "Our Projects",
        breadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Our Projects" }
        ]
    },
    training: {
        title: "Training",
        breadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Training" }
        ]
    },
    // Add more routes as needed
};

export default pageMeta;
