import React from 'react';
import MainMenu from './MainPageMenu';
import {maxWidth, minWidth} from '../UI/breakpoints';
import {Navbar, Header} from '../UI'

const Homepage = () => {
    return (
    <>
        <Header />
        <Navbar/>

        <section className='main-content-container'>
            <h1 className='main-content-title'>Home</h1>
            <p className='main-content'>Diam porta lectus sagittis dictumst.
                Curae; cras litora cum. Aenean venenatis a tortor 
                n vivamus arcu mattis sodales nam luctus convallis.
                Quisque lacus vel vestibulum tellus vestibulum! Pretium 
                risus primis vel ridiculus cum nisi duis ullamcorper dui 
                fames interdum. Pulvinar natoque vel fames ornare mollis
                aenean ridiculus. Mauris tincidunt augue leo justo facilisis
                nibh venenatis platea. Dapibus ante facilisis pretium
                eget proin ac ultricies pellentesque duis mus porttitor
                non. Arcu habitasse eleifend metus tempus? Nulla 
                faucibus urna.</p>
        </section>
    </>

    )
};

export default Homepage;
