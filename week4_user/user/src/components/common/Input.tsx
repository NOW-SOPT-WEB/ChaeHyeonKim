interface InputProps {
    type: string;
    id: string;
    placeholder?: string;
    value: string;
    onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    readOnly?: boolean;
}

export default function Input({ type, id, placeholder, value, onInput, onChange, readOnly }: InputProps) {
    return (
        <input
            type={type}
            id={id}
            placeholder={placeholder || ''}
            value={value}
            onChange={onChange}
            onInput={onInput}
            readOnly={readOnly}
        />
    );
}
