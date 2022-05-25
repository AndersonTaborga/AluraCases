import { useEffect, useState } from 'react';
import Link from '../src/components/Link';


export async function getStaticProps() {

    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faq = await fetch(FAQ_API_URL)
    .then((repostaDoServidor) => {
        return repostaDoServidor.json();
    })
    .then((resposta) => {
        return resposta;
    });


    return  {
        props: {

            quemtemacesso: "quem tem acesso",
            faq
        },
    }

}

export default function FAQPage({faq}){
    console.log(faq);
    // const [faq, setFaq] = useState([]);
    // useEffect(() => {
    //     }, []);

    return(
        <div>
            <h1>Alura Cases - Página de perguntas FAQ</h1>
            <Link href="/">
                Ir para o FAQ
            </Link>
            <ul>
                {faq.map(({ answer, question }) => (
                   <li key={question}>
                   <article>
                       <h2>{question}</h2>
                       <p>{answer}</p>
                   </article>
                   </li>
                ))}
            </ul>
        </div>
    )
}