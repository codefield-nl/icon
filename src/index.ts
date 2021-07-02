import {LitElement, html, customElement, property, css} from 'lit-element';
import {FieldGroupIcons} from "./icons";

@customElement('fg-icon')
export class FieldgroupIconElement extends LitElement {
    static styles = css`
    :host {
        width: 24px;
        height: 24px;
        display: inline-block;
        color: inherit;
    }
    
    .icon {
        display:inline-block;
        width:100%;
        height:100%;
        background-color: currentColor;
    }

    .fg-icon-wrapper {
      border: 1px solid gray;
      height: 100px;
      width: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 10px;
      justify-content: center;
    }
    .fg-icon-wrapper .icon {
      width: 35px;
      height: 35px;
    }
  `;

    /**
     * The icon you want to display
     */
    @property()
    icon: string = '';

    @property()
    debug?: boolean;

    render() {
      if(typeof this.debug !== 'string') {

        // Custom icon
        if (this.icon.indexOf('.') === 0 || this.icon.indexOf('/') === 0) {
          return html` 
          <i class="icon" style="-webkit-mask: url('${this.icon}') center/contain no-repeat;"></i>
          `;
        }
        // Normal icon
        else {
          return html` 
          <i class="icon" style="-webkit-mask: url('./assets/icons/${this.getIcon()}') center/contain no-repeat;"></i>
          `;
        }
      }
      // Debug modus
      else {
        let htmlArr = [];
        for (const icon in FieldGroupIcons) {
          htmlArr.push(
            html`<div class="fg-icon-wrapper"> 
                    <span>${icon}</span>
                    <i class="icon" style="-webkit-mask: url('https://raw.githubusercontent.com/codefield-nl/icon/master/assets/icons/${FieldGroupIcons[icon]}.svg') center/contain no-repeat;"></i>
                </div>`);
        }
        return html`${htmlArr}`;
      }
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
