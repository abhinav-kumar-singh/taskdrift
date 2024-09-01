enum ActivityType {
  DELETE = "delete",
  CREATE = "create",
  UPDATE = "update",
}

interface IActivityLogConfig {
  logTime: string;
  activityType: ActivityType;
  relatedTaskId: string;
  logId: string;
}

interface IActivityStoreConfig {
  dashboardId: string;
  activityLog: IActivityLogConfig[];
}

interface IActivityLogStore {
  activityLogConfig: IActivityStoreConfig[];
}

export type { IActivityLogStore, IActivityLogConfig };

export { ActivityType };
