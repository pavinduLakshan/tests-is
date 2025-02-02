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
 * Class containing getters to retrieve custom time Configurations.
 */
export class CustomTimeoutConfigs {

   /**
    * Private constructor to avoid object instantiation from outside
    * the class.
    *
    * @hideconstructor
    */
   private constructor() { }

   /**
    * Returns the custom timeout for option, DefailtCommandTimeout
    * DefailtCommandTimeout is defined at cypress.json
    * @return {string}
    */
   public static getCustomCommadTimeout(): { timeout: number } {

      return {
         timeout: 120000
      };
   }

   /**
     * Returns the custom time out for option, pageLoadTimeout
     * DefailtpageLoadTimeout is defined at cypress.json
     * @return {string}
     */
   public static getCustomPageLoadTimeout(): { timeout: number } {

      return {
         timeout: 300000
      };
   }

   /**
     * Returns the custom time out for API response 4min delay.
     * @return {string | number}
     */
   public static getCustomRequestTimeout(): { timeout: number } {

      return {
         timeout: 240000
      };
   }

   /**
    * Returns the custom timeout for console page loading
    * @return {number}
    */
   public static getCustomTimeout(): number {

      return 180000;
   }

   /**
    * This is temporary wait time for sample application loading.
    */
   public static getSampleAppLoadingWait(): number {

      return 65000;
   }

   /**
    * This is temporary wait time for sample application startup.
    */
   public static getMockServerStartupWait(): number {

      return 4000;
   }

   /**
    * This is temporary wait time for on prem userstore agent download
    */
   public static downloadUserstoreAgentWait(): number {

      return 100000;
   }

   /**
    * This is temporary wait time for onprem userstore agent startup
    */
   public static onpremuserstoreAgentStartup(): number {

      return 6000;
   }

   /**
    * This is temporary wait time for onprem userstore agent startup
    */
   public static mockServerStartupWait(): number {

      return 3000;
   }

   /**
    * This is temporary wait time for sample application npm installation.
    */
   public static getNpmInstallationTimeout(): number {

      return 200000;
   }


   /**
    * This is temporary wait time for logout from myaccount application.
    */
   public static getMyaccountLogoutTimeout(): number {

      return 2000;
   }

   /**
    * This is temporary wait time retrieve the QR code image.
    */
   public static geQRImageTimeout(): number {

      return 10000;
   }

   /**
    * This is temporary wait time is to receive the sent email.
    */
   public static geEmailWaitTime(): number {

      return 10000;
   }

   /**
    * It returns the timeout value for the MyAccountTOTPrViewIcon.
    * @returns {number} The return value is the number of milliseconds that the TOTP view icon will be
    * displayed.
    */
   public static getMyAccountTOTPrViewIconTimeOut(): number {

      return 7000;
   }

   /**
    * This is temporary wait time to get displayed totp authenticator app in myaccount.
    */
   public static getTotpAuthenticatorApp(): number {

      return 5000;
   }

   /**
    * This is temporary wait time to get secondory userstore users displayed from UI.
    */
   public static getsecondoryUserstoreUsersListed(): number {

      return 5000;
   }

   /**
    * This is temporary wait time to get secondory userstore groups displayed from UI.
    */
   public static getsecondoryUserstoreGroupsListed(): number {

      return 5000;
   }

   /**
    * This is temporary wait time to retrieve the last received email from Mailosaur.
    */
   public static getEventingEmail(): number {

      return 15000;
   }
}
