const template = document.createElement("div");
template.innerHTML = `
    <style>
    p{
        color:blue;
    }
    </style>
    <p class="texto">Hola mundo 2!</p>
    <strong>Texto ejemplo!</strong>
`

class myElement extends HTMLElement{
    constructor(){
        super();
        
        this.p = document.createElement('p')
    }
    connectedCallback(){
        this.p.textContent = "Hola mundo!"
        this.appendChild(this.p)
        this.appendChild(template)
    }
}

customElements.define('my-element', myElement)