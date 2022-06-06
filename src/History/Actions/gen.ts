import {
  GetUserUploadsSuccess,
  GetUserUploadsSuccessNew,
  GETUSERUPLOADS,
  GetUserUploads,
  GETUSERUPLOADS_SUCCESS,
  GETUSERUPLOADS_SUCCESSNEW,
  GetUserUploadsFailure,
  GETUSERUPLOADS_FAILURE,
  ChangeStatus,
  CHANGESTATUS,
  ChangeStatusSuccess,
  CHANGESTATUS_SUCCESS,
  DeleteFile,
  DeleteFileSuccess,
  DeleteFileFailure,
  DELETEFILE,
  DELETEFILE_SUCCESS,
  DELETEFILE_FAILURE,
  SAVEDELETEDETAILS,
  SaveDeleteDetails,
} from "./def";
import {
  StatusPoints,
  FileInfo,
  FileList,
} from "../../Upload/State/uploadState";

export default class HistoryActionGenerator {
  public static getUserUploads(): GetUserUploads {
    return {
      type: GETUSERUPLOADS,
    };
  }
  public static getUserUploadsSuccess(
    userUploads: FileInfo[]
  ): GetUserUploadsSuccess {
    return {
      type: GETUSERUPLOADS_SUCCESS,
      payload: {
        userUploads: userUploads,
      },
    };
  }

  public static getUserUploadsSuccessNew(
    userUploads: FileList[]
  ): GetUserUploadsSuccessNew {
    return {
      type: GETUSERUPLOADS_SUCCESSNEW,
      payload: {
        userUploads: userUploads,
      },
    };
  }

  public static getUserUploadsFailure(): GetUserUploadsFailure {
    return {
      type: GETUSERUPLOADS_FAILURE,
    };
  }
  public static changeStatus(): ChangeStatus {
    return {
      type: CHANGESTATUS,
    };
  }
  public static changeStatusSuccess(
    statusPoints: StatusPoints
  ): ChangeStatusSuccess {
    return {
      type: CHANGESTATUS_SUCCESS,
      payload: {
        statusPoints: statusPoints,
      },
    };
  }
  public static deleteFile(uniqueFileId: string): DeleteFile {
    return {
      type: DELETEFILE,
      payload: {
        uniqueFileId: uniqueFileId,
      },
    };
  }
  public static deleteFileSuccess(deleteStatus: number): DeleteFileSuccess {
    return {
      type: DELETEFILE_SUCCESS,
      payload: {
        deleteStatus: deleteStatus,
      },
    };
  }
  public static deleteFileFailure(deleteStatus: number): DeleteFileFailure {
    return {
      type: DELETEFILE_FAILURE,
      payload: {
        deleteStatus: deleteStatus,
      },
    };
  }
  public static saveDeleteDetails(
    documentName: string,
    uniqueFileId: string
  ): SaveDeleteDetails {
    return {
      type: SAVEDELETEDETAILS,
      payload: {
        documentName: documentName,
        uniqueFileId: uniqueFileId,
      },
    };
  }
}
