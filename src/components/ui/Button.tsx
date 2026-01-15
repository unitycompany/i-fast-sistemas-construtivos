import styled from "@emotion/styled";

const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 18px;
    width: max-content;
    white-space: nowrap;
    border-radius: var(--radius-all);
    font-family: var(--font-body);
    color: var(--color-fg);
    border: none;
    font-size: 18px;
    letter-spacing: -1px;
    font-weight: 400;
    line-height: 100%;
    cursor: pointer;
`

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    id?: string;
    type?: "button" | "submit" | "reset";
} 

export default function Button({
    children,
    className,
    onClick,
    id,
    type = "button",
    ...props
}: ButtonProps) {
    return <ButtonContainer
        className={className}
        onClick={onClick}
        id={id}
        type={type}
        {...props}
    >
        {children}
    </ButtonContainer>
}