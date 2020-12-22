export {};
declare global {
  interface Element {
    /**@param className can have multiple classes with spaces in between e.g btn btn-success */
    addClass(className: string): void;
    /**@param className can have multiple classes with spaces in between e.g btn btn-success */
    removeClass(className: string): void;
    /**@param className will check if css class exist on the provided HTML Element and return true or false */
    hasClass(className: string): boolean;
    /**@param className will toggle one or multiple classes */
    toggleClass(className: string): void;
    /**@param element insert element in the selected HTML Element */
    appendTo(element: Element): void;
    /**@param element delete element from the selected HTML Element */
    removeElement(element: Element): void;
    /**@param nameOrIdOrClass You can provide HTML Element id, name, class or TagName e.g. #id,name,.classname or body */
    getElement(nameOrIdOrClass: string): Element | null;
    /**Provides previous element of referenced HTML element*/
    prev(): Element | null;
    /**Provides next element of referenced HTML element*/
    next(): Element | null;
    /**Provides immidiate parent element of referenced HTML element*/
    parent(): Element | null;
    /**Provides immidiate parent element of referenced HTML element*/
    getOffSetParent(): Element | null;
    /**Provides all children elements under referenced HTML element*/
    getChildren(): Element[] | null;
  }
  interface Document {
    /**@param nameOrIdOrClass You can provide HTML Element id, name, class or TagName e.g. #id,name,.classname or body */
    getElement(nameOrIdOrClass: string): Element | null;
  }
  interface String {
    capitalize(): string;
  }
}
(() => {
  //#region HTML Element Utilities
  Element.prototype.addClass = function (className: string) {
    let _classes = className.split(" ");
    _classes.forEach((cls: string) => {
      this.classList.add(cls);
    });
  };
  Element.prototype.removeClass = function (className: string) {
    let _classes = className.split(" ");
    _classes.forEach((cls: string) => {
      this.classList.remove(cls);
    });
  };
  Element.prototype.hasClass = function (className: string): boolean {
    return this.classList.contains(className);
  };
  Element.prototype.toggleClass = function (className: string) {
    let _classes = className.split(" ");
    _classes.forEach((cls: string) => {
      if (this.hasClass(cls)) {
        this.removeClass(cls);
      } else {
        this.addClass(cls);
      }
    });
  };
  Element.prototype.appendTo = function (element: Element | Element) {
    if (!element)
      throw new Error(
        "Element not found. You must have to specify HTML element"
      );
    this.innerHTML += element.outerHTML;
  };
  Element.prototype.removeElement = function (element: Element | Element) {
    if (!element)
      throw new Error(
        "Element not found. You must have to specify HTML element"
      );
    element.remove();
  };
  Element.prototype.getElement = function (
    nameOrIdOrClass: string
  ): Element | null {
    let _name: string = "";
    if (nameOrIdOrClass.indexOf("#") === 0) {
      _name = nameOrIdOrClass.split("#")[1];
      return document.getElementById(_name);
    }
    if (nameOrIdOrClass.indexOf(".") === 0) {
      _name = nameOrIdOrClass.split(".")[1];
      return document.getElementsByClassName(_name)[0] as Element;
    }
    if (document.getElementsByName(nameOrIdOrClass)) {
      return document.getElementsByName(nameOrIdOrClass)[0];
    }
    if (document.getElementsByTagName(nameOrIdOrClass))
      return document.getElementsByTagName(nameOrIdOrClass)[0] as Element;
    return null;
  };
  Element.prototype.prev = function () {
    return this.previousElementSibling;
  };
  Element.prototype.next = function () {
    return this.nextElementSibling;
  };
  Element.prototype.getChildren = function () {
    return (this.children as unknown) as Element[];
  };
  Element.prototype.parent = function () {
    return this.parentElement;
  };
  HTMLElement.prototype.getOffSetParent = function () {
    return this.offsetParent;
  };
  //#endregion
  //#region Document Utilities
  Document.prototype.getElement = function (
    nameOrIdOrClass: string
  ): Element | null {
    let _name: string = "";
    if (nameOrIdOrClass.indexOf("#") === 0) {
      _name = nameOrIdOrClass.split("#")[1];
      return document.getElementById(_name);
    }
    if (nameOrIdOrClass.indexOf(".") === 0) {
      _name = nameOrIdOrClass.split(".")[1];
      return document.getElementsByClassName(_name)[0] as Element;
    }
    if (document.getElementsByName(nameOrIdOrClass).length > 0) {
      return document.getElementsByName(nameOrIdOrClass)[0];
    }
    if (document.getElementsByTagName(nameOrIdOrClass).length > 0)
      return document.getElementsByTagName(nameOrIdOrClass)[0] as Element;
    return null;
  };
  //#endregion
  //#region String
  // eslint-disable-next-line no-extend-native
  String.prototype.capitalize = function (): string {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };
  //#endregion
})();
