import './style.scss'

interface BarProps{
    size:number;
    progress:number;
    trackWidth:number;
    trackColor:string;
    indicatorWidth:number;
    indicationColor:string;
    label:string;
    labelColor:string;
    fill:string;
}

export function CircularProgressBar(props:BarProps){
    const center = props.size/2,
            radius = center - (props.trackWidth>props.indicatorWidth?props.trackWidth:props.indicatorWidth),
            dashArray = 2*Math.PI*radius,
            dashOffset = dashArray *((100-props.progress)/100)
    return(
        <div className="svg-pi-wrapper" style={{width:props.size,height:props.size}}>

            <svg className="svg-pi" style={{width:props.size,height:props.size}}>

                <circle className="svg-pi-track"
                    cx={center}
                    cy={center}
                    fill="transparent"
                    r={radius}
                    stroke={props.trackColor}
                    strokeWidth={props.trackWidth}
                />

                <circle className="svg-pi-indicator"
                    cx={center}
                    cy={center}
                    fill={props.fill}
                    r={radius}
                    stroke={props.indicationColor}
                    strokeWidth={props.indicatorWidth}
                    strokeDasharray={dashArray}
                    strokeDashoffset={dashOffset}
                    strokeLinecap={"round"}
                />
            </svg>
            <div className="svg-pi-label">
                <span>
                    {props.label}
                </span>
            </div>
        </div>
    )
}