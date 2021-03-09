import Filler from "../ui/Filler"
import useBreakpoints from "../../hooks/useBreakpoints"
import Card from "../ui/Card"
import Grid from "../ui/Grid"


export default function Render() {

    const bp = useBreakpoints();
    return (
        <Grid cols={bp === 'sm' ? 2 : 3} gap={10}>
            <Card color="#ccc" bg="#c22929" opacity={0.5} m={0} area={bp === 'sm' ? '1,2' : '1,2,1,2'}>
                <Filler tech words={15} size={12} />
            </Card>
            <Card color="#ccc" bg="#274a80" opacity={0.5} m={0} area={bp === 'sm' ? '1,2, 2,3' : ''}>
                <Filler tech words={15} size={12} />
            </Card>
            <Card color="#ccc" bg="#206148" opacity={0.5} m={0} area={bp === 'sm' ? '1,1' : null}>
                <Filler tech words={15} size={12} />
            </Card>
            <Card color="#ccc" bg="#923c84" opacity={0.5} m={0} area={bp === 'sm' ? '2,1' : null}>
                <Filler tech words={15} size={12} />
            </Card>
            <Card color="#ccc" bg="#bd5b0a" opacity={0.5} m={0} area={bp === 'sm' ? '1,2' : '2,2'}>
                <Filler tech words={15} size={12} />
            </Card>
        </Grid>
    )
}




