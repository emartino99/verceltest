import Image from 'next/image';

interface ImageResourcesProps{
    title: string;
    relativePath: string; 
}
export const CardIcon = ({title, relativePath}:ImageResourcesProps) => {
    
  return ( 
        <div className='card-icon'  >
          {relativePath && <Image src={`${process.env.NEXT_PUBLIC_BASE_URL_ASSETS}${relativePath}`} alt={title} layout='fill' objectFit='scale-down'  />}
     </div> 
  )
}
