const orderCta = document.querySelector('.order-cta')
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

function openOrderModal() {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
}

function closeOrderModal() {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
}

orderCtaBuyButton.addEventListener('click', openOrderModal)
orderModalOverlay.addEventListener('click', closeOrderModal)

orderCtaBookmarkButton.addEventListener('click', toggleOrderCtaBookmark)

function toggleOrderCtaBookmark() {
  const [icon, countSpan] = this.children
  const count = Number(countSpan.innerText.replaceAll(',', ''))
  const hasActiveClass = this.classList.contains('is-active')

  if (hasActiveClass) {
    icon.classList = 'ic-bookmark'
  } else {
    icon.classList = 'ic-bookmark-filled'
  }

  this.classList.toggle('is-active')
  replaceNewCountText(hasActiveClass, count, countSpan)
}

const replaceNewCountText = (hasActiveClass, newCount, spanHtml) => {
  if (hasActiveClass) {
    newCount = newCount - 1
  } else {
    newCount = newCount + 1
  }

  spanHtml.innerText = newCount.toLocaleString()
}
