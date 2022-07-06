import Image from 'next/image';
import { getMediaPath } from '../../utils';

type ObjectFit = "cover" | "none" | "fill"  | "contain" | "scale-down";
interface ImageResourcesProps{
    title: string;
    relativePath: string;
    width?: number | string;
    height?: number | string;
    objectFit?: ObjectFit;
    className?: string;
    onClick?: () => void;
}

export const CustomImage = ({
  title,
  relativePath,
  width = '100%',
  height = '100%',
  objectFit = 'scale-down',
  className= '',
  onClick

}:ImageResourcesProps) => {
    
  return ( 
    <div className={className} onClick={onClick}>
      {relativePath && <Image src={getMediaPath(relativePath)} alt={title} objectFit={objectFit} width={width} height={height} priority={true}  />}
    </div> 
  );
};
