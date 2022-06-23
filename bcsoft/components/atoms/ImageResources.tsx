import React, { useEffect, useMemo, useState } from 'react'
import { iCoreBusiness } from '../../models'
import { srcAssets } from '../../services';
import Image from "next/image";

export const ImageResources = ({item}:{item: iCoreBusiness}) => {
    const [src, setSrc] = useState<string>()
    useEffect( ()=> {
         srcAssets(item)
            .then(data =>{
                const blob = new Blob([data], {type: 'image/png'})
                 setSrc(data)
            })
    },[item]);
    // console.log("🚀 ~ file: ImageResources.tsx ~ line 8 ~ ImageResources ~ src", src)
  return (
      <div className='cardIcon-container'>
          {src && <img src={src} alt={item.Title} layout='fill' className='cardIcon' />}
      </div>
  )
}
