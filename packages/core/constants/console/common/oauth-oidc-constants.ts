/**
 * Copyright (c) 2022, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

 export class OidcConstants  {

    /* Private constructor to avoid object instantiation from outside
    * the class.
    *
    * @hideconstructor
    */
   private constructor () { }
    
    // Constants related to OIDC
    public static readonly OIDC_APP: string = "oidc";
    public static readonly CODE: string = "code";
    // Tokens
    static readonly  ACCESS_TOKEN = "access_token";
    static readonly  ID_TOKEN = "id_token";

    // Errors
    static readonly  ERROR = "error";
    static readonly  ERROR_DESCRIPTION = "error_description";

    // Request header values
   static readonly REQUEST_HEADER_SCOPE_OPENID = "scope=openid";
   static readonly REQUEST_HEADER_SCOPE_OPENID_PROFILE = "scope=openid profile";
   static readonly REQUEST_HEADER_ID_TOKEN_RESPONSE_TYPE = "response_type=id_token+token";
   static readonly REQUEST_HEADER_CODE_RESPONSE_TYPE = "response_type=code";
   static readonly REQUEST_BODY_CODE_RESPONSE_TYPE_VALUE = "code";
   static readonly REQUEST_HEADER_CODE_ID_TOKEN_RESPONSE_TYPE = "response_type=code+id_token";
   static readonly REQUEST_HEADER_CODE_TOKEN_RESPONSE_TYPE = "response_type=code+token";
   static readonly REQUEST_HEADER_CODE_ID_TOKEN_TOKEN_RESPONSE_TYPE = "response_type=code+id_token+token";
   static readonly REQUEST_HEADER_CLIENT_ID = "client_id=";
   static readonly REQUEST_HEADER_REDIRECT_URI = "redirect_uri=";
   static readonly REQUEST_HEADER_NONCE = "nonce=abc";

    // ID token Header Parameter values
    static readonly ALGORITHME_TYPE_RS256 = "RS256";
    static readonly ALGORITHM_TYPE_SHA256_WITH_RSA = "SHA256withRSA";

    // Encryption algorithm and method values
    static readonly ENCRYPTION_ALGORITHM_RSA_OAEP = "RSA-OAEP";
    static readonly ENCRYPTION_METHOD_A128GCM = "A128GCM";
  
    // ID token body Parameter values
    static readonly USERNAME = "username";

    // Client authentication methods values
    static readonly CLIENT_AUTHENTICATION_METHOD_PVT_KEY_JWT = "Private Key JWT";
    static readonly CLIENT_AUTHENTICATION_METHOD_MTLS = "Mutual TLS";

    // PAR response body parameter values
    static readonly EXPIRES_IN = "expires_in";
    static readonly REQUEST_URI = "request_uri";

    // Application state.
    static readonly APPLICATION_ACTIVE_STATE: string = "ACTIVE";
    static readonly APPLICATION_INACTIVE_STATE: string = "INACTIVE";
  }
