import { useState } from 'react';
import { sculptureList } from './Data.jsx';

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleClick() {
        if (sculptureList.length > index + 1) {
            setIndex(index + 1);
        }
    }

    function handleClickprev() {
        if (index) {
            setIndex(index - 1);
        }
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <div className="container">
                <button className='btn' onClick={handleClick}>
                    Next
                </button>
                <button className='btn' onClick={handleClickprev}>
                    Prev
                </button>

                <h2 className='title'>
                    <i>{sculpture.name} </i>
                    by {sculpture.artist}
                </h2>
                <h3 className='count'>
                    ({index + 1} of {sculptureList.length})
                </h3>
                <img
                    src={sculpture.url}
                    alt={sculpture.alt}
                />
                {/* <p className='disc'>
                    {sculpture.description}
                </p> */}

                <button onClick={handleMoreClick}>
                    {showMore ? 'Hide' : 'Show'} details
                </button>
                {showMore && <p>{sculpture.description}</p>}

            </div>
        </>
    );
}
