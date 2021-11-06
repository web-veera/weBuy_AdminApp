import React,{useState} from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import Input from '../components/UI/Input';
import { login } from '../actions/auth.actions';
import { useDispatch } from 'react-redux';

const Signin = (props) => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');

    const dispatch = useDispatch();
    const userLogin = (e) => {
        e.preventDefault();
        const user = {
            email,password
        }
        dispatch(login(user));
    }
    return (
        <div>
            <Container>
                <Row style={{ marginTop: '40px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={userLogin}>
                            <Input
                                label="Email"
                                placeholder="example@mail.com"
                                value={email}
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <Input
                                label="Password"
                                placeholder="password"
                                value={password}
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button variant="contained" type="submit" color="primary">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Signin;
