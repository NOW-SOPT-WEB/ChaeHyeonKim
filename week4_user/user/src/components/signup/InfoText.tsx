import * as I from './InfoTextStyle';

interface InfoTextProps {
    text: string;
}

export default function InfoText({ text }: InfoTextProps) {
    return <I.Title>{text}</I.Title>;
}
