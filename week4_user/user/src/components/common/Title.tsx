import * as T from './TitleStyle';

interface TitleProps {
    text: string;
}

export default function Title({ text }: TitleProps) {
    return <T.Title>{text}</T.Title>;
}
