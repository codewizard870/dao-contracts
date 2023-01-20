/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.19.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { InstantiateMsg, ExecuteMsg, Uint128, Binary, UncheckedDenom, Curve, Action, Expiration, Timestamp, Uint64, Cw20ReceiveMsg, UncheckedVestingParams, SaturatingLinear, PiecewiseLinear, QueryMsg, Addr, ArrayOfAddr, OwnershipForAddr } from "./CwPayrollFactory.types";
export interface CwPayrollFactoryReadOnlyInterface {
  contractAddress: string;
  listVestingContracts: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<ArrayOfAddr>;
  listVestingContractsReverse: ({
    limit,
    startBefore
  }: {
    limit?: number;
    startBefore?: string;
  }) => Promise<ArrayOfAddr>;
  listVestingContractsByInstantiator: ({
    instantiator,
    limit,
    startAfter
  }: {
    instantiator: string;
    limit?: number;
    startAfter?: string;
  }) => Promise<ArrayOfAddr>;
  listVestingContractsByInstantiatorReverse: ({
    instantiator,
    limit,
    startBefore
  }: {
    instantiator: string;
    limit?: number;
    startBefore?: string;
  }) => Promise<ArrayOfAddr>;
  listVestingContractsByRecipient: ({
    limit,
    recipient,
    startAfter
  }: {
    limit?: number;
    recipient: string;
    startAfter?: string;
  }) => Promise<ArrayOfAddr>;
  listVestingContractsByRecipientReverse: ({
    limit,
    recipient,
    startBefore
  }: {
    limit?: number;
    recipient: string;
    startBefore?: string;
  }) => Promise<ArrayOfAddr>;
  ownership: () => Promise<OwnershipForAddr>;
  codeId: () => Promise<Uint64>;
}
export class CwPayrollFactoryQueryClient implements CwPayrollFactoryReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.listVestingContracts = this.listVestingContracts.bind(this);
    this.listVestingContractsReverse = this.listVestingContractsReverse.bind(this);
    this.listVestingContractsByInstantiator = this.listVestingContractsByInstantiator.bind(this);
    this.listVestingContractsByInstantiatorReverse = this.listVestingContractsByInstantiatorReverse.bind(this);
    this.listVestingContractsByRecipient = this.listVestingContractsByRecipient.bind(this);
    this.listVestingContractsByRecipientReverse = this.listVestingContractsByRecipientReverse.bind(this);
    this.ownership = this.ownership.bind(this);
    this.codeId = this.codeId.bind(this);
  }

  listVestingContracts = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<ArrayOfAddr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_vesting_contracts: {
        limit,
        start_after: startAfter
      }
    });
  };
  listVestingContractsReverse = async ({
    limit,
    startBefore
  }: {
    limit?: number;
    startBefore?: string;
  }): Promise<ArrayOfAddr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_vesting_contracts_reverse: {
        limit,
        start_before: startBefore
      }
    });
  };
  listVestingContractsByInstantiator = async ({
    instantiator,
    limit,
    startAfter
  }: {
    instantiator: string;
    limit?: number;
    startAfter?: string;
  }): Promise<ArrayOfAddr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_vesting_contracts_by_instantiator: {
        instantiator,
        limit,
        start_after: startAfter
      }
    });
  };
  listVestingContractsByInstantiatorReverse = async ({
    instantiator,
    limit,
    startBefore
  }: {
    instantiator: string;
    limit?: number;
    startBefore?: string;
  }): Promise<ArrayOfAddr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_vesting_contracts_by_instantiator_reverse: {
        instantiator,
        limit,
        start_before: startBefore
      }
    });
  };
  listVestingContractsByRecipient = async ({
    limit,
    recipient,
    startAfter
  }: {
    limit?: number;
    recipient: string;
    startAfter?: string;
  }): Promise<ArrayOfAddr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_vesting_contracts_by_recipient: {
        limit,
        recipient,
        start_after: startAfter
      }
    });
  };
  listVestingContractsByRecipientReverse = async ({
    limit,
    recipient,
    startBefore
  }: {
    limit?: number;
    recipient: string;
    startBefore?: string;
  }): Promise<ArrayOfAddr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_vesting_contracts_by_recipient_reverse: {
        limit,
        recipient,
        start_before: startBefore
      }
    });
  };
  ownership = async (): Promise<OwnershipForAddr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      ownership: {}
    });
  };
  codeId = async (): Promise<Uint64> => {
    return this.client.queryContractSmart(this.contractAddress, {
      code_id: {}
    });
  };
}
export interface CwPayrollFactoryInterface extends CwPayrollFactoryReadOnlyInterface {
  contractAddress: string;
  sender: string;
  receive: ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  instantiateNativePayrollContract: ({
    instantiateMsg,
    label
  }: {
    instantiateMsg: InstantiateMsg;
    label: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  updateCodeId: ({
    vestingCodeId
  }: {
    vestingCodeId: number;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  updateOwnership: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export class CwPayrollFactoryClient extends CwPayrollFactoryQueryClient implements CwPayrollFactoryInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.receive = this.receive.bind(this);
    this.instantiateNativePayrollContract = this.instantiateNativePayrollContract.bind(this);
    this.updateCodeId = this.updateCodeId.bind(this);
    this.updateOwnership = this.updateOwnership.bind(this);
  }

  receive = async ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      receive: {
        amount,
        msg,
        sender
      }
    }, fee, memo, funds);
  };
  instantiateNativePayrollContract = async ({
    instantiateMsg,
    label
  }: {
    instantiateMsg: InstantiateMsg;
    label: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      instantiate_native_payroll_contract: {
        instantiate_msg: instantiateMsg,
        label
      }
    }, fee, memo, funds);
  };
  updateCodeId = async ({
    vestingCodeId
  }: {
    vestingCodeId: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_code_id: {
        vesting_code_id: vestingCodeId
      }
    }, fee, memo, funds);
  };
  updateOwnership = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_ownership: {}
    }, fee, memo, funds);
  };
}