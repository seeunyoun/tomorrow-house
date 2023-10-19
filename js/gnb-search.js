const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol')

const deleteAllButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
)
const deleteButtonList = gnbSearchHistoryList.querySelectorAll('.delete-button')

function openGnbSearchHistory() {
  if (gnbSearchHistoryList.children.length === 0) return

  if (!gnbSearchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeGnbSearchHistoryOnClickingOutside)
  }
  gnbSearchHistory.classList.add('is-active')
}

function closeGnbSearchHistory() {
  gnbSearchHistory.classList.remove('is-active')
  window.removeEventListener('click', closeGnbSearchHistoryOnClickingOutside)
}

function closeGnbSearchHistoryOnClickingOutside(e) {
  if (!gnbSearch.contains(e.target)) {
    closeGnbSearchHistory()
  }
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)

function deleteAllSearchHistoryItems() {
  gnbSearchHistoryList.innerHTML = ''
  closeGnbSearchHistory()
}

deleteAllButton.addEventListener('click', deleteAllSearchHistoryItems)

function delteSearchHistoryItem(e) {
  e.stopPropagation()
  const itemToDelete = this.parentNode
  gnbSearchHistoryList.removeChild(itemToDelete)

  if (gnbSearchHistoryList.children.length === 0) {
    closeGnbSearchHistory()
  }
}

deleteButtonList.forEach((button) => {
  button.addEventListener('click', delteSearchHistoryItem)
})
