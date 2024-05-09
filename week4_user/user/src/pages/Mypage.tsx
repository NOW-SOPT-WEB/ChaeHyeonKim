import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import BoxContainer from '../components/common/BoxContainer';
import Button from '../components/common/Button';
import ButtonWrapper from '../components/common/ButtonWrapper';
import Title from '../components/common/Title';
import Label from '../components/common/Label';
import Input from '../components/common/Input';

export default function Mypage() {
    const navigate = useNavigate();
    const { memberId } = useParams(); // 파라미터에서 memberId 가져오기
    console.log(memberId);
    const [userData, setUserData] = useState({
        authenticationId: '',
        nickname: '',
        phone: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://34.64.233.12:8080/member/info`, {
                    headers: {
                        memberId: memberId, // 헤더에 넣기
                    },
                });
                if (response.status === 200) {
                    setUserData(response.data.data);
                }
            } catch (error: any) {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert('서버와의 연결에 실패했습니다.');
                }
            }
        };
        fetchData();
    }, [memberId]);

    const goHome = () => {
        navigate(`/main/${memberId}`);
    };

    return (
        <BoxContainer>
            <Title text="마이 페이지" />
            <div>
                <Label text="ID" />
                <Input type="text" id="id" value={userData.authenticationId} readOnly />
            </div>
            <div>
                <Label text="닉네임" />
                <Input type="text" id="nickname" value={userData.nickname} readOnly />
            </div>
            <div>
                <Label text="전화번호" />
                <Input type="text" id="phone" value={userData.phone} readOnly />
            </div>
            <ButtonWrapper>
                <Button type="button" onClick={goHome}>
                    홈버튼
                </Button>
            </ButtonWrapper>
        </BoxContainer>
    );
}
