import { EIP1193Provider } from "@web3-onboard/common"
import type en from './i18n/en.json'

export type TransactionPreviewModule = (options: TransactionPreviewInitOptions) => TransactionPreviewAPI

export type TransactionPreviewAPI = {
  patchProvider: (provider: EIP1193Provider | PatchedEIP1193Provider) => PatchedEIP1193Provider
  simTransactions: (tx: TransactionObject[]) => Promise<SimPlatformResponse>
  containerElement?: string
  setContainerElement: (element: string) => void
}

export type PatchedEIP1193Provider = EIP1193Provider & {simPatched: boolean}

export interface ProviderReq {
  method: string;
  params?: Array<unknown>;
}

export type RequestOptions = Pick<TransactionPreviewInitOptions, 'apiKey'>

export type TransactionPreviewInitOptions = {
  /**Your Blocknative key */
  apiKey: string
  /**Your Blocknative secret key*/
  secretKey: string
  /**Optional dom query string to mount UI to*/
  containerElement?: string
}

export interface TransactionObject {
  to: string
  from: string
  value: string
  input: string
  gas: string

  // Either include gasPrice or maxFeePerGas and maxPriorityFeePerGas
  // to differentiate between a type 0 and type 2 (EIP1559) transaction
  gasPrice?: string
  maxFeePerGas?: string
  maxPriorityFeePerGas?: string
}

export type SimPlatformResponse = {
  internalTransactions: TransactionObject[][]
  netBalanceChanges: NetBalanceChange[][]
  simDetails: SimDetails
  contractCall: ContractCall[]
  error: unknown[]
  system: string
  network: string

  // Noted in the docs but not seen in the mock response
  // gasUsed: number
}

interface NetBalanceChange {
  address: string
  balanceChanges: BalanceChange[]
}

interface BalanceChange {
  delta: string
  asset: Asset
  breakdown: Breakdown[]
}

interface Asset {
  type: string
  symbol: string
  contractAddress: string
}

interface Breakdown {
  counterparty: string
  amount: string
}

interface SimDetails {
  blockNumber: number
  performanceProfile: PerformanceProfile
  e2eMs: number
}

interface PerformanceProfile {
  breakdown: SimDetailsBreakdown[]
}

interface SimDetailsBreakdown {
  label: string
  timeStamp: string
}

interface ContractCall {
  status: string
  value: ContractCallValue[]
}

interface ContractCallValue {
  methodName: string
  params: {
    amount: string
    spender: string
  }
  contractAddress: string
  contractType: string
  contractAlias: string
  contractDecimals: string
  contractName: string
}

export type Locale = string
export type i18nOptions = Record<Locale, i18n>
export type i18n = typeof en