import React, { useState, useEffect } from "react";
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Col, InputGroup } from 'react-bootstrap';

const FollowersForm = (props) => {
    const initialValues = {
        email: '',
        name: '',
        address: '',
        facebook: '',
        instagram: '',
        twitter: '',
        gender: '',
        phone: '',
        age: ''
    }

    var [values, setValues] = useState(initialValues);

    useEffect(() => {
        console.log("HOLA")
        console.log(props.followerObjects[props.currentId])
        if (props.currentId === ''){
            console.log("alv")
            setValues({
                ...initialValues
            })
        }
        else
        {
            console.log("eeee")
            setValues({
                ...props.followerObjects[props.currentId]
            })
        }
            
    }, [props.currentId, props.followerObjects])

    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        console.log("VALUES");
        console.log(values);
        props.addOrEdit(values);
    }

    return (
        <div>
            <Form onSubmit={handleFormSubmit}>
                <Form.Row>
                    <Form.Group as={Col} onChange={handleInputChange}>
                        <Form.Label>Email</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend" className="fas fa-envelope"></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="email" placeholder="Enter email" name="email" value={values.email}/>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col} onChange={handleInputChange}>
                        <Form.Label>Name</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend" className="fas fa-user"></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control placeholder="Name" name="name" value={values.name}/>
                        </InputGroup>
                    </Form.Group>
                </Form.Row>

                <Form.Group onChange={handleInputChange}>
                    <Form.Label>Address</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroupPrepend" className="fas fa-map"></InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control placeholder="1234 Main St" name="address" value={values.address}/>
                    </InputGroup>
                </Form.Group>

                <Form.Group onChange={handleInputChange}>
                    <Form.Label>Facebook</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroupPrepend" className="fab fa-facebook-f"></InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control placeholder="Facebook" name="facebook" value={values.facebook}/>
                    </InputGroup>
                </Form.Group>

                <Form.Group onChange={handleInputChange}>
                    <Form.Label>Instagram</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroupPrepend" className="fab fa-instagram"></InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control placeholder="Instagram" name="instagram" value={values.instagram}/>
                    </InputGroup>
                </Form.Group>

                <Form.Group onChange={handleInputChange}>
                    <Form.Label>Twitter</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroupPrepend" className="fab fa-twitter"></InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control placeholder="Twitter" name="twitter" value={values.twitter}/>
                    </InputGroup>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} onChange={handleInputChange}>
                        <Form.Label>Gender</Form.Label>
                        <Form.Control
                            name="gender"
                            value={values.gender} 
                            as="select"
                            className="my-1 mr-sm-2"
                            id="inlineFormCustomSelectPref"
                            custom
                        >
                            <option value="0">Choose...</option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                        </Form.Control >
                    </Form.Group>

                    <Form.Group as={Col} onChange={handleInputChange}>
                        <Form.Label>Phone</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend"></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control name="phone" value={values.phone}/>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col} onChange={handleInputChange}>
                        <Form.Label>Age</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend"></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="number" placeholder="18" name="age" value={values.age}/>
                        </InputGroup>
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">
                    {props.currentId===''?"Submit":"Update"}
                </Button>
            </Form>
        </div>
    );
}

export default FollowersForm;