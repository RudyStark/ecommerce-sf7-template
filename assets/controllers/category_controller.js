// assets/controllers/category_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["grid", "viewMoreButton"]
    static values = {
        currentPage: Number,
        totalPages: Number
    }

    loadMore(event) {
        const categoryId = event.currentTarget.dataset.categoryId
        const nextPage = this.currentPageValue + 1

        fetch(`/api/categories/${categoryId}/subcategories?page=${nextPage}`, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then(response => response.text())
            .then(html => {
                this.gridTarget.insertAdjacentHTML('beforeend', html)
                this.currentPageValue = nextPage

                if (nextPage >= this.totalPagesValue) {
                    this.viewMoreButtonTarget.classList.add('fade-out')
                    setTimeout(() => {
                        this.viewMoreButtonTarget.remove()
                    }, 300)
                }
            })
    }
}
