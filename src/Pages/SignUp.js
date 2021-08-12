import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, NormalButton, Wrapper } from '../components/commonComponents'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

const SignUp = () => {
    return (
        <>
            <Menu />
            <Wrapper>
                <h3 className="mb-3">Login</h3>
                <Form>
                    <Input type="name" name="name" placeholder="Full Name" autoComplete="off" required />
                    <Input type="email" name="email" placeholder="Email" className="my-3" autoComplete="off" required />
                    <Input type="password" name="password" placeholder="Password" autoComplete="off" required />
                    <NormalButton className="my-3" onClick={e => e.preventDefault()}>Sign Up</NormalButton>
                </Form>
                <span>Already have an account? <Link>Login</Link></span>
            </Wrapper>
            <Footer />
        </>
    )
}

export default SignUp
