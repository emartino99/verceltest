import Image from "next/image";
import { useRouter } from "next/router";
import { FormEventHandler, useCallback, useRef } from "react";
import { IForm, IFormMainSettings } from "../../../models";
import { extractMultipleData, extractData } from "../../../utils";
import { CustomButton } from "../../atoms/CustomButton";

interface FormProps {
    form: IForm[] | undefined;
    formMainSettings: IFormMainSettings[] | undefined;
}

export const Form = ({form, formMainSettings}: FormProps) => {

    const route = useRouter();
    const formExtractedData: IForm[] = extractMultipleData(route, form);
    const formMainSettingsExtractedData: IFormMainSettings = extractData(route, formMainSettings);

    const {
        Title,
        mainDescription,
        sideContentTitle,
        sideContentDescription,
        Telefono,
        secondRadioButtonTitle,
        textAreaTitle,
        CV,
    } = formMainSettingsExtractedData || {};

    const inputFileRef = useRef<HTMLInputElement>(null)

    const handleSubmit: FormEventHandler = useCallback((e) => {
        e.preventDefault()
    }, [])

    const dropHandler = (ev: any) => {
        ev.preventDefault();
      
        if (ev.dataTransfer.items) {
          for (let i = 0; i < ev.dataTransfer.items.length; i++) {
            if (ev.dataTransfer.items[i].kind === 'file') {
              const file = ev.dataTransfer.items[i].getAsFile();
              
            }
          }
        } 
    }

    const dragOverHandler = (ev: any) => {
        ev.preventDefault();
    }

    const openFileDrop = () => inputFileRef.current?.click();

    return (
        <section className="form span-1-12" id="form">
            <header>
                <h1>{Title}</h1>
                <p>{mainDescription}</p>
            </header>
            <div className="form-container">
                {
                    ( sideContentTitle || sideContentDescription ) &&
                        <aside className="more-info">
                            <h1>{sideContentTitle}</h1>
                            <p>{sideContentDescription}</p>
                        </aside>
                }
                <form className='custom-form' onSubmit={handleSubmit}>
                    <div className="input-container">
                        <div className='custom-form-input'>
                            <label htmlFor="Nome">Nome *</label>
                            <input id="Nome" type="text" name="Nome" className='input' />
                        </div>
                        <div className='custom-form-input'>
                            <label htmlFor="Cognome">Cognome *</label>
                            <input id="Cognome" type="text" name="Cognome" className='input' />
                        </div>
                    </div>
                    <div className="input-container">
                        <div className='custom-form-input'>
                            <label htmlFor="Email">Email *</label>
                            <input id="Email" type="text" name="Email" className='input' />
                        </div>
                        { 
                            Telefono === 'SI' &&
                                <div className='custom-form-input'>
                                    <label htmlFor="Telefono">Telefono *</label>
                                    <input id="Telefono" type="text" name="Telefono" className='input' />
                                </div>
                        }
                    </div>
                    <label className="main-label" htmlFor="Come ci hai conosciuto?">Come ci hai conosciuto? *</label>
                    <div className="input-container">
                        <div className='custom-form-radio'>
                            <input id="Social" type="radio" className='input' name="Come ci hai conosciuto?"  />
                            <label htmlFor="Social">Social</label>

                            <input id="Internet" type="radio" className='input' name="Come ci hai conosciuto?" />
                            <label htmlFor="Internet">Internet</label>

                            <input id="Passaparola" type="radio" className='input' name="Come ci hai conosciuto?" />
                            <label htmlFor="Passaparola">Passaparola</label>

                            <input id="Altro" type="radio" className='input' name="Come ci hai conosciuto?" />
                            <label htmlFor="Altro">Altro</label>
                        </div>
                    </div>

                    <label className="main-label" htmlFor={secondRadioButtonTitle}>{secondRadioButtonTitle}</label>

                    <div className="input-container">
                        <div className='custom-form-radio'>
                            {
                                formExtractedData?.map(item => (
                                    <div key={item.ID}>
                                        <input id={item.Title} type="radio" className='input' name="Oggetto"/>
                                        <label htmlFor={item.Title}>{item.Title}</label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="input-container">
                        <div className='custom-form-input'>
                            <label htmlFor={textAreaTitle}>{textAreaTitle}</label>
                            <textarea id={textAreaTitle} name={textAreaTitle}></textarea>
                        </div>
                    </div>
                    {
                       CV === 'SI' &&
                            <>
                                    <label className="main-label" htmlFor="CV">Carica il CV *</label>
                                    <div className="input-container">
                                        <div className='custom-form-upload-file' id="drop_zone" onDrop={dropHandler} onDragOver={dragOverHandler} onClick={openFileDrop}>
                                            <div className="file-image">
                                                <Image src={'/file.png'} alt={'file-upload'} layout='fill' objectFit="scale-down" />
                                            </div>
                                            <p>Trascina il tuo file qui oppure clicca per fare upload</p>
                                            <input type="file" id="CV" ref={inputFileRef} />
                                        </div>
                                    </div>
                            </>
                    }
                    <label className="main-label" htmlFor="Privacy">Privacy Policy *</label>
                    <div className="input-container">
                        <div className='custom-form-checkbox'>
                            <input id="Privacy" type="checkbox" className='input' name="Privacy"  />
                            <label htmlFor="Privacy">Con la sottoscrizione del presente modulo acconsento, ai sensi e per gli effetti degli artt. 13 e 23 del D. L.gs. n. 196/2003, al trattamento dei dati personali secondo le modalità e nei limiti di cui all’informativa indicata al presente link</label>
                        </div>
                    </div>
                    <div className="form-button">
                        <CustomButton title={'INVIA'}></CustomButton>
                    </div>
                </form>
            </div>
        </section>
    );
};