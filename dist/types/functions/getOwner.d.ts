import { DNSArgs } from '../index';
type Owner = {
    registrant?: string;
    owner?: string;
    ownershipLevel: 'nameWrapper' | 'registry' | 'registrar';
};
declare const _default: {
    raw: ({ contracts, multicallWrapper }: DNSArgs<"contracts" | "multicallWrapper">, name: string, contract?: "nameWrapper" | "registrar" | "registry" | undefined) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts, multicallWrapper, gqlInstance, }: DNSArgs<"contracts" | "gqlInstance" | "multicallWrapper">, data: string, name: string, contract?: "nameWrapper" | "registrar" | "registry" | undefined) => Promise<Owner | undefined>;
};
export default _default;
