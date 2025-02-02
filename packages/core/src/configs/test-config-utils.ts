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

import { AsgardeoEndPointsConstants } from "../constants/endpoint-constants/asgardeo-endpoints-constants";
import { ApplicationConfigurationInterface } from "../models";

/**
 * Class containing getters to retrieve common environment related configurations.
 */
export class TestE2EConfigUtils {

    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    private constructor() { }

    // Common Test input data.
    public static readonly qrCodeScreenshot: string = "qrcode";
    public static readonly qrCodeImageWithType: string = "qrcode.png";

    public static readonly cypressFixtureLocation: string = "cypress/fixtures/";
    public static readonly cypressDownloadLocation: string = "cypress/downloads/";
    public static readonly backupCodesFileName: string = "backup_codes.txt";
    public static readonly mockServerLocation: string = "cypress/mocks";

    // Sample app based configurations.
    public static readonly asgardeoNodeSampleDefaultPort: number = 3000;
    public static readonly nodeSampleAppDefaultRedirectUrl: string = "https://localhost:3000";
    public static readonly javaSampleAppDefaultOriginUrl: string = "http://localhost:8081";
    public static readonly securedJavaSampleAppDefaultOriginUrl: string = "https://localhost:8081";
    public static readonly tomcatServerPort: string = "8081";
    public static readonly tomcatServerShutDownPort: string = "8006";
    public static readonly samlSampleAppHomePage: string = "/sample-app/home.jsp";

    // B2B Sample app based configurations.
    public static readonly nextjsSampleAppDefaultRedirectUrl: string = "http://localhost:3000";
    public static readonly b2bSampleAppAuthCallRegex = /\/auth\/signin\/wso2is/;
    public static readonly b2bSampleAppAuthCsrfCallRegex = /\/auth\/signin\?csrf=true/;
    public static readonly b2bSampleAppAuthCsrfSubString = "csrf=true";
    public static readonly b2bBusinessSampleDefaultPort: number = 3000;
    public static readonly b2bBusinessSampleAppDefaultRedirectUrl: string = "http://localhost:3000";
    public static readonly b2bBusinessSampleAppErrorPageSignInButton = "Sign in with WSO2IS";
    public static readonly b2bAdminSampleDefaultPort: number = 3001;
    public static readonly b2bAdminSampleAppDefaultRedirectUrl: string = "http://localhost:3001";
    public static readonly b2bAdminSampleAppErrorPageSignInButton = "Sign in with WSO2ISAdmin";
    public static readonly b2bSampleAppErrorPagePath = "/api/auth/signin?error=OAuthCallback";

    /**
     * Retrieve json payload of PATCH request to update application advanced configurations
     * @return { ApplicationConfigurationInterface }
     */
    public static getSkipLoginConsentPayload(isSkipLoginConsent: boolean): ApplicationConfigurationInterface {

        return {
            advancedConfigurations: {
                skipLoginConsent: isSkipLoginConsent
            }
        };
    }

    /**
     * This function replaces the "+" character with "%2B" in the userName string
     * @param {string} userName - The user name of the user to be added to the group.
     * @returns The encoded username.
     */
    public static getEncodedUserName(userName: string): string {
        if (userName != null && userName.includes("+")) {
            userName = userName.replace(/\+/g, "%2B");
        }
        return userName;
    }

    /**
     * This function returns the tenanted path by combining the tenant name with the context 't' - t/test.com/.
     * @param {string} tenantName - The organization name which requires the tenanted path.
     * @returns The tenanted path.
     */
    public static getTenantedPath(tenantName: string): string {

        return AsgardeoEndPointsConstants.TENANT_PATH + tenantName + AsgardeoEndPointsConstants.SEPERATOR;
     }

    /**
     * This function returns parsed JWT claims as json attributes.
     * @param {string} token - The token.
     * @returns Decoded attributes of token as a json object.
     */
    public static parseJwt(token: string): JSON {

        return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
    }
    
}
