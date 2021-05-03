import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap'
import Rating from "./rating"
import constants from '../../constants'

const HotelItem = props => {

  const getHotelImage = () => {
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
        {getHotelImage()}
        <CardBody>
          <div className="d-flex align-items-center mb-2">
            <Rating rating={props.rating} />
            <CardTitle tag="h5" className="ml-3 text-truncate mb-0">{props.title}</CardTitle>
          </div>
          <CardText className="hotel-description">{props.description}</CardText>

        </CardBody>
      </Card>
    </div>
  );
};

export default HotelItem