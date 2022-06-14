import * as React from 'react';
import { useState, useEffect } from 'react';
import { BcButton } from 'bc-button';
import { getClients } from '../service';
import { IClients } from '../models';
import { parseImgJson } from '../utilis';
import { IHomeClientsPresentationProps } from './IHomeClientsPresentationProps';
import '../../../../../../style/bootstrap.min.css';
import '../../../../../../style/index.css';
import '../style/HomeClientsPresentation.css';


const HomeClientsPresentation: React.FC<IHomeClientsPresentationProps> = (props) => {

  const [clients, setClients] = useState<IClients[]>([]);

  const {
    backgroundColor,
    textColor,
    text,
    btnLabel,
    btnUrl,
    btnClass,
    context,
    sp
  } = props;

  const getListsOfClients = async () => {
    const result: IClients[] = await getClients(sp);
    const resultWithUsableIMG = parseImgJson(result);
    setClients(resultWithUsableIMG);
  };

  useEffect(() => {
    getListsOfClients();
  }, []);

  return (
    <div className='section d-flex align-items-center' style={{ backgroundColor: backgroundColor ?? "trasparent" }}>
      <div className='container'>
        <div className='w-100 d-flex justify-content-center row mx-0'>
          <div className='d-flex col-12 px-0 justify-content-center row mx-0 align-items-center align-content-center mb-3 mb-md-5'>
            {clients.map((item, i) => {
              return (
                <div 
                  className='client d-flex flex-row justify-content-center align-items-center' 
                  style={{ animation: `fadeIn ${3 + 2 + i}s`, WebkitAnimation: `fadeIn ${3 + 2 +  i}s`, MozAnimation: `fadeIn ${3 + 2 + i}s` }} 
                >
                  <div>
                    <img alt={item.Title} src={item.ClientLogo}></img>
                  </div>
                </div> 
              );
            })}
          </div> 
          <div className='d-flex w-100 justify-content-center mb-3 mt-3 mb-md-5'>
            <span className='regular sectionSubtitle text-center' style={{ color: textColor ?? "black" }} dangerouslySetInnerHTML={{ __html: text }}></span>
          </div>
          <div className='d-flex w-100 justify-content-center mb-5'>
          <BcButton label={btnLabel} enableLink={true} href={btnUrl} buttonClass={btnClass} />
          </div>
        </div>
      </div>
    </div>
  );
}; 

export default HomeClientsPresentation;