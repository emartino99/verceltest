import * as React from "react";
import { IPortalAndAppDevelopmentProps } from "./IPortalAndAppDevelopmentProps";
import { escape } from "@microsoft/sp-lodash-subset";
import "../../../../../../style/bootstrap.min.css";
import "../../../../../../style/index.css";
import "../style/PortalAndApp.css";
import { useEffect, useState } from "react";
import {
  IPortalAndAppCardsModel,
  getPortalAndAppCards,
} from "../service/getPortalAndAppCards";
import { parseImgJson } from "../utilis";

const PortalAndAppDevelopment: React.FC<IPortalAndAppDevelopmentProps> = (
  props
) => {
  const [appCards, setAppCards] = useState<IPortalAndAppCardsModel[]>([]);

  const {
    backgroundColor,
    title,
    titleColor,
    titleSize,
    titleWeight,
    description,
    descriptionColor,
    descriptionSize,
    descriptionWeight,
    sp,
  } = props;

  const getPortalAndAppCardsHandler = async () => {
    const result: IPortalAndAppCardsModel[] = await getPortalAndAppCards(sp);
    const resultWithUsableIMG = parseImgJson(result);
    setAppCards(resultWithUsableIMG);
  };

  useEffect(() => {
    getPortalAndAppCardsHandler();
  }, []);

  return (
    <div
      className="sectionPortalandApp justify-content-center"
      style={{ backgroundColor: backgroundColor ?? "transparent" }}
    >
      <div className="d-flex justify-content-center align-items-center flex-column pb-5">


        <div className="pb-5 text-center" style={{width:"712px"}}>
          <h3
            className={`mb-4 ${titleWeight}`}
            style={{ fontSize: titleSize.toString() + "em", color: titleColor }}
            dangerouslySetInnerHTML={{ __html: title ?? "" }}
          ></h3>
          <span
            className={`${descriptionWeight}`}
            style={{
              fontSize: descriptionSize.toString() + "em",
              color: descriptionColor,
            }}
            dangerouslySetInnerHTML={{ __html: description ?? "" }}
          ></span>
        </div>

        <div
          className="d-flex justify-content-center align-items-center flex-wrap"
          style={{ gap: "1.5rem" }}
        >
          {appCards.length &&
            appCards.map((card) => {
             
              return (
                <div
                  className="d-flex justify-content-center align-items-center our-products-card flex-column"
                  style={{ gap: "1rem"}}
                >
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ gap: "2rem" }}
                  >
                    <div>
                      <img src={card.AppImg} alt="" />
                    </div>
                  </div>

                  <div className="d-flex justify-content-around align-items-center w-100">
                    <div>
                      <h4 className="font-weight-normal">
                        {card.Title}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}

        </div>
      </div>
    </div>
  );
};

export default PortalAndAppDevelopment;
