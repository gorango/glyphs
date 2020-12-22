export declare class Icon {
  el: HTMLElement;
  private svgContent?;
  /**
   * Specifies the label to use for accessibility. Defaults to the icon name.
   */
  ariaLabel?: string;
  /**
   * Specifies the direction if the icon should flip
   * Available options are: `"x"`/`"h"`, `"y"`/`"v"`
   */
  flip?: string;
  /**
   * Specifies which icon to use from the built-in set of icons.
   */
  name?: string;
  /**
   * Specifies the exact `src` of an SVG file to use.
   */
  src?: string;
  /**
   * A combination of both `name` and `src`. If a `src` url is detected
   * it will set the `src` property. Otherwise it assumes it's a built-in named
   * SVG and set the `name` property.
   */
  icon?: any;
  /**
   * The size of the icon in CSS units
   */
  size: any;
  /**
   * Apply a ratation on the icon
   * Available options are:
   * `"n"`, `"ne"`, `"e"`, `"se"`, `"s"`, `"sw"`, `"w"`, `"nw"`
   * `"0"`, `"45"`, `"90"`, `"135"`, `"180"`, `"-135"`, `"-90"`, `"-45"`
   * Default, `false`.
   */
  rotate?: string;
  /**
   * The variant name of the icon set to apply
   */
  variant: string;
  /**
   * Apply a stroke width to the line of the icon
   * Available options are 1-6
   * Applicable for variant `path` icons only
   */
  strokeWidth: any;
  connectedCallback(): Promise<void>;
  loadIcon(): Promise<void>;
  render(): any;
}
