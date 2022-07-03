import Image from 'next/image';
import { getMediaPath } from '../../utils';

interface ImageResourcesProps{
    title: string;
    relativePath: string;
    width: number;
    height: number;
}

export const CustomImage = ({title, relativePath, width, height}:ImageResourcesProps) => {
    
  return ( 
    <div>
      {relativePath && <Image src={getMediaPath(relativePath)} alt={title} objectFit='scale-down' width={width} height={height}  />}
    </div> 
  );
};
