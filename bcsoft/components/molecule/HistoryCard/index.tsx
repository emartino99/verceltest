import { IHistoryCardProps } from '../../../models';

export function HistoryCard (props: IHistoryCardProps) {

    const {
        isEven,
        yearToShow,
        isTheLastOne,
        isActive
    } = props;

    return (isEven) ?
        <>
            <div className='history-card-even-container'>
                <h1 className={`${isActive && 'show-text'}`}>{yearToShow}</h1>
                <div className={`position-absolute ${isActive && 'history-card-even-lower-left-border'}`}></div>
                <div className={`position-absolute ${isActive && 'history-card-even-upper-top-border'}`}></div>
                <div className={`position-absolute ${isActive && 'history-card-even-lower-bottom-border'}`}></div>
                <div className={`position-absolute ${isActive && 'history-card-even-upper-left-border'}`}></div>
                <div className={`position-absolute ${isActive && 'history-card-even-lower-right-border'}`}></div>
                <div className={`position-absolute ${isActive && 'history-card-even-upper-right-border'}`}></div>
            </div>
            {
                !isTheLastOne && 
                    <div className='history-card-even-circle-container'>
                        <div className={`position-relative ${isActive && 'history-card-even-circle-line'}`}>
                            <div className='position-absolute history-card-even-circle'></div>
                        </div>
                    </div>
            }  
        </>
	:
		<>
            <div className='history-card-odd-container' >
                <h1 className={`${isActive && 'show-text'}`}>{yearToShow}</h1>
                <div className={`position-absolute ${isActive && 'history-card-odd-upper-left-border'}`}></div>
                <div className={`position-absolute ${isActive && 'history-card-odd-upper-top-border'}`}></div>
                <div className={`position-absolute ${isActive && 'history-card-odd-upper-right-border'}`}></div>
                <div className={`position-absolute ${isActive && 'history-card-odd-lower-left-border'}`}></div>
                <div className={`position-absolute ${isActive && 'history-card-odd-lower-bottom-border'}`}></div>
                <div className={`position-absolute ${isActive && 'history-card-odd-lower-right-border'}`}></div>
            </div>
            {
                !isTheLastOne && 
                    <div className='history-card-odd-circle-container'>
                        <div className={`position-relative ${isActive && 'history-card-odd-circle-line'}`}>
                            <div className='position-absolute history-card-odd-circle'></div>
                        </div>
                    </div>
            }
        </>
};