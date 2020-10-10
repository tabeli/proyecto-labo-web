import React, { Component, useState, useEffect } from "react";
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Jumbotron, Container, Table } from 'react-bootstrap';
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import firebaseDb from "../services/firebase";
import FollowersForm from './FollowersForm';

function Followers() {
  var [followerObjects, setFollowerObjects] = useState({})
  var [currentId, setCurrentId] = useState('')

  useEffect(() => {
    firebaseDb.child('followers').on('value', snapshot => {
      if (snapshot.val() != null)
        setFollowerObjects({
          ...snapshot.val()
        })
    })
  }, [])

  const addOrEdit = obj => {
    if(currentId === ''){
      firebaseDb.child('followers').push(
        obj,
        err => {
          if (err)
            console.log(err);
        }
      )
    }
    else{
      firebaseDb.child(`followers/${currentId}`).set(
        obj,
        err => {
          if (err)
            console.log(err)
          else
          setCurrentId('')
        }
      )
    }
    
  }

  const onDelete = key =>{
    if(window.confirm('Are you sure?')){
      firebaseDb.child(`followers/${key}`).remove(
        err => {
          if (err)
            console.log(err)
          else
          setCurrentId('')
        }
      )
    }
  }

  return (
    <div className="App">
      <Jumbotron fluid>
        <Container>
          <h1>Manage followers</h1>
        </Container>
      </Jumbotron>
      <Row>
        <Col className="mt-0">
          <FollowersForm {...({addOrEdit, currentId, followerObjects})} />
        </Col>


      </Row>
      <br/><br/><br/>
      <Row>
        <Col className="mt-0">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Email</th>
                <th>Name</th>
                <th>Adress</th>
                <th>Gender</th>
                <th>Phone</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                Object.keys(followerObjects).map(id => {
                  console.log(id)
                  return <tr key={id}>
                    <td>{followerObjects[id].email}</td>
                    <td>{followerObjects[id].name}</td>
                    <td>{followerObjects[id].address}</td>
                    <td>{followerObjects[id].gender}</td>
                    <td>{followerObjects[id].phone}</td>
                    <td>{followerObjects[id].age}</td>
                    <td>
                      <a className="btn btn-primary" onClick={() => {setCurrentId(id)}}>
                        <i className="fas fa-pencil-alt"/>
                      </a>
                      <a className="btn btn-danger" onClick={() => {onDelete(id)}}>
                        <i className="fas fa-trash-alt"/>
                      </a>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
}

export default Followers;
