import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BoxContainer from '../components/common/BoxContainer';
import Button from '../components/common/Button';
import ButtonWrapper from '../components/common/ButtonWrapper';
import Title from '../components/common/Title';
import Label from '../components/common/Label';
import Input from '../components/common/Input';
import { useState } from 'react';
import InfoText from '../components/common/InfoText';

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isUsername, setIsusername] = useState(true);
    const [isPassword, setIspassword] = useState(true);

    const handleLogin = async () => {
        if (!username) {
            setIsusername(false);
            return;
        } else if (!password) {
            setIsusername(true);
            setIspassword(false);
            return;
        }
        try {
            const response = await axios.post('http://34.64.233.12:8080/member/login', {
                authenticationId: username,
                password: password,
            });
            if (response.status === 200) {
                const memberId = response.headers.location;
                alert('로그인이 완료되었습니다.');
                navigate(`/main/${memberId}`);
            }
        } catch (error: any) {
            if (error.response) {
                alert(error.response.data.message);
            } else if (error.request) {
                alert('응답을 받지 못했습니다.');
            } else {
                alert('요청 중 오류가 발생했습니다.');
            }
        } finally {
            setIsusername(true);
            setIspassword(true);
        }
    };

    function goSignup() {
        navigate('/signup');
    }

    return (
        <BoxContainer>
            <Title text="Login" />
            <div>
                <Label text="ID" />
                <Input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                {isUsername || <InfoText text="id를 입력해주세요." />}
            </div>
            <div>
                <Label text="PW" />
                <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {isPassword || <InfoText text="비밀번호를 입력해주세요." />}
            </div>
            <ButtonWrapper>
                <Button onClick={handleLogin}>로그인</Button>
                <Button type="button" onClick={goSignup}>
                    회원가입
                </Button>
            </ButtonWrapper>
        </BoxContainer>
    );
}
