import "../styles/body.css"

const Body = () => {
    return (
        <>
            <header>
                <div>
                    <a className="text-logo" href="">MeuSite</a>
                    <nav>
                        <a href="">PRINCIPIOS</a>
                        <a href="">QUEM SOMOS</a>
                        <a href="">PORTIFÓLIO</a>
                        <a href="">PERGUNTAS FREQUÊNTES</a>
                    </nav>
                </div>
            </header>


            <div className="container-main">
                <div className="subcontainer-main">
                    <main>
                        <div>
                            <h1>Construimos, Implantamos e Gerenciamos o seu Site</h1>
                            <h2>Sites Coorporativos para seu Negócio com o Melhor da Tecnologia Web</h2>
                            <div className="btns">
                                <button>Quanto custa?</button>
                                <button>Um site, pra quê?</button>
                            </div>

                        </div>
                        <div>
                            <img src="/bg-hero.svg" alt="" />
                                                   </div>
                    </main>
                </div>

            </div>




            <div className="container-section ">
                
                <div className="background-container-section"></div>

                <section>

                <h3>Principios</h3>

                    <div className="card-container">
                        <div className="card">
                            <div><img src="/developer2.svg" alt="" /></div>
                            <h4>A pessoa certa</h4>
                            <p>Nada de aventureros. Aqui o seu site é construido por um profissional da área de desenvolvimento Web.
                                                                
                            </p>
                        </div>

                        <div className="card">
                            <div><img src="/way2.svg" alt="" /></div>
                            <h4>Feito da maneira correta</h4>
                            <p> HTML, CSS3 e JavaScript, nada mais. Essas são as tecnologias fundamentais. Atualmente a melhor maneira
                                de construção de sites.
                            </p>
                        </div>

                        <div className="card">
                            <div><img src="/ache2.svg" alt="" /></div>
                            <h4>Nada de Gambiarra</h4>
                            <p>Não usamos WordPress, Wix, Dudda, ou qualquer outra forma de gerador de sites - sem "arrasta e solta" -, afinal, não são performáticos, não escalam e possuem segurança duvidosa.
                                
                            </p>
                        </div>

                        <div className="card">
                            <div><img src="/seo2.svg" alt="" /></div>
                            <h4>SEO, Acessibilidade e Performace</h4>
                            <p>Seu site será costruido observando a indexação da busca do Google, o desenpenho e os requisitos de acessibilidade.

                            </p>
                        </div>

                    </div>
                   

                </section>
            </div>

            <div className="container-article">
                <article>
                    <h3>Quem Somos</h3>
                    <div>
                        <img src="/rocketlaunch.png" alt=""/>
                        <p><span>L</span>orem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis molestias nemo, numquam adipisci nesciunt dolorum rem expedita et fugiat necessitatibus quas doloremque pariatur recusandae voluptatibus aliquid obcaecati id incidunt. Ea!
                        Lorem ipsum dolor, sit amet </p>
                        <p><span>M</span>orem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis molestias nemo, numquam adipisci nesciunt dolorum rem expedita et fugiat necessitatibus quas doloremque pariatur recusandae voluptatibus aliquid obcaecati id incidunt. Ea!
                        Lorem ipsum dolor, sit amet </p>
                    </div>
                </article>
            </div>

            <div className="container-portifolio">
                <div>
                    <h3>Meu Portifólio</h3>
                    <div>
                        <div><img src="/site4.png" alt="" srcset=""/></div>
                        <div><img src="/site2.jpg" alt="" srcset=""/></div>
                        <div><img src="/site3.jpg" alt="" srcset=""/></div>
                       
                    </div>
                </div>
            </div>
           



        </>
    )
}

export default Body