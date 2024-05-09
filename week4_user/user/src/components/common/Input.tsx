interface InputProps {
    type: string;
    id: string;
    placeholder?: string;
    value: string;
    onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ type, id, placeholder, value, onInput, onChange }: InputProps) {
    return (
        <input
            type={type}
            id={id}
            placeholder={placeholder || ''}
            value={value}
            onChange={onChange}
            onInput={onInput}
        />
    );
}
