import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BoxContainer from '../components/common/BoxContainer';
import Button from '../components/common/Button';
import ButtonWrapper from '../components/common/ButtonWrapper';
import Title from '../components/common/Title';
import Label from '../components/common/Label';
import Input from '../components/common/Input';
import InfoText from '../components/common/InfoText';

export default function Signup() {
    const navigate = useNavigate();
    const [id, setId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [nickname, setNickname] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [focus, setFocus] = useState<string>('');

    useEffect(() => {
        const inputElement = document.getElementById(focus);
        if (inputElement) inputElement.focus();
    }, [focus]);

    const handleSignup = async () => {
        if (!id) {
            alert('id를 입력하세요.');
            setFocus('id');
            return;
        } else if (!password || !validatePassword(password)) {
            alert('비밀번호를 바르게 입력하세요.');
            setFocus('password');
            return;
        } else if (!nickname) {
            alert('닉네임을 입력하세요.');
            setFocus('nickname');
            return;
        } else if (!phone) {
            alert('전화번호를 입력하세요.');
            setFocus('phone');
            return;
        }

        try {
            const response = await axios.post(`http://34.64.233.12:8080/member/join`, {
                authenticationId: id,
                password: password,
                nickname: nickname,
                phone: phone,
            });
            if (response.status === 201) {
                alert('회원가입이 완료되었습니다');
                navigate('/');
            }
        } catch (error: any) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert('서버와의 연결에 실패했습니다.');
            }
        }
    };
    const goBack = () => {
        navigate(-1);
    };

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const formattedPhoneNumber = phoneAutoHyphen(event.target.value);
        setPhone(formattedPhoneNumber);
    };

    // 전화번호 자동으로 - 추가
    const phoneAutoHyphen = (phone: string) => {
        return phone.replace(/[^0-9]/g, '').replace(/^(\d{3})(\d{4})(\d{4})$/, '$1-$2-$3');
    };

    // 비밀번호 검증 유틸리티 함수
    function validatePassword(password: any) {
        const minLength = 8;
        const hasNumbers = /\d/;
        const hasEnglish = /[a-zA-Z]/;
        const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/;

        if (password.length < minLength) {
            alert('비밀번호는 최소 8자 이상이어야 합니다.');
            return false;
        }
        if (!hasNumbers.test(password)) {
            alert('비밀번호에는 최소 한 개의 숫자가 포함되어야 합니다.');
            return false;
        }
        if (!hasEnglish.test(password)) {
            alert('비밀번호에는 최소 한 개의 영어 알파벳이 포함되어야 합니다.');
            return false;
        }
        if (!hasSpecial.test(password)) {
            alert('비밀번호에는 최소 한 개의 특수 문자가 포함되어야 합니다.');
            return false;
        }
        return true;
    }

    return (
        <BoxContainer>
            <Title text="회원가입 페이지" />
            <div>
                <Label text="ID" />
                <Input
                    type="text"
                    id="id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    autoFocus={focus === 'id'}
                />
            </div>
            <div>
                <Label text="비밀번호" />
                <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoFocus={focus === 'password'}
                />
                <InfoText text="비밀번호 형식은 최소 8자 이상, 숫자, 특수문자, 영어 알파벳이 포함되어야 합니다." />
            </div>
            <div>
                <Label text="닉네임" />
                <Input
                    type="text"
                    id="nickname"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    autoFocus={focus === 'nickname'}
                />
            </div>
            <div>
                <Label text="전화번호" />
                <Input
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={handlePhoneChange}
                    autoFocus={focus === 'phone'}
                />
                <InfoText text="전화번호는 010-xxxx-xxxx 형식입니다." />
            </div>
            <ButtonWrapper>
                <Button onClick={handleSignup}>회원가입</Button>
                <Button type="button" onClick={goBack}>
                    뒤로가기
                </Button>
            </ButtonWrapper>
        </BoxContainer>
    );
}
