import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

/**
 * InPlaceEditor Form Sample
 */

import {
  InPlaceEditor,
  Rte,
  MultiSelect
} from "@syncfusion/ej2-inplace-editor";

InPlaceEditor.Inject(Rte, MultiSelect);

let rteObj: InPlaceEditor = new InPlaceEditor({
  mode: "Inline",
  submitOnEnter: false,
  type: "RTE",
  editableOn: "EditIconClick",
  // popupSettings: {
  //   model: {
  //     width: (<HTMLElement>(
  //       document.querySelector("#inplace-editor-control.form-layout")
  //     )).offsetWidth
  //   }
  // },
  // tslint:disable-next-line:max-line-length
  value:
    "The extensive adoption of JavaScript for application development, and the ability to use HTML and JavaScript to create Windows Store apps, has made JavaScript a vital part of the Windows development ecosystem. Microsoft has done extensive work to make JavaScript easier to use.",
  name: "rte",
  validationRules: {
    rte: { required: [true, "Enter valid comments"] }
  },
  emptyText: "Enter your comment",
  model: {
    toolbarSettings: {
      enableFloating: false,
      items: [
        "Bold",
        "Italic",
        "Underline",
        "FontColor",
        "BackgroundColor",
        "LowerCase",
        "UpperCase",
        "|",
        "OrderedList",
        "UnorderedList"
      ]
    }
  }
});
rteObj.appendTo("#inplace_comment_editor");
