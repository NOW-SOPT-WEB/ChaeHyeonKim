interface LabelProps {
    text: string;
}

export default function Label({ text }: LabelProps) {
    return <label>{text}</label>;
}
