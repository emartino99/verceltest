

export interface Metadata {
    id: string;
    uri: string;
    etag: string;
    type: string;
}

export interface Deferred {
    uri: string;
}

export interface FirstUniqueAncestorSecurableObject {
    __deferred: Deferred;
}

export interface Deferred2 {
    uri: string;
}

export interface RoleAssignments {
    __deferred: Deferred2;
}

export interface Deferred3 {
    uri: string;
}

export interface AttachmentFiles {
    __deferred: Deferred3;
}

export interface Deferred4 {
    uri: string;
}

export interface ContentType {
    __deferred: Deferred4;
}

export interface Deferred5 {
    uri: string;
}

export interface GetDlpPolicyTip {
    __deferred: Deferred5;
}

export interface Deferred6 {
    uri: string;
}

export interface FieldValuesAsHtml {
    __deferred: Deferred6;
}

export interface Deferred7 {
    uri: string;
}

export interface FieldValuesAsText {
    __deferred: Deferred7;
}

export interface Deferred8 {
    uri: string;
}

export interface FieldValuesForEdit {
    __deferred: Deferred8;
}

export interface Deferred9 {
    uri: string;
}

export interface File {
    __deferred: Deferred9;
}

export interface Deferred10 {
    uri: string;
}

export interface Folder {
    __deferred: Deferred10;
}

export interface Deferred11 {
    uri: string;
}

export interface LikedByInformation {
    __deferred: Deferred11;
}

export interface Deferred12 {
    uri: string;
}

export interface ParentList {
    __deferred: Deferred12;
}

export interface Deferred13 {
    uri: string;
}

export interface Properties {
    __deferred: Deferred13;
}

export interface Deferred14 {
    uri: string;
}

export interface Versions {
    __deferred: Deferred14;
}

export interface IPartners {
    __metadata: Metadata;
    FirstUniqueAncestorSecurableObject: FirstUniqueAncestorSecurableObject;
    RoleAssignments: RoleAssignments;
    AttachmentFiles: AttachmentFiles;
    ContentType: ContentType;
    GetDlpPolicyTip: GetDlpPolicyTip;
    FieldValuesAsHtml: FieldValuesAsHtml;
    FieldValuesAsText: FieldValuesAsText;
    FieldValuesForEdit: FieldValuesForEdit;
    File: File;
    Folder: Folder;
    LikedByInformation: LikedByInformation;
    ParentList: ParentList;
    Properties: Properties;
    Versions: Versions;
    FileSystemObjectType: number;
    Id: number;
    ServerRedirectedEmbedUri?: any;
    ServerRedirectedEmbedUrl: string;
    ID: number;
    ContentTypeId: string;
    Title: string;
    Modified: Date;
    Created: Date;
    AuthorId: number;
    EditorId: number;
    OData__UIVersionString: string;
    Attachments: boolean;
    GUID: string;
    ComplianceAssetId?: any;
    PartnerIMG: string;
}
