import React from 'react';
import Link from '../src/components/Link';



function Title({ children, as }) {
    const Tag = as;
    return (
        <React.Fragment>
            <Tag>
                {children}
            </Tag>
            <style jsx>
                {`
                ${Tag}{
                    color: red;
                    
                }
            `}</style>
        </React.Fragment>
    );
}

export default function HomePage() {
    return (
        <div>
            <Title as="h2">Alura Cases - Home</Title>
            <Link href="/faq">
                Ir para pagina do FAQ
            </Link>
        </div>
    );
};