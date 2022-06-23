/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useMemo, useState } from 'react'
import { iCoreBusiness } from '../../models'
import { srcAssets } from '../../services';
import Image from "next/image";

export const ImageResources = ({item}:{item: iCoreBusiness}) => {
    const [src, setSrc] = useState<string | null>()
    console.log("🚀 ~ file: ImageResources.tsx ~ line 9 ~ ImageResources ~ src", src)
    useEffect( ()=> {
         srcAssets(item)
            .then(async data =>{
                // const blob = new Blob([data], { type: "image/png" });
                // const url = window.URL.createObjectURL(blob);
                const blob = await data.blob();
                const test = () => new Promise((resolve: (value: string | null)=> void) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(blob);
                    reader.onloadend = () => {
                        const base64data = reader.result as string;
                        const t = base64data?.replace(/^data:application\/json;/, "");
                        resolve(base64data as string);
                    }
                });
                test().then(res=> setSrc(res))
                //  setSrc(blob)
            })
    },[item]);
    // console.log("🚀 ~ file: ImageResources.tsx ~ line 8 ~ ImageResources ~ src", src)
  return (
      <div className='cardIcon-container'>

          {src && <img src={src} alt={item.Title}   className='cardIcon' />}
      </div>
  )
}
