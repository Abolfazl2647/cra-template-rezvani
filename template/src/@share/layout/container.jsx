import React from 'react';

export default function withMainContiner(WrapperComponent) {
    return function Container() {
        return (
            <>
                <header>Header of the Site</header>
                <WrapperComponent />
                <footer>Footer Of the Site</footer>
            </>
        );
    };
}
