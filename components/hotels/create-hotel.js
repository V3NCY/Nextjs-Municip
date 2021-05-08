//TODO refactor and copy the logic from registration 
// need to dispatch action createHotel     
//--------------DONE------------

import { gql, useMutation } from '@apollo/client'
import { useDispatch } from "react-redux"
import { useState } from "react"
import { createHotel } from '../../redux/actions'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Input,
    Form,
    FormGroup,
    Label,
} from 'reactstrap'

const CREATE_HOTEL = gql`
  mutation CreateHotel($data: CreateHotelInput!) {
    createHotel(data: $data) {
      _id
      title
      description
      extras
      rating
    }
  }
`;

const CreateHotel = (props) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [extras, setExtras] = useState('');
    const [rating, setRating] = useState('');

    const dispatch = useDispatch();

    const onCreateHotel = async () => {
        const variables = {
            title,
            description,
            extras,
            rating,
        }
        const userData = {
            input: variables
        }
        const response = await dispatch(createHotel(userData))
        if (response) {
            setModal(false);
        }

    }

    const getOptions = () => {
        let options = [];
        for (let i = 1; i < 7; i++) {
            options.push(<option value={i} key={i}>{i}</option>)
        }
        return options;
    }

    const [modal, setModal] = useState(false);

    const toggleModal = () => setModal(!modal);


    return (
        <>
            <Form onSubmit={e => {
                e.preventDefault();
                onCreateHotel()
            }}>

                <FormGroup>
                    <Label for="title">Заглавие:</Label>
                    <Input
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Име на хотела..." />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Описание:</Label>
                    <Input
                        type="text"
                        name="description"
                        id="description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Локация, особености..." />
                </FormGroup>
                <FormGroup>
                    <Label for="extras">Екстри:</Label>
                    <Input
                        type="extras"
                        name="extras"
                        id="extras"
                        value={extras}
                        onChange={e => setExtras(e.target.value)}
                        placeholder="Екстри, с които разполага хотела..." />
                </FormGroup>
                <FormGroup>
                    <Label for="rating">Рейтинг</Label>
                    <Input
                        type="select"
                        name="rating"
                        id="rating"
                        value={rating}
                        onChange={e => setRating(e.target.value)}
                    >
                        {getOptions()}
                    </Input>
                </FormGroup>
                <Button type="submit" color="primary">Добави хотел</Button>
            </Form>

        </>
    );
}
export default CreateHotel