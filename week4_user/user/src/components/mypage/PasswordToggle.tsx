import * as P from './PasswordToggleStyle';
import Label from '../common/Label';
import Input from '../common/Input';
import { useState } from 'react';
import axios from 'axios';
import Button from '../common/Button';

interface PasswordToggleProps {
    memberId: string;
}

export default function PasswordToggle({ memberId }: PasswordToggleProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [currentPassword, setCurrentPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = async () => {
        if (!currentPassword || !newPassword || !confirmPassword) {
            alert('비밀번호를 입력해주세요.');
            return;
        }

        try {
            const response = await axios.patch(
                'http://34.64.233.12:8080/member/password',
                {
                    previousPassword: currentPassword,
                    newPassword: newPassword,
                    newPasswordVerification: confirmPassword,
                },
                {
                    headers: { memberId: memberId },
                },
            );

            if (response.status === 200) {
                alert('비밀번호 변경이 완료되었습니다.');
                setIsOpen(false);
                setCurrentPassword('');
                setNewPassword('');
                setConfirmPassword('');
            }
        } catch (error: any) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert('서버와의 연결에 실패했습니다.');
            }
        }
    };

    return (
        <P.Container>
            <P.ToggleButton isOpen={isOpen} onClick={toggle}>
                비밀번호 변경 <span>▲</span>
            </P.ToggleButton>
            {isOpen && (
                <P.Form isOpen={isOpen}>
                    <div>
                        <Label text="기존 비밀번호" />
                        <Input
                            type="text"
                            id="current-password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <Label text="새 비밀번호" />
                        <Input
                            type="text"
                            id="new-password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <Label text="비밀번호 확인" />
                        <Input
                            type="text"
                            id="confirm-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <Button type="button" onClick={handleSubmit}>
                        비밀번호 변경
                    </Button>
                </P.Form>
            )}
        </P.Container>
    );
}
