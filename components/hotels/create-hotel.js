//TODO refactor and copy the logic from registration 
// need to dispatch action createHotel     
//--------------DONE------------

import {
    Button,
    Input,
    Form,
    FormGroup,
    Label,
    FormText,
} from 'reactstrap'

import React, { useState } from 'react'
import { createHotel } from '../../redux/actions'
import { useDispatch } from "react-redux"

const CreateNewHotel = (props) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [extras, setExtras] = useState('');
    const [rating, setRating] = useState(parseFloat("1"));
    const [image, setImage] = useState('');

    const dispatch = useDispatch();

    const onCreateHotel = async () => {
        const variables = {
            title,
            description,
            extras,
            rating,
            image,
        };
        const CreateHotelInput = {
            input: { ...variables }
        };
        const response = await dispatch(createHotel(CreateHotelInput));
        if (response) {
            onCreateHotel();
        };
    }
    const getCreateHotel = () => {

        return <Button onClick={() => {
            onCreateHotel();
        }} size="md" color="primary" type="button" className='mr-2'>Добави хотел</Button>
    }

    const getOptions = () => {
        let options = [];
        for (let i = parseFloat("1"); i < parseFloat("7"); i++) {
            options.push(<option value={i} key={i}>{i}</option>)
        }
        return options;
    }

    return (
        <>
            <Form onSubmit={e => {
                e.preventDefault();
                onCreateHotel();
            }} className="my-4">
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
                        type="text"
                        name="extras"
                        id="extras"
                        value={extras}
                        onChange={e => setExtras(e.target.value)}
                        placeholder="С какви екстри разполага хотела..." />
                </FormGroup>
                <FormGroup>
                    <Label for="rating">Рейтинг:</Label>
                    <Input
                        type="select"
                        name="rating"
                        id="rating"
                        value={rating}
                        onChange={e => setRating(parseFloat(e.target.value))}
                    >
                        {getOptions()}
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleFile">Файл:</Label>
                    <Input type="file" name="file" id="exampleFile" value={image}
                        onChange={e => setImage(e.target.value)} />
                    <FormText color="muted">
                        Качете основна снимка на хотела...
                    </FormText>
                </FormGroup>
            </Form>
            {getCreateHotel()}
        </>
    );
}
export default CreateNewHotel