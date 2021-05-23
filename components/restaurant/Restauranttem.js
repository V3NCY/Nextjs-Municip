import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
} from 'reactstrap'
import Rating from "./rating"
import constants from '../../constants'


const RestaurantItem = props => {

    const getRestaurantImage = () => {
        if (!props.image) {
            return null;
        }
        return <CardImg
            top
            width="100%"
            src={`${constants.imgPath}${props.image}`}
        />
    }

    return (
        <div className="col-md-4">
            <Card className="mb-3">
                {getRestaurantImage()}
                <CardBody>
                    <div className="d-flex align-items-center mb-2">
                        <Rating rating={props.rating} />
                        <CardTitle tag="h5" className="ml-3 text-truncate mb-0">{props.title}</CardTitle>
                    </div>
                    <CardText className="hotel-extras ml-3 text-truncate mb-0">{props.extras}</CardText>
                    <CardText className="hotel-description ml-3 text-truncate mb-0">{props.description}</CardText>

                </CardBody>
            </Card>
        </div>
    );
};

export default RestaurantItem