import { Build, Component, Element, Host, Prop, State, Watch, h } from '@stencil/core';
import camelCase from 'lodash.camelcase';
import { getName } from './utils';
// @ts-ignore
import * as components from '../../../../../sets/rounded/components.json';
import { variants } from '../../../../../sets/rounded/meta.json';
export class Icon {
  constructor() {
    this.components = components;
    /**
     * The size of the icon in CSS units
     */
    this.size = null;
    /**
     * The variant name of the icon set to apply
     */
    this.variant = variants[0];
    /**
     * Apply a stroke width to the line of the icon
     * Available options are 1-6
     * Applicable for variant `path` icons only
     */
    this.strokeWidth = null;
  }
  async connectedCallback() {
    this.loadIcon();
  }
  async loadIcon() {
    if (Build.isBrowser) {
      if (!this.name) {
        throw new Error('name: required');
      }
      if (this.variant === 'path' && !this.strokeWidth) {
        this.strokeWidth = 3;
      }
      if (this.variant === 'outline' && !this.strokeWidth) {
        this.strokeWidth = 1;
      }
      const component = this.components[camelCase(this.name)];
      const icon = component.variants && component.variants[this.variant];
      const svg = icon && icon.svg;
      this.svgContent = svg;
    }
    if (!this.ariaLabel) {
      const label = getName(this.name);
      if (label) {
        this.ariaLabel = label.replace(/\-/g, ' ');
      }
    }
  }
  render() {
    const rotation = (value) => {
      if (isNaN(value)) {
        return {
          n: 0,
          nne: 22.5,
          ne: 45,
          ene: 67.5,
          e: 90,
          ese: 112.5,
          se: 135,
          sse: 157.5,
          s: 180,
          ssw: 202.5,
          sw: 225,
          wsw: 247.5,
          w: 270,
          wnw: 292.5,
          nw: 315,
          nnw: 337.5
        }[value];
      }
      return value;
    };
    const fontSize = this.size || 'auto';
    const strokeWidth = this.strokeWidth;
    const stroke = 'inherit';
    const rotate = this.rotate && !['0', 'n'].includes(this.rotate) && `rotate(${rotation(this.rotate)}deg)`;
    const scale = this.flip && {
      v: 'scaleX',
      x: 'scaleX',
      h: 'scaleY',
      y: 'scaleY',
      a: 'scale',
      xy: 'scale',
      yx: 'scale',
      hv: 'scale',
      vh: 'scale'
    }[this.flip] + '(-1)';
    const transform = (rotate && scale) ? `${rotate} ${scale}` : ((rotate || scale) || '');
    return (h(Host, { role: "img", class: Object.assign(Object.assign({}, (this.flip && {
        [`flip-${this.flip}`]: true
      })), (this.rotate && {
        [this.rotate]: true,
      })), style: {
        fontSize,
        strokeWidth,
        stroke,
        transform
      } }, ((Build.isBrowser && this.svgContent)
      ? h("div", { class: "icon-inner", innerHTML: this.svgContent })
      : h("div", { class: "icon-inner" }))));
  }
  static get is() { return "rounded-icon"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["icon.css"]
  }; }
  static get styleUrls() { return {
    "$": ["icon.css"]
  }; }
  static get properties() { return {
    "ariaLabel": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Specifies the label to use for accessibility. Defaults to the icon name."
      },
      "attribute": "aria-label",
      "reflect": true
    },
    "flip": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Specifies the direction if the icon should flip\nAvailable options are: `\"x\"`/`\"h\"`, `\"y\"`/`\"v\"`"
      },
      "attribute": "flip",
      "reflect": false
    },
    "name": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Specifies which icon to use from the built-in set of icons."
      },
      "attribute": "name",
      "reflect": false
    },
    "src": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Specifies the exact `src` of an SVG file to use."
      },
      "attribute": "src",
      "reflect": false
    },
    "icon": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "A combination of both `name` and `src`. If a `src` url is detected\nit will set the `src` property. Otherwise it assumes it's a built-in named\nSVG and set the `name` property."
      },
      "attribute": "icon",
      "reflect": false
    },
    "size": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The size of the icon in CSS units"
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "null"
    },
    "rotate": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Apply a ratation on the icon\nAvailable options are:\n`\"n\"`, `\"ne\"`, `\"e\"`, `\"se\"`, `\"s\"`, `\"sw\"`, `\"w\"`, `\"nw\"`\n`\"0\"`, `\"45\"`, `\"90\"`, `\"135\"`, `\"180\"`, `\"-135\"`, `\"-90\"`, `\"-45\"`\nDefault, `false`."
      },
      "attribute": "rotate",
      "reflect": false
    },
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The variant name of the icon set to apply"
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "variants[0]"
    },
    "strokeWidth": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Apply a stroke width to the line of the icon\nAvailable options are 1-6\nApplicable for variant `path` icons only"
      },
      "attribute": "stroke-width",
      "reflect": false,
      "defaultValue": "null"
    }
  }; }
  static get states() { return {
    "svgContent": {},
    "components": {}
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "variant",
      "methodName": "loadIcon"
    }, {
      "propName": "name",
      "methodName": "loadIcon"
    }, {
      "propName": "src",
      "methodName": "loadIcon"
    }, {
      "propName": "size",
      "methodName": "loadIcon"
    }, {
      "propName": "flip",
      "methodName": "loadIcon"
    }, {
      "propName": "rotate",
      "methodName": "loadIcon"
    }, {
      "propName": "strokeWidth",
      "methodName": "loadIcon"
    }]; }
}
