import Image from 'next/image';

interface ImageResourcesProps{
    title: string;
    relativePath: string;
    width: number
}
export const CardIcon = ({title, width, relativePath}:ImageResourcesProps) => {
    
  return (
      <div className='card-icon' style={{width: width}}>
          {relativePath && <Image src={`${process.env.NEXT_PUBLIC_BASE_URL_ASSETS}${relativePath}`} alt={title}  />}
      </div>
  )
}
