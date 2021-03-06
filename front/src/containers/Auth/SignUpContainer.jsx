import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiUser } from 'react-icons/fi';
import { AiOutlineLock, AiOutlineUnlock, AiOutlineMail } from 'react-icons/ai';
import { MdOutlinePhoneIphone } from 'react-icons/md';

const SubmitContainer = () => {
    return (
        <FlexRow>
            <Container>
                <Title>
                    <TitleTxt>Must Eat</TitleTxt>
                </Title>
                <InputBox>
                    <Input>
                        <InputNm>Your ID</InputNm>
                        <InputLine>
                            <Icon>
                                <FiUser color="#f57c00" />
                            </Icon>
                            <InputField />
                        </InputLine>
                    </Input>
                    <Input>
                        <InputNm>Password</InputNm>
                        <InputLine>
                            <Icon>
                                <AiOutlineUnlock color="#f57c00" />
                            </Icon>
                            <InputField />
                        </InputLine>
                    </Input>
                    <Input>
                        <InputNm>Password Confirm</InputNm>
                        <InputLine>
                            <Icon>
                                <AiOutlineLock color="#f57c00" />
                            </Icon>
                            <InputField />
                        </InputLine>
                    </Input>
                    <Input>
                        <InputNm>Email</InputNm>
                        <InputLine>
                            <Icon>
                                <AiOutlineMail color="#f57c00" />
                            </Icon>
                            <InputField />
                        </InputLine>
                    </Input>
                    <Input>
                        <InputNm>Cell phone number</InputNm>
                        <InputLine>
                            <Icon>
                                <MdOutlinePhoneIphone color="#f57c00" />
                            </Icon>
                            <InputField />
                        </InputLine>
                    </Input>
                    <SubmitBtn>
                        <FlexCol>
                            <SubmitTxt>Sign up</SubmitTxt>
                        </FlexCol>
                    </SubmitBtn>
                </InputBox>
                <LoginBtn>
                    <Link to="/login">
                        <LoginTxt>Login</LoginTxt>
                    </Link>
                </LoginBtn>
            </Container>
        </FlexRow>
    );
};

export default SubmitContainer;
const Container = styled.div`
    width: 20rem;
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    margin: 5rem 0 3rem 0;
`;
const TitleTxt = styled.h1`
    font-size: 2rem;
`;

/* input */
const InputBox = styled.div`
    padding: 2rem 3rem;
    border-radius: 1rem;
    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2),
        0 0.375rem 1.25rem 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 1.5rem;
`;

const Input = styled.div`
    margin-bottom: 1rem;
    width: 100%;
`;
const InputNm = styled.div`
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    margin-left: 0.3rem;
`;

const InputLine = styled.div`
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;
    border-radius: 0.5rem;
    display: flex;
    border: 1px solid silver;
    height: 1.5rem;
`;
const Icon = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
const InputField = styled.input`
    width: 95%;
    border: none;
    margin-left: 0.5rem;
    :focus {
        outline: none;
    }
`;
const SubmitBtn = styled.div`
    margin-top: 2rem;
    width: 100%;
    height: 2.2rem;
    background-color: #f57c00;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    cursor: pointer;
`;
const SubmitTxt = styled.span`
    color: #fff;
    font-weight: 300;
    font-size: 1rem;
`;

const LoginBtn = styled.div`
    display: flex;
    justify-content: center;
`;

const LoginTxt = styled.span`
    color: #f57c00;
`;

/* Flex */
const FlexRow = styled.div`
    display: flex;
    justify-content: center;
`;

const FlexCol = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
