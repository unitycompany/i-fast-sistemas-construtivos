import React from "react";

export type IconSvg = React.ElementType;

export type IconProps<T extends IconSvg = IconSvg> = {
    svg: T;
    color?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, "color">;

export default function Icon<T extends IconSvg>({
    svg: SvgComponent,
    color,
    ...props
}: IconProps<T>) {
    return <SvgComponent {...(props as any)} color={color} />;
}