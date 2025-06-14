// Interface de base pour une ressource Kubernetes
export interface KubeResource {
  apiVersion: string;
  kind: string;
  metadata: {
    name: string;
    namespace?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

export interface WebAppSpec {
  hostname: string;
  image?: string;
  name: string;
  port?: number;
  replicas?: number;
}

export interface WebAppStatus {
  availableReplicas?: number;
  deploymentConditions?: any[];
}

export interface WebApp extends KubeResource {
  spec: WebAppSpec;
  status?: WebAppStatus;
}

export const WEBAPP = {
  group: 'kro.run',
  version: 'v1',
  kind: 'WebApp',
}; 