import { ethers } from 'ethers';
import { DNSArgs } from '../index';
export default function ({ contracts, signer }: DNSArgs<'contracts' | 'signer'>, name: string, { newOwner, isOwner, }: {
    newOwner: string;
    isOwner: boolean;
}): Promise<ethers.PopulatedTransaction>;
