import { Build, Component, Element, Host, Prop, State, Watch, h } from '@stencil/core';
import camelCase from 'lodash.camelcase'
import { getName } from './utils';
// @ts-ignore
import * as components from '../../../data/components.json'
import { variants } from '../../../data/meta.json'

@Component({
  tag: 'glyph-icon',
  styleUrl: 'icon.css',
  shadow: true
})
export class Icon {
  @Element() el!: HTMLElement;

  @State() private svgContent?: string;
  @State() private components = components;

  /**
   * Specifies the label to use for accessibility. Defaults to the icon name.
   */
  @Prop({ mutable: true, reflect: true }) ariaLabel?: string;

  /**
   * Specifies the direction if the icon should flip
   * Available options are: `"x"`/`"h"`, `"y"`/`"v"`
   */
  @Prop() flip?: string;

  /**
   * Specifies which icon to use from the built-in set of icons.
   */
  @Prop() name?: string;

  /**
   * Specifies the exact `src` of an SVG file to use.
   */
  @Prop() src?: string;

  /**
   * A combination of both `name` and `src`. If a `src` url is detected
   * it will set the `src` property. Otherwise it assumes it's a built-in named
   * SVG and set the `name` property.
   */
  @Prop() icon?: any;

  /**
   * The size of the icon in CSS units
   */
  @Prop() size = null;

  /**
   * Apply a ratation on the icon
   * Available options are:
   * `"n"`, `"ne"`, `"e"`, `"se"`, `"s"`, `"sw"`, `"w"`, `"nw"`
   * `"0"`, `"45"`, `"90"`, `"135"`, `"180"`, `"-135"`, `"-90"`, `"-45"`
   * Default, `false`.
   */
  @Prop() rotate?: string;

  /**
   * The variant name of the icon set to apply
   */
  @Prop() variant = variants[0];

  /**
   * Apply a stroke width to the line of the icon
   * Available options are 1-6
   * Applicable for variant `path` icons only
   */
  @Prop() strokeWidth = null;

  async connectedCallback() {
    this.loadIcon();
  }

  @Watch('variant')
  @Watch('name')
  @Watch('src')
  @Watch('size')
  @Watch('flip')
  @Watch('rotate')
  @Watch('strokeWidth')
  async loadIcon() {
    if (Build.isBrowser) {
      if (!this.name) {
        throw new Error('name: required')
      }
      if (this.variant === 'path' && !this.strokeWidth) {
        this.strokeWidth = 3
      }
      if (this.variant === 'outline' && !this.strokeWidth) {
        this.strokeWidth = 1
      }
      const component = this.components[camelCase(this.name)]
      const icon = component.variants && component.variants[this.variant]
      const svg = icon && icon.svg
      this.svgContent = svg
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
        }[value]
      }
      return value
    }
    const fontSize = this.size || 'auto'
    const strokeWidth = this.strokeWidth
    const stroke = 'inherit'
    const rotate = this.rotate && !['0', 'n'].includes(this.rotate) && `rotate(${rotation(this.rotate)}deg)`
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
    }[this.flip] + '(-1)'
    const transform = (rotate && scale) ? `${rotate} ${scale}` : ((rotate || scale) || '')

    return (
      <Host
        role="img"
        class={{
          ...(this.flip && {
            [`flip-${this.flip}`]: true
          }),
          ...(this.rotate && {
            [this.rotate]: true,
          }),
        }}
        style={{
          fontSize,
          strokeWidth,
          stroke,
          transform
        }}
      >
        {(
          (Build.isBrowser && this.svgContent)
            ? <div
                class="icon-inner"
                innerHTML={this.svgContent}
              ></div>
            : <div class="icon-inner"></div>
        )}
      </Host>
    );
  }
}
