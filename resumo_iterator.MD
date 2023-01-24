> Nome - Iterator

    - O Iterator é um padrão de projeto comportamental que permite a você percorrer elementos de uma coleção sem expor as representações dele.

> Problema

    - A maioria das coleções armazena seus elementos em listas simples. Contudo, alguns deles são baseados em pilhas, árvores, grafos, e outras estruturas complexas de dados independente de quão complexa uma coleção é estruturada, ela deve fornecer uma maneira de acessar seus elementos para que outro código possa usá-los. Deve haver uma maneira de ir de elemento em elemento na coleção sem ter que acessar os mesmos elementos repetidamente.


    - Utilize o padrão Iterator quando sua coleção tiver uma estrutura de dados complexa por debaixo dos panos, mas você quer esconder a complexidade dela de seus clientes (seja por motivos de conveniência ou segurança).
    - Utilize o padrão para reduzir a duplicação de código de travessia em sua aplicação.
    - Utilize o Iterator quando você quer que seu código seja capaz de percorrer diferentes estruturas de dados ou quando os tipos dessas estruturas são desconhecidos de antemão.

> Solução

    - A ideia principal do padrão Iterator é extrair o comportamento de travessia de uma coleção para um objeto separado chamado um iterador.

> Conseqüências

Prós:

- Princípio de responsabilidade única. Você pode limpar o código cliente e as coleções ao extrair os pesados algoritmos de travessia para classes separadas.
- Princípio aberto/fechado. Você pode implementar novos tipos de coleções e iteradores e passá-los para o código existente sem quebrar coisa alguma.
- Você pode iterar sobre a mesma coleção em paralelo porque cada objeto iterador contém seu próprio estado de iteração.
- Pelas mesmas razões, você pode atrasar uma iteração e continuá-la quando necessário.

Contra:

- Aplicar o padrão pode ser um preciosismo se sua aplicação só trabalha com coleções simples.
- Usar um iterador pode ser menos eficiente que percorrer elementos de algumas coleções especializadas diretamente.
