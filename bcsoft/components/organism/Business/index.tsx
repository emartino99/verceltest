import Image from "next/image";
import { useCallback, useEffect, useMemo } from "react";
import { iCoreBusiness } from "../../../models";
import { useBusinessHook } from "../../../services";
import { getRelativePath, parseImgJson } from "../../../utils";
import { CardLine } from "../../atoms";
import { ImageResources } from "../../atoms/ImageResources";
import { CardBuisiness } from "../../molecule";

export function Business() {

    const { coreBusinessCards, error } = useBusinessHook();
    // console.log("🚀 ~ file: index.tsx ~ line 11 ~ Business ~ coreBusinessCards", coreBusinessCards)

    const { 
        title, 
        subtitle, 
    } = {
        title: 'todo', 
        subtitle: 'todo',
    };

    // const resultWithUsableIMG = useMemo(() => coreBusinessCards ? parseImgJson(coreBusinessCards): undefined,[coreBusinessCards]) 
    // console.log("🚀 ~ file: index.tsx ~ line 22 ~ Business ~ resultWithUsableIMG", resultWithUsableIMG)

 
    return (
        <section className="business span-1-12">
            <header className='business-header'>
                <h2 className='title'>{title}</h2>
                <span className='subtitle ' dangerouslySetInnerHTML={{ __html: subtitle }}></span>
            </header>
            <div className='grid template-col-autofill'>
                {coreBusinessCards?.map((item, i) => (
                    <CardBuisiness item={item} i={i} key={item.ID} />
                ))}
            </div>

        </section>
    );

    
};