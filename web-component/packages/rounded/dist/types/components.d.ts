/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface RoundedIcon {
        /**
          * Specifies the label to use for accessibility. Defaults to the icon name.
         */
        "ariaLabel"?: string;
        /**
          * Specifies the direction if the icon should flip Available options are: `"x"`/`"h"`, `"y"`/`"v"`
         */
        "flip"?: string;
        /**
          * A combination of both `name` and `src`. If a `src` url is detected it will set the `src` property. Otherwise it assumes it's a built-in named SVG and set the `name` property.
         */
        "icon"?: any;
        /**
          * Specifies which icon to use from the built-in set of icons.
         */
        "name"?: string;
        /**
          * Apply a ratation on the icon Available options are: `"n"`, `"ne"`, `"e"`, `"se"`, `"s"`, `"sw"`, `"w"`, `"nw"` `"0"`, `"45"`, `"90"`, `"135"`, `"180"`, `"-135"`, `"-90"`, `"-45"` Default, `false`.
         */
        "rotate"?: string;
        /**
          * The size of the icon in CSS units
         */
        "size": any;
        /**
          * Specifies the exact `src` of an SVG file to use.
         */
        "src"?: string;
        /**
          * Apply a stroke width to the line of the icon Available options are 1-6 Applicable for variant `path` icons only
         */
        "strokeWidth": any;
        /**
          * The variant name of the icon set to apply
         */
        "variant": string;
    }
}
declare global {
    interface HTMLRoundedIconElement extends Components.RoundedIcon, HTMLStencilElement {
    }
    var HTMLRoundedIconElement: {
        prototype: HTMLRoundedIconElement;
        new (): HTMLRoundedIconElement;
    };
    interface HTMLElementTagNameMap {
        "rounded-icon": HTMLRoundedIconElement;
    }
}
declare namespace LocalJSX {
    interface RoundedIcon {
        /**
          * Specifies the label to use for accessibility. Defaults to the icon name.
         */
        "ariaLabel"?: string;
        /**
          * Specifies the direction if the icon should flip Available options are: `"x"`/`"h"`, `"y"`/`"v"`
         */
        "flip"?: string;
        /**
          * A combination of both `name` and `src`. If a `src` url is detected it will set the `src` property. Otherwise it assumes it's a built-in named SVG and set the `name` property.
         */
        "icon"?: any;
        /**
          * Specifies which icon to use from the built-in set of icons.
         */
        "name"?: string;
        /**
          * Apply a ratation on the icon Available options are: `"n"`, `"ne"`, `"e"`, `"se"`, `"s"`, `"sw"`, `"w"`, `"nw"` `"0"`, `"45"`, `"90"`, `"135"`, `"180"`, `"-135"`, `"-90"`, `"-45"` Default, `false`.
         */
        "rotate"?: string;
        /**
          * The size of the icon in CSS units
         */
        "size"?: any;
        /**
          * Specifies the exact `src` of an SVG file to use.
         */
        "src"?: string;
        /**
          * Apply a stroke width to the line of the icon Available options are 1-6 Applicable for variant `path` icons only
         */
        "strokeWidth"?: any;
        /**
          * The variant name of the icon set to apply
         */
        "variant"?: string;
    }
    interface IntrinsicElements {
        "rounded-icon": RoundedIcon;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "rounded-icon": LocalJSX.RoundedIcon & JSXBase.HTMLAttributes<HTMLRoundedIconElement>;
        }
    }
}
