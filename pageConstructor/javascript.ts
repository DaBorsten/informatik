

const javascript_template = document.getElementById('course_template') as HTMLTemplateElement
const javascript_wrapper = document.querySelector('.coursesList')

fetch("json/javascript.json")
    .then(response => response.json())
    .then(data => {
        data.forEach((javascript: any, i: string) => {

            // Javascript-Tab Javascript Karten
            const javascriptkarte = javascript_template.content.cloneNode(true)

            const coursePreviewCard = (javascriptkarte as HTMLElement).querySelector('.coursePreviewCard') as HTMLElement
            const title = (javascriptkarte as HTMLElement).querySelector('[data-preview-card-title]')
            const description = (javascriptkarte as HTMLElement).querySelector('[data-preview-card-description]')
            const difficulty = (javascriptkarte as HTMLElement).querySelector('button[data-difficulty]') as HTMLElement

            coursePreviewCard.dataset.index = i

            // Infos
            if (title !== null) {
                if (javascript.title === "") {
                    title.remove()
                } else {
                    title.textContent = javascript.title
                }
            }

            if (description !== null) {
                if (javascript.description === "") {
                    description.remove()
                } else {
                    description.textContent = javascript.description
                }
            }

            // Difficulty
            if (difficulty !== null && coursePreviewCard !== null) {
                if (javascript.difficulty === "") {
                    difficulty.remove()
                } else if (javascript.difficulty === 1) {
                    difficulty.textContent = "leicht".toUpperCase()
                    difficulty.dataset.difficulty = "leicht"
                    coursePreviewCard.dataset.difficulty = "leicht"
                } else if (javascript.difficulty === 2) {
                    difficulty.textContent = "mittel".toUpperCase()
                    difficulty.dataset.difficulty = "mittel"
                    coursePreviewCard.dataset.difficulty = "mittel"
                } else if (javascript.difficulty === 3) {
                    difficulty.textContent = "schwer".toUpperCase()
                    difficulty.dataset.difficulty = "schwer"
                    coursePreviewCard.dataset.difficulty = "schwer"
                }
            }

            if (javascript_wrapper !== null) {
                javascript_wrapper.appendChild(javascriptkarte)
            }
        })
    })