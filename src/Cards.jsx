import Imagens from './components/Imagens'
import Paragrafo from './components/Paragrafo'
import Rodape from './components/Rodape'
import Subtitulo from './components/Subtitulo'
import Titulo from './components/Titulo'
import Foto from './components/Foto'

function Cards() {
    return (
        <>
            <div className="card_principal">
                <Titulo titulo="Meu diário Reprograma" />
            </div>
            
            <div className="card_apresentacao">
                <Subtitulo subtitulo="Oiê! Eu sou a Lorena!!" />
            </div>

            <div className="card_informacoes">
                <Paragrafo paragrafo="Mineira, 32 anos, Engenheira Mecânica em transição de carreira para a área de tecnologia, em formação pelo bootcamp de Front-end Developer da Reprograma. Apaixonada por tecnologia, música, cinema, natureza e pessoas!"/>
                <Foto foto="https://scontent.frec8-1.fna.fbcdn.net/v/t39.30808-6/284393884_4880341772076667_3695780243530205130_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG9Hzh1cQaEk8snO8ezeaRwYhAxLrpD6ZtiEDEuukPpmz-zeeDUSJSH_6nZhaYgmBd4beLuAzVQi3F5FPlCA8sa&_nc_ohc=4vmaqaDXRaYAX9P5GPg&_nc_ht=scontent.frec8-1.fna&oh=00_AT8DE5Fbez_xdylFD6XvaN9IcApuabh0qAPdQ3wIsjTT8Q&oe=62C444F4" 
                alt="Foto Lorena Araújo"/>
            </div>

            <div className="card_secundario">
                <Titulo titulo="8 coisas boas que a Reprograma me trouxe:" />
            </div>

            <div className="card_aprendizados">
                <Subtitulo subtitulo="Conheci mulheres incríveis!" />
                <Paragrafo paragrafo="Sejam nas aulas ou da própia Reprograma, desde a oficina tivemos contato com mulheres complemente excepcionais e incríveis, fontes de inspiração e aprendizados infinitos!"/>
                <Imagens img="https://i.gifer.com/JsI.gif" 
                alt="Gif Sailor Moon com mulheres incríveis"/>
            </div>

            <div className="card_aprendizados">
                <Subtitulo subtitulo="Aprendizado constante!" />
                <Paragrafo paragrafo="A cada semana um conteúdo novo é apresentado, tivemos GitHub, APIs, CSS, HTML e mais uma infinidade de coisas, exercitamos nosso aprendizado com tarefas em aula e desafios semanais."/>
                <Imagens img="https://c.tenor.com/G8wlvJeP4m4AAAAC/computer-sailor-jupiter.gif" 
                alt="Gif Sailor Júpiter codando"/>
            </div>

            <div className="card_aprendizados">
                <Subtitulo subtitulo="Fiz várias amizades!" />
                <Paragrafo paragrafo="Já na primeira semana me identifiquei com várias alunas e construímos uma amizade bem legal, dividimos desde dúvidas sobre o conteúdo da semana, a animes preferidos, gostos musicais e um ombro amigo quando necessário!!" />
                <Imagens img="https://c.tenor.com/EIJ_wX4WprQAAAAC/sailor-moon.gif" 
                alt="Gif Sailor Moon e amigas"/>
            </div>

            <div className="card_aprendizados">
                <Subtitulo subtitulo="Crescimento profissional e pessoal!" />
                <Paragrafo paragrafo="Ambos desenvolvidos com os ensinamentos semanais, momentos de monitoria e orientações, conversas diárias e conteúdos apresentados, desde o momento da inscrição já é proporcionada uma chuva de novidades!!" />
                <Imagens img="https://i.pinimg.com/originals/e9/4c/8a/e94c8ac2e59d4426e20e8c773f535b3a.gif" 
                alt="Gif Sailor Moon poderosa"/>
            </div>

            <div className="card_aprendizados">
                <Subtitulo subtitulo="Momentos de imensa alegria!" />
                <Paragrafo paragrafo="Desde o primeiro sim na classificação para a oficina, o e-mail na caixa de entrada informado que eu estava selecionada para o curso, a cada entrega de atividade, nos momentos de parceria e risadas, as 18 semanas do bootcamp são recheadas de momentos extremamente felizes e gratificantes!!" />
                <Imagens img="https://c.tenor.com/xFtZB04aP90AAAAC/sailor-moon-happy.gif" 
                alt="Gif Sailor Moon feliz"/>
            </div>

            <div className="card_aprendizados">
                <Subtitulo subtitulo="Autoconhecimento" />
                <Paragrafo paragrafo="O apoio psicológico oferecido durante o curso sempre foi de super valia, nele tratamos sobre temas que nos afligem durante essa trajetória, além do apoio ao nosso bem-estar a cada semana."/>
                <Imagens img="https://images.ctfassets.net/iyiurthvosft/featured-img-of-post-rv-7549/397a3faef998e0c2449270c65ddf06db/featured-img-of-post-rv-7549.gif?&w=1200" 
                alt="Gif Sailor Moon autoconhecimento"/>
            </div>

            <div className="card_aprendizados">
                <Subtitulo subtitulo="Oportunidades gigantescas!!!" />
                <Paragrafo paragrafo="Tivemos momentos de monitoria com profissionais de várias empresas, dicas de empregabilidade e construção de portfólio, um bootcamp extremamente completo em todos os aspectos!" />
                <Imagens img="https://64.media.tumblr.com/e563374f6fc221055597bd9132e49ffb/d9d461d94e6a88f2-51/s1280x1920/0254269fa225a3fdde3e9e9e27be2f2265557c31.gifv" 
                alt="Gif Sailor Mercury"/>
            </div>

            <div className="card_aprendizados">
                <Subtitulo subtitulo="Um novo ciclo!!!" />
                <Paragrafo paragrafo="Em poucas palavras, a Reprograma mudou a minha vida, me trouxe uma bagagem incrível de coisas boas, aprendizados e possibilidades!!" />
                <Imagens img="https://64.media.tumblr.com/892bcfdf14c633438402603428a9642f/b1519ba9b9516a37-ab/s500x750/dd4acca69eee0c439f374d92b410ecb59fcb66ff.gifv" 
                alt="Gif de todas as Sailors caminhando"/>
            </div>

            <div className="card_rodape">
                <Rodape rodape="Feito com muito carinho para a aula de React I da Reprograma ♥" />
            </div>
        </>
    )
}

export default Cards