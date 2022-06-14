import * as React from 'react';
import { useEffect, useState } from 'react';
import { getCoreBusiness } from '../service';
import { iCoreBusiness } from '../models';
import { parseImgJson } from '../utilis';
import { IHomeCoreBusinessProps } from './IHomeCoreBusinessProps';
import '../../../../../../style/bootstrap.min.css';
import '../../../../../../style/index.css';
import '../style/HomeCoreBusiness.css';

const HomeCoreBusiness: React.FC<IHomeCoreBusinessProps> = (props) => {

  const [coreBusinessCards, setCoreBusinessCards] = useState<iCoreBusiness[]>([]);

  const {
    titleColor,
    title,
    titleSize,
    subtitleColor,
    subtitle,
    subtitleSize,
    sp,
    cardTextSize
  } = props;

  const getCoreBusinessCard = async () => {
    const result:iCoreBusiness[]  = await getCoreBusiness(sp);
    const resultWithUsableIMG = parseImgJson(result);
    setCoreBusinessCards(resultWithUsableIMG);
  };
  
  useEffect(() => {
    getCoreBusinessCard();
  }, []);
  
  useEffect(() => {
    cicleFrame();
  }, [coreBusinessCards]);

  window.addEventListener("resize", () => cicleFrame(), false);

  const cicleFrame = () => {
    setTimeout(() => {
      if(coreBusinessCards.length){
        coreBusinessCards.map((_item, i) => {
          createFrame(i.toString());
        });
      }
    }, 1000);
  };

  const createFrame = (id: string) => {

    let svg = document.getElementById("svg" + id);
    let container = document.getElementById("core" + id);

    while (svg.firstChild) {
      svg.removeChild(svg.firstChild);
    }

    let svgns = "http://www.w3.org/2000/svg";
    let width = container.offsetWidth - 5;
    let height = container.offsetHeight - 5;
    let offset = "35";
    let innerOffset = "5";

    //console.log(container.offsetWidth, container.offsetHeight);

    let lineTop = document.createElementNS(svgns, "line");
    lineTop.setAttribute('x1', innerOffset);
    lineTop.setAttribute('y1', offset);
    lineTop.setAttribute('x2', width?.toString());
    lineTop.setAttribute('y2', innerOffset);
    lineTop.setAttribute("stroke", "#001f3c");
    lineTop.setAttribute("stroke-width", "2");
    svg.appendChild(lineTop);

    let lineRight = document.createElementNS(svgns, "line");
    lineRight.setAttribute('x1', width?.toString());
    lineRight.setAttribute('y1', innerOffset);
    lineRight.setAttribute('x2', width?.toString());
    lineRight.setAttribute('y2', (height - 35)?.toString());
    lineRight.setAttribute("stroke", "#001f3c");
    lineRight.setAttribute("stroke-width", "2");
    svg.appendChild(lineRight);

    let lineBottom = document.createElementNS(svgns, "line");
    lineBottom.setAttribute('x1', innerOffset);
    lineBottom.setAttribute('y1', height?.toString());
    lineBottom.setAttribute('x2', width?.toString());
    lineBottom.setAttribute('y2', (height - 35)?.toString());
    lineBottom.setAttribute("stroke", "#001f3c");
    lineBottom.setAttribute("stroke-width", "2");
    svg.appendChild(lineBottom);

    let lineLeft = document.createElementNS(svgns, "line");
    lineLeft.setAttribute('x1', innerOffset);
    lineLeft.setAttribute('y1', offset);
    lineLeft.setAttribute('x2', innerOffset);
    lineLeft.setAttribute('y2', height?.toString());
    lineLeft.setAttribute("stroke", "#001f3c");
    lineLeft.setAttribute("stroke-width", "2");
    svg.appendChild(lineLeft);
  };

  const newsUrlHandler = (url:string) => window.open(url, '_self');

  return (
    <div className="section">
      <div className='container px-0'>
        <div className='col-12 px-0 d-flex flex-column justify-content-center align-items-center'>
          <h2 
            className='sectionTitle text-center' 
            style={{color:titleColor ?? "black", fontSize: titleSize?.toString() + "em"}}
          >
            {title}
          </h2>
          <span 
            className='sectionSubtitle text-center mb-5' 
            style={{color:subtitleColor ?? "black", fontSize: subtitleSize?.toString() + "em"}} 
            dangerouslySetInnerHTML={{ __html: subtitle }}>
          </span>
          <div className='sectionCards d-flex justify-content-center w-100 row mx-0 py-5'>
            {coreBusinessCards.length && coreBusinessCards.map((item, i) => (
              <div className='col-12 col-md-6 col-lg-4 px-3  my-4'>
                <div id={`core${i}`} className='core relative h-100 py-4'>
                  <svg className='w-100 h-100 cardBorder' id={`svg${i}`}></svg>
                  <div className='card-content pb-4 h-100 d-flex flex-column justify-content-between'>
                    <div className='cardIcon-container'>
                      <img src={item.CardImg} alt={item.Title} className='cardIcon'></img>
                    </div>
                    <div>
                      <h4 className='text-uppercase cardTitle mb-3 mt-5 px-3'>{item.Title}</h4>
                      <div className='cardSubtitle px-3 mb-4'>
                        <span 
                          className='sectionSubtitle text-center mb-5'
                          style={{fontSize: cardTextSize?.toString() + "em"}}
                          dangerouslySetInnerHTML={{ __html: item.CardDescription ?? "" }}>  
                        </span>
                      </div>
                    </div>
                    <div className='px-3 mb-4 d-flex align-content-end'>
                      <button 
                        className='btn btnOutline z-1 bg-white main-button'
                        onClick={() => newsUrlHandler(item.CardButtonRedirectURL)}>
                        {item.CardButtonText}
                      </button>
                      <button className='btn position-absolute btnOutline inner-shadow-button'>{item.CardButtonText}</button>
                      <button className='btn position-absolute btnOutline outer-shadow-button'>{item.CardButtonText}</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeCoreBusiness;