/**
 * Copyright (c) 2025, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

export class CypressKeywords {

    //Invoke
    public static readonly INVOKE_TEXT = "text";
    public static readonly ASSERTION_INVOKE_VAL = "val";

    //Visibility
    public static readonly ASSERTION_TO_BE_VISIBLE = "be.visible";
    public static readonly ASSERTION_TO_NOT_BE_VISIBLE = "not.be.visible";
    public static readonly ASSERTION_TO_BE_VISIBILITY = "visible";
    public static readonly ASSERTION_TO_BE_ELEMENT_VISIBILITY = ":visible";

    //Exist
    public static readonly ASSERTION_TO_NOT_EXIST = "not.exist";

    public static readonly ASSERTION_TO_EXIST = "exist";

    //Text and Operator Assertions
    public static readonly ASSERTION_TO_INCLUDE = "include";
    public static readonly ASSERTION_TO_NOT_INCLUDE = "not.include";
    public static readonly ASSERTION_TO_EQ = "eq";
    public static readonly ASSERTION_TO_CONTAIN = "contain";
    public static readonly ASSERTION_TO_CONTAIN_TEXT = "contain.text";
    public static readonly ASSERTION_TO_NOT_CONTAIN = "not.contain";
    public static readonly ASSERTION_HAVE_VAL = "have.value";
    public static readonly ASSERTION_TO_NOT_BE_EMPTY = "not.be.empty";
    public static readonly ASSERTION_TO_BE_EMPTY = "be.empty";
    public static readonly ASSERTION_TO_BE_GREATER = "be.greaterThan";
    public static readonly ASSERTION_TO_NOT_BE_NULL = "not.be.null";
    public static readonly ASSERTION_TO_BE_TRUE = "be.true";

    //Enabled/Disabled Assertions
    public static readonly ASSERTION_NOT_BE_DISABLED = "not.be.disabled";
    public static readonly ASSERTION_TO_BE_ENABLED = "be.enabled";
    public static readonly ASSERTION_TO_BE_DISABLED = "be.disabled";

    //Checked / Unchecked Assertions
    public static readonly ASSERTION_TO_BE_CHECKED = "be.checked";
    public static readonly ASSERTION_NOT_TO_BE_CHECKED = "not.be.checked";

    //Style Assertions
    public static readonly ASSERTION_HAVE_CLASS = "have.class";
    public static readonly ASSERTION_NOT_HAVE_CLASS = "not.have.class";
    public static readonly ASSERTION_TO_HAVE_CSS = "have.css";
    public static readonly ASSERTION_TO_HAVE_ATTRIBUTE = "have.attr";
    public static readonly ASSERTION_TO_NOT_HAVE_ATTRIBUTE = "not.have.attr";
    public static readonly ASSERTION_BACKGROUND_COLOR = "backgroundColor";
    public static readonly ASSERTION_BACKGROUND = "background";
    public static readonly ASSERTION_BACKGROUND_IMAGE = "background-image";
    public static readonly ASSERTION_COLOR = "color";
    public static readonly ASSERTION_READ_TEXT = "readText";

    public static readonly ASSERTION_HAVE_LENGTH = "have.length";

    // Cypress Keyboard events
    public static readonly PRESS_ENTER_KEY = "{enter}";
    public static readonly PRESS_DOWNARROW_KEY = "{downarrow}";

    // Common states

    public static readonly UNDEFINED: string = "undefined";

    public static readonly PENDING: string = "Pending";

    public static readonly ENABLED: string = "enabled";

    public static readonly DISABLED: string = "disabled";

    public static readonly CHECKED: string = "checked";

    public static readonly READONLY: string = "readonly";

    // Cypress events & actions.
    public static readonly TRIGGER_KEYDOWN = "keydown";

    public static readonly TRIGGER_KEY_ENTER = { key: "Enter" };

    public static readonly DRAG_AND_DROP = "drag-drop";

    //Invoke ClipBoard
    public static readonly NAVIGATOR_CLIPBOARD = "navigator.clipboard";

    public static readonly HAVE_PROPERTY = "have.property";

    // Page Position states
    public static readonly BOTTOM = "bottom";
    public static readonly TOP = "top";
}
