import { SPRest } from "@pnp/sp";

export interface IOurServicesComponentsProps {
    label: string;
    href: string;
    sp?: SPRest;
}