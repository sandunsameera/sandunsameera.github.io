
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/workspaces/sandunsameera.github.io/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/workspaces/sandunsameera.github.io/src/pages/about.js")),
  "component---src-pages-achievements-js": preferDefault(require("/workspaces/sandunsameera.github.io/src/pages/achievements.js")),
  "component---src-pages-certifications-js": preferDefault(require("/workspaces/sandunsameera.github.io/src/pages/certifications.js")),
  "component---src-pages-experience-js": preferDefault(require("/workspaces/sandunsameera.github.io/src/pages/experience.js")),
  "component---src-pages-index-js": preferDefault(require("/workspaces/sandunsameera.github.io/src/pages/index.js")),
  "component---src-pages-news-js": preferDefault(require("/workspaces/sandunsameera.github.io/src/pages/news.js")),
  "component---src-pages-projects-js": preferDefault(require("/workspaces/sandunsameera.github.io/src/pages/projects.js"))
}

