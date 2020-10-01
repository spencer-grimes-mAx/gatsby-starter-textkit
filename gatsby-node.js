exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
    
    /* Ignore this route */
    if (page.path.match(/^\/messenger/)) {
      page.matchPath = "/messenger/*"
      createPage(page)
    }
    
  }