//
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2017
// @license     : MIT
import {autoinject, customElement, bindable, bindingMode, children, inlineView, useView, containerless, View, DOM} from 'aurelia-framework';

@autoinject()
@customElement('ui-page')
@inlineView(`
<template class="ui-page">
  <div class="ui-page-title" if.bind="pageTitle" innerhtml.bind="pageTitle"></div>
  <div class="ui-page-body \${pageClass}"><slot></slot></div>
</template>`)
export class UIPage {
  constructor(public element: Element) {
    if (element.hasAttribute('animate')) element.classList.add('au-animate');
  }

  // aurelia hooks
  // created(owningView: View, myView: View) { }
  // bind(bindingContext: Object, overrideContext: Object) { }
  // attached() { }
  // detached() { }
  // unbind() { }
  // end aurelia hooks

  @bindable() pageClass = '';
  @bindable() pageTitle;
}

@autoinject()
@customElement('ui-section')
@inlineView(`<template class="ui-section"><slot></slot></template>`)
export class UISection {
  constructor(public element: Element) {
    if (element.hasAttribute('animate')) element.classList.add('au-animate');
    // LAYOUT
    if (element.hasAttribute('row-layout')) element.classList.add('row');
    else element.classList.add('column');
    // ALIGNMENT
    if (element.hasAttribute('center')) element.classList.add('ui-align-center');
    if (element.hasAttribute('middle')) element.classList.add('ui-align-middle');
  }

  // aurelia hooks
  // created(owningView: View, myView: View) { }
  // bind(bindingContext: Object, overrideContext: Object) { }
  // attached() { }
  // detached() { }
  // unbind() { }
  // end aurelia hooks
}


@autoinject()
@customElement('ui-content')
@inlineView(`<template class="ui-content"><slot></slot></template>`)
export class UIContent {
  constructor(public element: Element) {
    if (element.hasAttribute('animate')) element.classList.add('au-animate');
    if (element.hasAttribute('padded')) element.classList.add('ui-pad-all');
    if (element.hasAttribute('scroll')) element.classList.add('ui-scroll');
  }

  // aurelia hooks
  // created(owningView: View, myView: View) { }
  // bind(bindingContext: Object, overrideContext: Object) { }
  // attached() { }
  // detached() { }
  // unbind() { }
  // end aurelia hooks
}

@autoinject()
@customElement('ui-glyph')
@inlineView(`<template class="ui-icon"><svg if.bind="glyph"><use tabindex="-1" x="0" y="0" xlink:href="#\${glyph}"/></svg></template>`)
export class UIGlyph {
  constructor(public element: Element) { }

  // aurelia hooks
  // created(owningView: View, myView: View) { }
  // bind(bindingContext: Object, overrideContext: Object) { }
  // attached() { }
  // detached() { }
  // unbind() { }
  // end aurelia hooks

  @bindable() glyph = '';
}

@autoinject()
@customElement('ui-loader')
@inlineView(`<template class="ui-app-loader" show.bind="busy">
  <div class="ui-loader-div">
    <ui-glyph class="ui-anim-loader" glyph="glyph-loader"></ui-glyph>
  </div>
</template>`)
export class UILoader {
  constructor(element: Element) {
    if (element.hasAttribute('big')) element.classList.add('ui-big');
    if (element.hasAttribute('small')) element.classList.add('ui-small');
  }

  @bindable() busy: boolean = false;
}
