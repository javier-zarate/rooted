const path = require('path');

// Where static files will be generated and creating unique products stored within shopify
// allows to add additional config to webpack to allow to
// import modules absolutely instead of relatively
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

// Gatsby expects create pages
// Gatsby knows to inject various helpers to generate pages
// helpers:
// actions: query data via graphql
// actions: refers to redux actions
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // this graphql function is a promise
  const { data } = await graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            shopifyId
            handle
          }
        }
      }
    }
  `);
  // Summary: query all shopify products

  // for Each of the shopify products a new page will be created
  // accessible at /products/${ product handle}
  // a component will render for each of the products
  data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `products/${node.handle}`,
      context: {
        shopifyId: node.shopifyId,
      },
      component: path.resolve('./src/templates/ProductTemplate/index.js'),
    });
  });
};
