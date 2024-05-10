import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/main/Header';
import Button from '../components/common/Button';
import ButtonWrapper from '../components/common/ButtonWrapper';
import Video from '../components/main/Video';

export default function Main() {
    const navigate = useNavigate();
    const { memberId } = useParams<string>(); // 파라미터에서 memberId 가져오기
    function goMypage() {
        navigate(`/mypage/${memberId}`);
    }

    function goSignup() {
        navigate('/signup');
    }
    return (
        <>
            <Header />
            <Video />
            <ButtonWrapper>
                <Button onClick={goMypage}>내 정보</Button>
                <Button type="button" onClick={goSignup}>
                    회원가입
                </Button>
            </ButtonWrapper>
        </>
    );
}
