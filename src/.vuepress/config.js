const fs = require("fs");
const path = require("path");
const { config } = require("vuepress-theme-hope");

const GITHUB_USERNAME = 'codeworksacademy'

module.exports = config({
  base: "/fs-student-guide/",
  title: 'Codeworks Student guide',
  description: "Codeworks Immersive FullStack Program Resources",
  head: [
    ['meta', { name: 'theme-color', content: '#3093d9' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'application-name', content: `${GITHUB_USERNAME} guide` }],
    ['meta', { name: 'ROBOTS', content: 'FOLLOW' }],
    ['meta', { name: 'og:image', content: 'https://bcw.blob.core.windows.net/public/img/8600856373152463' }],
    ['meta', { name: 'og:type', content: 'article' }],
    ['meta', { name: 'og:url', content: `https://${GITHUB_USERNAME}.github.io/fs-student-guide` }],
    ['meta', { name: 'og:title', content: 'Learn to Code. Develop Your Future' }],
    ['meta', { name: 'og:locale', content: 'en_US' }]
  ],
  themeConfig: {
    pwa: false,
    logo: 'https://bcw.blob.core.windows.net/public/img/2900578872732848',
    editLinks: true,
    repo: `${GITHUB_USERNAME}/fs-student-guide`,
    repoLabel: 'Contribute!',
    docsDir: 'src',
    docsBranch: 'main',
    // nav: [
    //   {
    //     text: 'Resources',
    //     link: '/resources/',
    //   },
    //   {
    //     text: 'Vocab',
    //     link: '/vocab/',
    //   },
    //   {
    //     text: 'Codeworks',
    //     link: 'https://boisecodeworks.com'
    //   }
    // ],
    // sidebar: {
    //   '/vocab/': [...getSideBar('vocab', 'Vocabulary')],
    //   '/resources/': [
    //     ...getSideBar('resources', 'Student Resources'),
    //     ...getSideBar('resources/wk1', 'Building Blocks of Web Development'),
    //     ...getSideBar('resources/wk2', 'Intro to Js'),
    //     ...getSideBar('resources/wk3', 'Advancing with JS'),
    //     ...getSideBar('resources/wk4', 'Asynchronous Code'),
    //     ...getSideBar('resources/wk5', 'Servers with Node/Express'),
    //     ...getSideBar('resources/wk6', 'Frontend Frameworks with Vue3'),
    //     ...getSideBar('resources/wk7', 'Advancing with Vue3'),
    //     ...getSideBar('resources/wk8-9', 'Professional Environments'),
    //     ...getSideBar('resources/wk10', 'Foundations of C#'),
    //     ...getSideBar('resources/wk11', 'Dotnet WebApi\'s')
    //   ]
    // },
  },
  // @ts-ignore
  markdown: {
    lineNumbers: true
  }
})

function getSideBar(folder, title) {
  const extension = [".md"];
  const root = folder.lastIndexOf('/') === -1 ? '' : folder.slice(folder.lastIndexOf('/') + 1)
  const files = fs
    .readdirSync(path.join(`${__dirname}/../${folder}`))
    .filter(file =>
      file.toLowerCase() != "readme.md" &&
      fs.statSync(path.join(`${__dirname}/../${folder}`, file)).isFile() &&
      extension.includes(path.extname(file))
    ).map(filename => {
      if (!root) {
        return filename
      }
      return root + '/' + filename
    });
  const children = [...files]
  if (!root) {
    children.unshift('')
  }
  return [{ title: title, children }];
}
