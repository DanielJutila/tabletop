import React from 'react';
import { Navbar, Header, Footer } from '../UI';
import styled from 'styled-components';
import MainMenu from './MainPageMenu';

const HomepageContainer = styled.div`
    display: flex;
    margin-right: auto;
    margin-left: auto;
    margin-top: 3%;
    max-width: 100%;
    justify-content: center;
`;

const HomepageText = styled.p`
    line-height: 1.4;
    font-size: 1.2rem;
    max-width: 65%;
    text-wrap: pretty;
    margin-top: 0;
    display: block;
`;

const Homepage = () => {
    return (
        <>
            <HomepageContainer>

            <HomepageText>Diam porta lectus sagittis dictumst.
                Curae; cras litora cum. Aenean venenatis a tortor 
                n vivamus arcu mattis sodales nam luctus convallis.
                Quisque lacus vel vestibulum tellus vestibulum! Pretium 
                risus primis vel ridiculus cum nisi duis ullamcorper dui 
                fames interdum. Pulvinar natoque vel fames ornare mollis
                aenean ridiculus. Mauris tincidunt augue leo justo facilisis
                nibh venenatis platea. Dapibus ante facilisis pretium
                eget proin ac ultricies pellentesque duis mus porttitor
                non. Arcu habitasse eleifend metus tempus? Nulla 
                faucibus urna.</HomepageText>
                <MainMenu />
            </HomepageContainer>

        </>

    )
};

export default Homepage;
