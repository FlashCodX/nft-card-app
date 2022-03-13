export const App = () => {
    return <div role={'application'} className={'card'}>
        <section className={'thumbnail-container'}>
            <img className={'equilibrium'}
                 src={require('./images/image-equilibrium.jpg')} alt="thumbnail"/>
            <div className={'overlay'}/>
            <img className={'eye'} src={require('./images/icon-view.svg').default}
                 alt="eye"/>
        </section>
      <a href="#">Equilibrium #3429</a>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <section className={'nft-specs'}>
            <section>
                <img src={require('./images/icon-ethereum.svg').default} alt=""/>
                <p className={'nft-value'}>0.041 ETH</p>
            </section>
            <section>
                <img src={require('./images/icon-clock.svg').default} alt=""/>
                <p className={''}>3 days left</p>
            </section>
        </section>
        <div className={'divider'}></div>
        <section className={'author'}>
            <img src={require('./images/image-avatar.png')} alt="avatar"/>
            <section>
                <p>Creation of</p>
                <a href="#"> Jules Wyvern</a>
            </section>
        </section>

    </div>
}
