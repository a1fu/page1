//eventos
cargarEventListeners()
function cargarEventListeners() {
    // document.addEventListener('DOMContentLoaded', sliderGalleries)
    document.addEventListener('DOMContentLoaded', sliderCarrusels)
    document.addEventListener('DOMContentLoaded', sliderGalleryProduct)
}

//////
//slider galerias
function sliderGalleries(){
    //variables
    const galleryContainers = document.querySelectorAll('.slide-img-js')
    
    //añadir sliders
    createSliderGalleries()
    function createSliderGalleries() {
        for (let i = 0; i < galleryContainers.length; i++) {
            sliderGallery(galleryContainers[i])
        }
    }

    //slider gallery
    function sliderGallery(galleryContainer) {
        galleryContainer.addEventListener('mousemove', function mousePosition(e) {
            //posicion mouse
            let posicionX = e.clientX
            //ancho
            const widht = galleryContainer.clientWidth
            //posicion
            const left = galleryContainer.getBoundingClientRect().left
            //numero elementos
            const children = galleryContainer.children.length
            //elementos
            const child = galleryContainer.children
            //division elemetos con el ancho padre
            const div = widht/children

            loadImage(posicionX, children, div, left, child)
        })
    }

    //cargar imagenes
    function loadImage(posicionX, children, div, left, child) {
        for (let i = 0; i < children; i++) {
            if( posicionX > (left + (div * i)) && posicionX < (left + (div * (i+1))) ){
                for (let x = 0; x < children; x++) {
                    child[x].classList.remove('active')
                }
                child[i].classList.add('active')
            }
        }
    }

}

//////
//slider carrusel
function sliderCarrusels(){

    //variables
    const slideTextContaniers = document.querySelectorAll('.slide-txt-js')

    //añadir sliders
    createSliderCarrusels()
    function createSliderCarrusels(){
        for (let i = 0; i < slideTextContaniers.length; i++) {
            sliderCarrusel(slideTextContaniers[i])
        }
    }

    //detectar tamaño ventana
    window.onresize = createSliderCarrusels

    //slider carrusel
    function sliderCarrusel(slideTextContanier) {
        //ancho ventana
        const widthWindow = window.innerWidth * 1.5
        //ancho caja elementos
        let width = slideTextContanier.clientWidth
        //tomar elementos
        const children = slideTextContanier.children

        //rellenar con elementos padre
        printElements()
        function printElements(){
            if (width < widthWindow) {
                addChildren( clnElements(children) )
                width = slideTextContanier.clientWidth
                printElements()
            }
        }

        //clonar elementos
        function clnElements(children){
            let newChildren = []
            for (let i = 0; i < children.length; i++) {
                const cln = children[i].cloneNode(true)
                newChildren.push(cln)
            }
            return newChildren
        }

        //agregar elemntos a elemento padre
        function addChildren(newChildren){
            // for (let i = 0; i < 4; i++) {
                for (let i = 0; i < newChildren.length; i++) {
                    slideTextContanier.appendChild(newChildren[i])
                }
            // }
        }
    }

}

//////
//slider galerias de productos
function sliderGalleryProduct(){

    //variables
    const galleryContainersHorizontal = document.querySelectorAll('.slide-product-horizontal-js')
    const galleryContainersVertical = document.querySelectorAll('.slide-product-vertical-js')
    
    //añadir sliders
    createSliderGalleriesHorizontal()
    function createSliderGalleriesHorizontal() {
        for (let i = 0; i < galleryContainersHorizontal.length; i++) {
            sliderGalleryHorizontal(galleryContainersHorizontal[i])
        }
    }

    createSliderGalleriesVertical()
    function createSliderGalleriesVertical() {
        for (let i = 0; i < galleryContainersVertical.length; i++) {
            sliderGalleryVertical(galleryContainersVertical[i])
        }
    }

    //horizontal
    //slider gallery
    function sliderGalleryHorizontal(galleryContainer) {
        //numero elementos
        const children = galleryContainer.children.length
        //elementos
        const child = galleryContainer.children
        galleryContainer.addEventListener('mousemove', (e) => {
            //posicion mouse
            let posicionX = e.clientX
            //ancho
            const widht = galleryContainer.clientWidth
            //posicion
            const left = galleryContainer.getBoundingClientRect().left
            //division elemetos con el ancho padre
            const div = widht/children

            loadImage(posicionX, children, div, left, child)
        })
        removeImg(galleryContainer, child)
    }

    //cargar imagenes
    function loadImage(posicionX, children, div, left, child) {
        for (let i = 0; i < children; i++) {
            if( posicionX > (left + (div * i)) && posicionX < (left + (div * (i+1))) ){
                for (let x = 0; x < children; x++) {
                    child[x].classList.remove('active')
                }
                child[i].classList.add('active')
            }
        }
    }

    //vertical
    //slider gallery
    function sliderGalleryVertical(galleryContainer) {
        //numero elementos
        const children = galleryContainer.children.length
        //elementos
        const child = galleryContainer.children
        galleryContainer.addEventListener('mousemove', (e) => {
            //posicion mouse
            let posicionY = e.clientY
            //ancho
            const height = galleryContainer.clientHeight
            //posicion
            const top = galleryContainer.getBoundingClientRect().top
            //division elemetos con el ancho padre
            const div = height/children

            loadImage(posicionY, children, div, top, child)
        })
        removeImg(galleryContainer, child)
    }

    //cargar imagenes
    function loadImage(posicionY, children, div, top, child) {
        for (let i = 0; i < children; i++) {
            if( posicionY > (top + (div * i)) && posicionY < (top + (div * (i+1))) ){
                for (let x = 0; x < children; x++) {
                    child[x].classList.remove('active')
                }
                child[i].classList.add('active')
            }
        }
    }
    
    // limpiar slider
    function removeImg(galleryContainer, child) {
        galleryContainer.addEventListener('mouseout', () => {
            for (let i = 0; i < child.length; i++) {
                child[i].classList.remove('active')
            }
        })
    }

}

