import { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import Button from '../common/Button';
import * as V from './VideoStyle';

export default function Video() {
    const [playing, setPlaying] = useState(true);
    const playerRef = useRef(null);

    const togglePlay = () => {
        setPlaying(!playing);
    };

    return (
        <V.Container>
            <ReactPlayer
                ref={playerRef}
                url="/main.mp4"
                playing={playing}
                controls={true}
                loop={true}
                muted={true}
                width="100%"
                height="100%"
            />
            <Button onClick={togglePlay}>{playing ? '정지' : '재생'}</Button>
        </V.Container>
    );
}
