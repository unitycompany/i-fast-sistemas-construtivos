import React from "react"

interface IconProps extends React.ComponentProps<"svg"> {
    svg: React.FC<React.ComponentProps<"svg">>;
    color?: string;
}

export default function Icon({
    svg: SvgComponent,
    className,
    color,
    ...props
}: IconProps) {
    return <SvgComponent color={color} {...props} className={className} /> 
}