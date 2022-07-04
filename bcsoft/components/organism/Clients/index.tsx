import { IClients, IClientsMainSettings } from "../../../models";
import { CustomButton } from "../../atoms/CustomButton";
import { CustomImage } from "../../atoms/CustomImage";

interface ClientsProps {
  clients: IClients[] | undefined; 
  clientsMainSettings: IClientsMainSettings[] | undefined;
}

export function Clients({clients, clientsMainSettings}: ClientsProps) {

  const { 
    Title, 
    buttonRouting,
    description
} = clientsMainSettings?.[0] || {}

  return (
    <section className='clients span-1-12'>
      <article className='clients-container'>
        {clients?.map((item, i) => {
          return (
            <div 
              className='clients-container-content' 
              style={{ animation: `fadeIn ${3 + 2 + i}s`, WebkitAnimation: `fadeIn ${3 + 2 +  i}s`, MozAnimation: `fadeIn ${3 + 2 + i}s` }} 
            >
              <CustomImage title={item.Title} relativePath={item.ClientLogo} width={200} height={100} />
            </div> 
          );
        })}
      </article>
      <article className="clients-description">
        { description && <p className='regular sectionSubtitle text-center' dangerouslySetInnerHTML={{ __html: description }}></p> }
        <CustomButton 
          title={Title}
          href={buttonRouting}
        />
      </article>
    </section>
  );
};