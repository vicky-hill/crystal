const DEFAULT_OPTIONS = {
    autoClose: 2000,
    position: 'bottom-right'
}

class Toast {
    #toastElem
    #toastTitle
    #toastMessage
    
    constructor(options) {
        this.#toastElem = document.createElement("div")
        this.#toastElem.classList.add("toast")

        const toastHeader = document.createElement("div")
        toastHeader.classList.add("toast__header")

        const toastImage = document.createElement("div")
        toastImage.classList.add("toast__header-image")

        this.#toastTitle = document.createElement("strong")
        this.#toastTitle.classList.add("toast__header-title")

        const toastSmall = document.createElement("small")

        const closeButton = document.createElement("button")
        closeButton.classList.add("toast__header-close")
        closeButton.onclick = function() {
            this.parentElement.parentElement.remove()
        }

        const closeIcon = document.createElement("span")
        closeIcon.innerHTML = '&times';

        closeButton.append(closeIcon)
        toastHeader.append(toastImage)
        toastHeader.append(this.#toastTitle)
        toastHeader.append(toastSmall)
        toastHeader.append(closeButton)

        this.#toastMessage = document.createElement("div")
        this.#toastMessage.classList.add("toast__body")

        this.#toastElem.append(toastHeader)
        this.#toastElem.append(this.#toastMessage)
    
        this.update({...DEFAULT_OPTIONS, ...options})
    }


    set position(value) {
        const currentContainer = this.#toastElem.parentElement
        const selector = `[data-position="${value}"]`
        const container = document.querySelector(selector) || createContainer(value)
        container.append(this.#toastElem)
        if(!currentContainer || currentContainer.hasChildNodes()) return
        currentContainer.remove()
    }

    set title (value) {
        this.#toastTitle.textContent = value
    }

    set message (value) {
        this.#toastMessage.textContent = value
    }

    set variant (value) {
        this.#toastElem.classList.add(`toast--${value}`)
    }

    set autoClose(value) {
        if(!value) return
        setTimeout(() => {
            this.remove()
        }, value)
    }

    remove() {
        const container = this.#toastElem.parentElement
        this.#toastElem.remove()
        if(!container || container.hasChildNodes()) return
        container.remove()
    }

    update(options) {
        Object.entries(options).forEach(([key, value]) => {
            this[key] = value
         })
    }
}

function createContainer(position) {
    const container = document.createElement("div")
    container.classList.add("toast__container")
    container.dataset.position = position
    document.body.append(container)
    return container
}

function createToast(title, message, options) {
    new Toast({ title, message, ...options })
}

export default createToast

