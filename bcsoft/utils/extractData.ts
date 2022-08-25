import { NextRouter } from "next/router";

export const extractData = (route: NextRouter, data: any) => {
    const params = route?.query?.id ?? route?.pathname;
    return data?.find((row: any) => row.field === params);
}

export const extractMultipleData = (route: NextRouter, data: any) => {
    const params = route?.query?.id ?? route?.pathname;
    return data?.filter((row: any) => row.field === params);
}