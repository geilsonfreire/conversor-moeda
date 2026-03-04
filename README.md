💱 Currency Converter

Aplicação web responsiva para conversão de moedas em tempo real utilizando a API pública Frankfurter.

O projeto permite selecionar moedas de origem e destino, realizar a conversão instantaneamente e exibir a taxa atual com base na cotação mais recente disponível.

🚀 Demonstração

Interface moderna com efeito glassmorphism, bandeiras dinâmicas e layout responsivo para desktop, tablet e dispositivos móveis.

<img src="./1.jpg" alt="Logo">

🛠️ Tecnologias Utilizadas

HTML5

CSS3

JavaScript (Vanilla JS)

API pública de câmbio:
🔗 https://api.frankfurter.app

CDN para bandeiras:
🔗 https://flagcdn.com

Google Fonts (Poppins)

Font Awesome (ícones)

📂 Estrutura do Projeto
📁 currency-converter
│
├── index.html
├── style.css
├── script.js
├── country-list.js
├── logo.webp
└── fundo.jpg
📄 Descrição dos Arquivos
Arquivo	Responsabilidade
index.html	Estrutura da aplicação
style.css	Estilização e responsividade
script.js	Lógica da aplicação e integração com API
country-list.js	Lista de moedas e países para exibição das bandeiras
⚙️ Funcionalidades

✅ Conversão em tempo real

✅ Troca rápida entre moedas (botão de inversão)

✅ Bandeiras atualizadas dinamicamente

✅ Layout responsivo (Desktop, Tablet e Mobile)

✅ Validação básica de valor

✅ Tratamento de erros na requisição

🔄 Fluxo de Funcionamento

O usuário informa o valor

Seleciona moeda de origem

Seleciona moeda de destino

A aplicação consome a API:

https://api.frankfurter.app/latest

O resultado é exibido dinamicamente na interface

📱 Responsividade

O projeto utiliza Media Queries para adaptação em:

📱 Até 480px

📱 Até 768px

📱 Até 1024px

Layout adaptativo com reorganização de elementos e ajuste de tipografia.

🔌 Integração com API

Exemplo de requisição utilizada:

https://api.frankfurter.app/latest?amount=1&from=BRL&to=USD

Resposta esperada:

{
  "amount": 1,
  "base": "BRL",
  "date": "2026-03-04",
  "rates": {
    "USD": 0.20
  }
}
🧠 Conceitos Aplicados

Manipulação de DOM

Eventos (click, change, load)

Fetch API

Template literals

Manipulação dinâmica de HTML

Responsividade com Flexbox

Tratamento de erros com .catch()

💡 Melhorias Futuras

🔄 Cache da taxa de câmbio

📊 Histórico de conversões

🌍 Detecção automática da moeda local

💾 Persistência com LocalStorage

🌙 Modo Dark/Light toggle

🧪 Testes unitários

▶️ Como Executar o Projeto

Clone o repositório:

git clone https://github.com/seu-usuario/currency-converter.git

Acesse a pasta:

cd currency-converter

Abra o arquivo index.html no navegador

Não é necessário instalar dependências.

📄 Licença

Este projeto é de uso livre para fins educacionais e de aprendizado.

👨‍💻 Autor

Desenvolvido por Geilson Freire
Engenheiro de Software | Desenvolvedor Full-Stack