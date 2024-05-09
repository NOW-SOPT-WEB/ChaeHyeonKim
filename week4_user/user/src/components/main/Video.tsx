import * as V from './VideoStyle';

export default function Video() {
    return (
        <V.Video autoPlay={true} loop={true} muted={true} controls>
            <source src="/main.mp4" type="video/mp4" />
        </V.Video>
    );
}
