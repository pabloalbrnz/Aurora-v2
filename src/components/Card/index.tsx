import React from 'react';


interface ICardProps {
 children: React.ReactNode
}

export function Card ({ children }: ICardProps) {
    return (
        <div style={{outline: '7px solid blue', borderRadius: '9px'}}>
            {children}
        </div>
    )
}