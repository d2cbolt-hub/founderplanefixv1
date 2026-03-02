declare global {
  interface Window {
    Intercom: (command: string, ...args: any[]) => void;
    intercomSettings?: {
      api_base: string;
      app_id: string;
    };
  }
}

export {};
