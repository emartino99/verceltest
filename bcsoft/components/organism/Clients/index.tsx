import { useEffect, useRef } from "react";
import { IClients, IClientsMainSettings } from "../../../models";
import { CustomButton } from "../../atoms/CustomButton";
import { CustomImage } from "../../atoms/CustomImage";

interface ClientsProps {
  clients: IClients[] | undefined; 
  clientsMainSettings: IClientsMainSettings[] | undefined;
}

export function Clients({clients, clientsMainSettings}: ClientsProps) {

  const sectionRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const { 
    Title, 
    buttonRouting,
    description
  } = clientsMainSettings?.[0] || {};

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
            const arrayHtmlCollection = Array.from(entry.target.children[0].children);
            arrayHtmlCollection.forEach(element => element.classList.add('clients-container-content'))
          }
      });
    });
    
    observer.observe(sectionRef.current);
  }, []);

  return (
    <section className='clients span-1-12' ref={sectionRef}>
      <article className='clients-container'>
        {clients?.map( item => {
          return (
            <div key={item.ID} >
              <CustomImage title={item.Title} relativePath={item.ClientLogo} width={200} height={100} />
            </div> 
          );
        })}
      </article>
      <article className="clients-description">
        { description && <p className='regular sectionSubtitle text-center' dangerouslySetInnerHTML={{ __html: description }}></p> }
        {
          Title &&
            <CustomButton 
              title={Title}
              href={buttonRouting}
            />
        }
      </article>
    </section>
  );
};