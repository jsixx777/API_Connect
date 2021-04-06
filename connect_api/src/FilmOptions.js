import React, {  } from 'react';
import './App.css';
import { FormControl, Form, Container } from 'react-bootstrap';

export default function FilmOptions (props) {
    const {
        filmOptions
    } = props;

    function handleFilmChanged(event) {
        console.log(event.target.value);
    }

    return (
        <div>
            <Container>
                <Form>
                    {filmOptions.map(option => (
                        <FormControl key={option.id} onChange={handleFilmChanged}>
                            <option></option>
                            <option>{option.title}</option>
                            <option>{option.original_title}</option>
                            <option>{option.director}</option>
                        </FormControl>
                    ))}
                </Form>
            </Container>
        </div>
    );
}