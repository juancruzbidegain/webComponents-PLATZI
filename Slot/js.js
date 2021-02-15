
class myElement extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: "open"})
        
    }

    getTemplate(){
        const template = document.createElement("template")
        template.innerHTML = `
        ${this.getStyles()}
            <seccion>     
                <h2>
                    <slot>
                        
                    </slot>
                </h2>     
            </seccion>
            
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
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }
    
}

customElements.define('my-element', myElement)