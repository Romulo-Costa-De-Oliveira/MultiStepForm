import styled from 'styled-components';

export const Container = styled.div`
    margin-right: 20px;
    margin-bottom: 20px;
    p{ 
        font-size: 13px;
        color: #B8B8D4;
    }
    h1{ 
        margin: 0;
        padding: 0;
        font-size: 26px;
    }
    hr{ 
        height: 1px;
        border: 0;
        background-color: #16195C;
        margin: 30px 0;
    }
    label{
        display: block;
        margin-bottom: 20px;
        font-size: 13px;

        input{
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #25CD89;
            border-radius: 10px;
            color: #FFFFFF;
            outline: 0;
            font-size: 15px;
            background-color: #02044A;
        }
    }
    button {
        background-color: #25CD89;
        color: #FFFFFF;
        font-size: 14px;
        font-weight: bold;
        padding: 20px 40px;
        border-radius: 30px;
        margin-top: 30px;
        border: 0;
        cursor: pointer;
    }
    .back-button {
        font-size: 16px;
        text-decoration: none;
        padding: 20px 40px;
        color: #B8B8D4;
    }
`;