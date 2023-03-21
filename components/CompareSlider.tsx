import { ReactCompareSlider, ReactCompareSliderImage  } from "react-compare-slider";

export const CompareSlider = (
    { original, restored, }:
        { original: string, restored: string }) => {
    <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src={original} alt={"Original Photo"} />}
        itemTwo={<ReactCompareSliderImage src={restored} alt={"Restored Photo"} />}
        portrait
        className="flex w-[475px] mt5"
    />
}