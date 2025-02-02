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
 * This class is used to maintain Cypress tasks.
 */
export class CypressTaskConfig {

    public static readonly taskIsDirectoryExists = "isDirectoryExists";
    public static readonly taskExtractSampleZipFiles: string = "extractSampleZipFiles";
    public static readonly taskSampleStartup: string = "sampleStartup";
    public static readonly taskB2BSampleStartup: string = "b2bSampleStartup";
    public static readonly taskB2BAdminSampleStartup: string = "b2bAdminSampleStartup";
    public static readonly taskB2BBusinessSampleStartup: string = "b2bBusinessSampleStartup";
    public static readonly taskAgentStartup: string = "agentStartup";
    public static readonly taskKillPID: string = "killPID";
    public static readonly taskListFiles = "listFilesInDirectory";
    public static readonly taskCountFiles = "listFilesCountInDirectory";

    // To remove the directory collection at once.
    public static readonly taskRemoveArrayOfDirectories: string = "removeArrayOfDirectories";
    public static readonly taskGetClipboard: string = "getClipboard";
    public static readonly taskStartUpTomcatServer: string = "startUpTomcatServer";
    public static readonly taskWaitForPort: string = "waitForPort";
    public static readonly taskServerStartup: string = "serverStartup";
    public static readonly taskMoveFile: string = "moveFile";
    public static readonly taskGenerateOTP: string = "generateOTP";
    public static readonly taskWindowsPlatform: string = "win32";
    public static readonly taskRemoveFile: string = "removeFile";
    public static readonly taskRunJavascriptSampleConfigShell: string = "runJavascriptSampleConfigShell";
    public static readonly taskRunUserStoreAgentScript: string = "runAgentScripts";
    public static readonly taskAgentRunScriptBat: string = "agentRunScriptBat";
    public static readonly taskSetValue: string = "setValue";
    public static readonly taskGetValue: string = "getValue";
    public static readonly taskInstallPackages: string = "installPackages";
    public static readonly taskRemoveSingleDirectory: string = "removeSingleDirectory";
    public static readonly taskRemoveEmptyDirectory: string = "removeEmptyDirectories";
    public static readonly taskDecryptIdToken: string = "decryptIdToken";
}
