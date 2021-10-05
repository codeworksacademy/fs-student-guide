import { $debounce } from "./utils/debounce.js"

// JAVASCRIPT HOOKS
const currentUrl = window.location.href.substr(window.location.href.indexOf('fs-student-guide/') + 17)

function setActiveNavLink() {
  const navElem = document.getElementById('nav-' + currentUrl)
  if (!navElem) { return }
  navElem.classList.add('active-nav')
}

function setSidebarPosition() {
  const isMobile = window.innerWidth < 992
  const sidebar = document.getElementById('sidebar')
  if (isMobile) {
    sidebar.className = 'offcanvas offcanvas-start bg-dark'
    sidebar.tabIndex = -1
  } else {
    sidebar.className = 'col-lg-2 d-none d-lg-block bg-dark'
    sidebar.tabIndex = 0
    sidebar.style.visibility = 'visible'
  }
}

async function buildSidebar() {
  setSidebarPosition()
  const res = await fetch('/fs-student-guide/search.json')
  const data = await res.json()
  data.filter(i => {
    if (!i || !i.title || !i.url || !i.url.includes('resources')) { return }
    return i
  }).forEach(item => {
    const sidebarItem = document.createElement('a')
    const cleanTitle = item.title.replace(/-/g, ' ')
    sidebarItem.href = item.url
    if (item.url.includes(currentUrl)) {
      sidebarItem.classList.add('active-nav')
    }
    sidebarItem.title = cleanTitle
    sidebarItem.innerHTML = `
      <li class="selectable p-2 no-select text-success lighten-30 text-capitalize rounded no-select">${cleanTitle}</li>
    `
    let wk = item.url.substr(28).split('/')[0]
    if (!wk.includes('wk')) { wk = 'wk0' }
    document.getElementById(wk)?.appendChild(sidebarItem)
  })
  if (currentUrl.includes('wk')) {
    let activeWK = 'c-' + currentUrl.split('/').find(s => s.includes('wk'))
    // @ts-ignore
    let activeC = bootstrap.Collapse.getOrCreateInstance(document.getElementById(activeWK))
    activeC.show()
  }
}


function init() {
  try {
    setActiveNavLink()
    // @ts-ignore
    SimpleJekyllSearch({
      searchInput: document.getElementById('search-input'),
      resultsContainer: document.getElementById('results-container'),
      json: '/fs-student-guide/search.json',
      searchResultTemplate: '<a href="{url}" title="{title}"><li class="selectable p-2 text-dark rounded">{title}</li></a>',
      noResultsText: 'No results found.',
      limit: 10,
      fuzzy: false,
    })

    buildSidebar()
  } catch (error) {
    console.error('[INITIALIZATION_ERROR]', error.message, error.stack, error)
  }

  window.addEventListener('resize', () => {
    $debounce(setSidebarPosition, 500)
  })

}



init()