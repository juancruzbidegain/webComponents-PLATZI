
class myElement extends HTMLElement{
    constructor(){
        super();
    }
    getTemplate(){
        const template = document.createElement("template")
        template.innerHTML = `
            <seccion>
                <h2>Hola Mundo</h2>
                <div>Soy mas texto!!!</div>
            </seccion>
            ${this.getStyles()}
            `
        return template;
    }
    getStyles(){
        return `
        <style>
        h2{
            color: red;
        }
        </style>
        `
    }
    render(){
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }
    
}

customElements.define('my-element', myElement)