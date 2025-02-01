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

import { CustomTimeoutConfigs, CypressTaskConfig, TestE2EConfig } from "../../configs";

const sampleReactAppExtractLocation = TestE2EConfig.sampleAppRootDirectory +
    TestE2EConfig.reactAppDownloadDirectory;
const waitUntilExtractTaskComplete = 3000;
const sampleJavaScriptAppExtractLocation = TestE2EConfig.sampleAppRootDirectory +
    TestE2EConfig.jsAppDownloadDirectory;
const sampleB2bAppExtractLocation = TestE2EConfig.sampleAppRootDirectory +
    TestE2EConfig.b2bSampleAppDownloadDirectory;

/**
 * This spec is used to extract all the sample applications to be available
 */
describe("00.02 - Extract sample applications", function () {

    it("00.02.01 - unzip existing sample applications", () => {

        //Unzip react sample application
        cy.task(CypressTaskConfig.taskExtractSampleZipFiles, "/" +
            TestE2EConfig.sampleAppRootDirectory);
        cy.wait(waitUntilExtractTaskComplete);

        // Move the extracted OIDC java sample app directory to the tomcat web application directory.
        cy.task(CypressTaskConfig.taskMoveFile, {
            file: TestE2EConfig.oidcJavaSampleAppDirectory,
            sourcePath: TestE2EConfig.sampleAppRootDirectory +
                TestE2EConfig.oidcJavaSampleAppDownloadDirectory,
            targetPath: TestE2EConfig.javaSampleAppTomcatLocation

        }).then(() => {
            cy.log("OIDC Files are moved successfully");
        });

        // Move the extracted SAML java sample app directory to the tomcat web application directory.
        cy.task(CypressTaskConfig.taskMoveFile, {
            file: TestE2EConfig.samlJavaSampleAppDirectory,
            sourcePath: TestE2EConfig.sampleAppRootDirectory +
                TestE2EConfig.samlJavaSampleAppDownloadDirectory,
            targetPath: TestE2EConfig.javaSampleAppTomcatLocation

        }).then(() => {
            cy.log("SAML Files are moved successfully");
        });

    });

    it("00.02.02 - Install npm in all the sample applications", () => {

        // Execute npm in react sample application
        cy.task(CypressTaskConfig.taskInstallPackages, sampleReactAppExtractLocation,
            { timeout: CustomTimeoutConfigs.getNpmInstallationTimeout() });

        // Execute npm in javascript sample application
        cy.task(CypressTaskConfig.taskInstallPackages, sampleJavaScriptAppExtractLocation,
            { timeout: CustomTimeoutConfigs.getNpmInstallationTimeout() });

        // Execute npm in nextJS sample application
        cy.task(CypressTaskConfig.taskInstallPackages, sampleB2bAppExtractLocation,
            { timeout: CustomTimeoutConfigs.getNpmInstallationTimeout() });
    });
});
