/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useMemo, useState } from 'react'
import { ICardIMG, iCoreBusiness } from '../../models'
import { srcAssets } from '../../services';
import Image from "next/image";

interface ImageResourcesProps{
    title: string;
    relativePath: string;
}
export const ImageResources = ({title, relativePath}:ImageResourcesProps) => {
    // console.log("🚀 ~ file: ImageResources.tsx ~ line 12 ~ ImageResources ~ relativePath", relativePath)

    // const [src, setSrc] = useState<string | null>()
    // console.log("🚀 ~ file: ImageResources.tsx ~ line 9 ~ ImageResources ~ src", src)
    // useEffect( ()=> {
    //      srcAssets(relativePath)
    //         .then( data =>{
    //         console.log("🚀 ~ file: ImageResources.tsx ~ line 18 ~ useEffect ~ data", data)
    //         // console.log("🚀 ~ file: ImageResources.tsx ~ line 13 ~ useEffect ~ data", data)
    //             // const blob = new Blob([data], { type: "image/png" });
    //             // const url = window.URL.createObjectURL(blob);
    //             // const res = window.btoa(unescape(encodeURIComponent(data)));
    //             // const reader = new FileReader();
    //             // reader.onloadend = function () {
    //             //     setSrc(reader.result as string);
    //             // }
    //             // reader.readAsDataURL(data);
    //             // console.log("🚀 ~ file: ImageResources.tsx ~ line 16 ~ useEffect ~ res", res)
    //             // console.log("🚀 ~ file: ImageResources.tsx ~ line 16 ~ useEffect ~ res", res)
    //             // setSrc(data)
    //         })
    // },[relativePath]);
    // console.log("🚀 ~ file: ImageResources.tsx ~ line 8 ~ ImageResources ~ src", src)
  return (
      <div className='cardIcon-container'>
          {relativePath && <img src={`${process.env.NEXT_PUBLIC_BASE_URL_DOMAIN}${relativePath}`} alt={title}   className='' />}
      </div>
  )
}
