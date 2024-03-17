/// <reference types="vite/client" />
/// <reference types="vite/client" />

interface Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ethereum: any;
}

interface EIP6963ProviderDetail {
  info: EIP6963ProviderInfo;
  provider: EIP1193Provider;
}

interface EIP6963ProviderInfo {
  walletId: string;
  uuid: string;
  name: string;
  icon: string;
}

interface EIP1193Provider {
  isStatus?: boolean;
  host?: string;
  path?: string;
  sendAsync?: (request: { method: string, params?: Array<unknown> }, callback: (error: Error | null, response: unknown) => void) => void
  send?: (request: { method: string, params?: Array<unknown> }, callback: (error: Error | null, response: unknown) => void) => void
  request: (request: { method: string, params?: Array<unknown> }) => Promise<unknown>
}

type EIP6963AnnounceProviderEvent = {
  detail: {
    info: EIP6963ProviderInfo,
    provider: EIP1193Provider
  }
}