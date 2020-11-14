import {LitElement, html, customElement, property, css} from 'lit-element';
import {FieldGroupIcons} from "./icons";

@customElement('fg-icon')
export class FieldgroupIconElement extends LitElement {
    static styles = css`
    :host {
        width:24px;
        height:24px;
        display: inline-block;
        color:black;
    }
    
    .icon {
        display:inline-block;
        width:100%;
        height:100%;
        background-color: currentColor;
    }
  `;

    /**
     * The icon you want to display
     */
    @property()
    icon: string = '';

    render() {
        return html` 
        <i class="icon" style="-webkit-mask: url('./../assets/icons/${this.getIcon()}') center/contain no-repeat;"></i>
         `;
    }

    getIcon(): string {
        let i = '';
        // @ts-ignore
        const iconFound: string = FieldGroupIcons[this.icon];
        if (iconFound) {
            i = iconFound + '.svg';
        }

        return i;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'fg-icon': FieldgroupIconElement;
    }
}
