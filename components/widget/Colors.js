import Block from "../ui/Block"
import invert from "invert-color"
import { _colors } from "../../helpers/palette"
import StaggerItems from "../animated/StaggerItems"
import { _alpha } from "../../helpers/colors"
import { useState } from "react"

const Colors = props => {
    const [selected, setSelected] = useState('rose')
    const colorKeys = Object.keys(_colors).filter(key => key !== 'black' && key !== 'white')
    return (
        <div>
            <Block bg={'black'} nm grid={`repeat(auto-fill, minmax(100%, 1fr))`}>
                {colorKeys.map(key => {
                    const tones = Object.keys(_colors[key]).reverse();
                    const active = key === selected;
                    const _bg = active ? 'black' : _alpha(_colors[key][700], 0.3);
                    const _txt = active ? _colors[key][400] : _alpha(_colors[key][400], 0.8);
                    return (
                        <div key={key}>
                            <Block bg={_bg} nm onClick={() => { setSelected(key) }}>
                                <p style={{ color: _txt, fontSize: active ? 34 : 24 }}>{key}</p>
                            </Block>
                            {active && (

                                <Block gap={4} nm
                                    style={{ overflow: 'hidden' }}
                                    grid={`repeat(auto-fill, minmax(30%, 1fr))`}>
                                    <StaggerItems>
                                        {tones.map(tone => {
                                            const bg = _colors[key][tone];
                                            const txt = invert(bg, true)
                                            return tone > 50 ? (
                                                <Block key={tone} c np nm rc={2} bg={bg} style={{ height: 80 }} >
                                                    <p style={{ color: txt, opacity: 0.6 }}>{tone}</p>
                                                </Block>
                                            ) : null
                                        })}
                                    </StaggerItems>
                                </Block>
                            )}
                        </div>
                    )
                })}
            </Block>



        </div>
    )
}



export default Colors





















