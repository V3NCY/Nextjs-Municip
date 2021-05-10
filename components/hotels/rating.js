import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Rating = ({ rating }) => {
    return (
        <div style={{ width: 100, height: 100 }}>
            <CircularProgressbar
                className={"hotel-rating"}
                strokeWidth={15}
                value={rating * 16}
                text={rating}
            />
        </div>
    );
};

export default Rating