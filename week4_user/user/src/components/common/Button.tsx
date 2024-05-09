import * as B from './ButtonStyle';
interface ButtonProps {
    children: any;
    onClick: () => void;
    type?: 'button' | 'submit' | 'reset';
}
export default function Button({ children, onClick, type }: ButtonProps) {
    return (
        <B.DesignButton onClick={onClick} type={type}>
            {children}
        </B.DesignButton>
    );
}
