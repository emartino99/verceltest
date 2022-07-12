interface HistoryCarouselDescriptionProps {
    Title: string | undefined;
    Event: string | undefined;
    NumberOfEmployees: string | undefined;
}

export const HistoryCarouselDescription = ({Title, Event, NumberOfEmployees}: HistoryCarouselDescriptionProps) => {
  return (
    <>
        <div className="bcsoft-history-swiper-custom-prev-button-wrapper">
            <div className="bcsoft-history-swiper-custom-prev-button">
              <div className='bcsoft-history-swiper-custom-prev-arrow'></div>
            </div>
        </div>

        <article className="bcsoft-history-swiper-description-container">
            <div>
                <h1>{Title}</h1>
                <p>{Event}</p>
                <span>{NumberOfEmployees}</span>
            </div>
        </article>
        
        <div className="bcsoft-history-swiper-custom-next-button-wrapper">
            <div className="bcsoft-history-swiper-custom-next-button">
              <div className='bcsoft-history-swiper-custom-next-arrow'></div>
            </div>
        </div>
    </>
  )
};