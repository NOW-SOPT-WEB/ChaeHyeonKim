interface InputProps {
    type: string;
    id: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ type, id, placeholder, value, onChange }: InputProps) {
    return <input type={type} id={id} placeholder={placeholder || ''} value={value} onChange={onChange} />;
}
