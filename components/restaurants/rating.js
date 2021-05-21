import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Rating = ({ rating }) => {
    return (
        <div style={{ width: 50, height: 50 }}>
            <CircularProgressbar
                className={"restaurant-rating"}
                strokeWidth={15}
                value={rating * 16}
                text={rating}
            />
        </div>
    );
};

export default Rating