// JAVASCRIPT HOOKS
const currentUrl = window.location.href.substr(window.location.href.indexOf('fs-student-guide/') + 11).split('/')[0]

function setActiveNavLink() {
  const navElem = document.getElementById('nav-' + currentUrl)
  if (!navElem) { return }
  navElem.classList.add('active-nav')
}

async function buildSidebar() {
  const res = await fetch('/fs-student-guide/search.json')
  const data = await res.json()
  data.forEach(item => {
    const sidebarItem = document.createElement('a')
    const cleanTitle = item.title.replace(/-/g, ' ')
    sidebarItem.href = item.url
    if (currentUrl === item.url) {
      sidebarItem.classList.add('active-nav')
    }
    sidebarItem.title = cleanTitle
    sidebarItem.innerHTML = `
      <li class="selectable p-2 text-dark rounded">${cleanTitle}</li>
    `
    let wk = 'wk' + item.url.split('/wk')[0]
    wk += wk.length === 2 ? '0' : ''
    document.getElementById(wk)?.appendChild(sidebarItem)
  })
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
      fuzzy: true,
    })

    buildSidebar()
  } catch (error) {
    console.error('[INITIALIZATION_ERROR]', error.message, error.stack, error)
  }

}



init()