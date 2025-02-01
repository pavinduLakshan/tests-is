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

export class SAMLKeywords {

    public static readonly SAML_RESPONSE_BODY = "SAMLResponse";

    public static readonly SAML_ENCODE_BASE64 = "base64";

    public static readonly SAML_AUDIENCE = "saml2:Audience";

    public static readonly SAML_RESPONSE = "saml2p:Response";

    public static readonly SAML_RESPONSE_DESTINATION = "Destination";

    public static readonly SAML_NAME_ID = "saml2:NameID";

    public static readonly SAML_GIVEN_NAME_ATTRIBUTE = "[Name=\"http://wso2.org/claims/givenname\"]";

    public static readonly SAML_USER_CUSTOM_ATTRIBUTE = "[Name=\"http://wso2.org/claims/attr_custom_local\"]";
    
}
