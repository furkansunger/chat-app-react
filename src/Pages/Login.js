import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Wrapper, NormalButton } from '../components/commonComponents'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

const Login = () => {
    return (
        <>
            <Menu />
            <Wrapper>
                <h3 className="mb-3">Login</h3>
                <Form>
                    <Input type="email" name="email" placeholder="Email" autoComplete="off" required />
                    <Input type="password" name="password" placeholder="Password" className="my-3" autoComplete="off" required />
                    <NormalButton onClick={e => e.preventDefault()}>Login</NormalButton>
                </Form>
                <span className="mt-3">Don't have an account? <Link>Sign Up</Link></span>
            </Wrapper>
            <Footer />
        </>
    )
}

export default Login
