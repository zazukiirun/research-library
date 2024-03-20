import * as Slider from '@radix-ui/react-slider';

const VolumeSlider = ({ onChange, audioVolume }) => {
    return (
        <Slider.Root
            className="SliderRoot"
            min={0}
            step={0.1}
            max={1}
            value={[audioVolume.isMuted ? 0 : audioVolume.value]}
            onValueChange={(value) => onChange(value)}
        >
            <Slider.Track className="SliderTrack">
                <Slider.Range className="SliderRange" />
            </Slider.Track>
            <Slider.Thumb className="SliderThumb" aria-label="Volume" />
        </Slider.Root >
    );
};

export default VolumeSlider;