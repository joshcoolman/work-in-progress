import StaggerItems from "../animated/StaggerItems"
export default function GridResponsive(props) {
    const { gap = 10 } = props;

    return (
        <div className="grid-responsive" style={{ gap }} >
            <StaggerItems>
                {props.children}
            </StaggerItems>
        </div>
    );
}

















