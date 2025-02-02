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

/**
 * This class is used to manage attributes based constants.
 */
export class AttributeManagementConstants {

    // Default attribute constants 
    public static readonly ACTIVE_ATTRIBUTE_DISPLAY_NAME: string = "Active";
    public static readonly ACTIVE_ATTRIBUTE_URI: string = "http://wso2.org/claims/active";

    public static readonly ADDRESS_ATTRIBUTE_DISPLAY_NAME: string = "Address";
    public static readonly ADDRESS_ATTRIBUTE_URI: string = "http://wso2.org/claims/addresses";

    public static readonly ADDRESS_FORMATTED_ATTRIBUTE_DISPLAY_NAME: string = "Address - Formatted";
    public static readonly ADDRESS_FORMATTED_ATTRIBUTE_URI: string = "http://wso2.org/claims/addresses.formatted";

    public static readonly ADDRESS_LOCALITY_ATTRIBUTE_DISPLAY_NAME: string = "Address - Locality";
    public static readonly ADDRESS_LOCALITY_ATTRIBUTE_URI = "http://wso2.org/claims/addresses.locality";

    public static readonly EMAIL_ATTRIBUTE_DISPLAY_NAME: string = "Email";
    public static readonly EMAIL_ATTRIBUTE_URI: string ="http://wso2.org/claims/emailaddress";

    public static readonly FIRSTNAME_ATTRIBUTE_DISPLAY_NAME: string = "First Name";
    public static readonly FIRSTNAME_ATTRIBUTE_URI: string = "http://wso2.org/claims/givenname";

    public static readonly LASTNAME_ATTRIBUTE_DISPLAY_NAME: string = "Last Name";
    public static readonly LASTNAME_ATTRIBUTE_URL: string = "http://wso2.org/claims/lastname";

    public static readonly MOBILE_ATTRIBUTE_DISPLAY_NAME: string = "Mobile";
    public static readonly MOBILE_ATTRIBUTE_URI: string = "http://wso2.org/claims/mobile";

    public static readonly COUNTRY_ATTRIBUTE_DISPLAY_NAME: string = "Country";
    public static readonly COUNTRY_ATTRIBUTE_URI: string = "http://wso2.org/claims/country";

    public static readonly ADD_ATTRIBUTE_BTN_NAME: string = "Add Attribute";

    public static readonly LOCAL_CLAIMS_PATH: string = "http://wso2.org/claims/";

    public static readonly OIDC_CLAIMS_PATH: string = "http://wso2.org/oidc/claim";

    public static readonly CLAIM_ATTRIBUTE_INPUT: string = "[id=\"claim_mand_";
    public static readonly SCIM_ATTRIBUTE_INPUT: string = "urn:scim:schemas:extension:custom:User";

    public static readonly USERNAME_ATTRIBUTE_URI: string = "http://wso2.org/claims/username";

    public static readonly GROUPS_ATTRIBUTE_URI: string = "http://wso2.org/claims/groups";
}
