# BROWSER API
1. São recursos de programção contidos no browser, isso é podemos pegar esses recursos para aplicarmos nas nossos sites para torná - los mais dinâmicos e profissionais!

# EXEMPLOS DE APIS DO NAVEGADOR

1. __Web API Notification:__ Gerencia notificações;
2. __Web Audio API:__ manipula áudios no navegador;
3. __Web Storage API:__ armazenamento de dados no navegador;

# ADICIONANDO ELEMENTO COM JS NO HTML

>>> insertBefore(elementoNovo, antes de qual elemento será adicionado)


# WEB STORAGE API

1. Armazenamento de dados do lado do cliente


2. localStorage:
    2.1. O armazenamento de dados é feito de forma isolada, baseando-se na URL base da página, vale ressaltar que ao fechar o browser e abri-lo novamente ele não irá perder os dados salvos pelo localStorage!

3. sessionStorage:
    3.1. O armazenamento também é feito baseando-se na URL base na página, porém ao fechar o browser ou até mesmo a aba e abri-los novamente os dados que até então o estavam "salvos" não vão estar mais lá. Então o sessionStorage salva apenas na sessão (enquanto a aba estiver aberta).

4. Métodos:
    
    >> SetItem("chave", "valor"); => Conseguimos gravar dados no Web Storage
    >>GetItem("chave"); => Obtendo dados do Web Storage
    >>RemoveItem("chave"); => Remove um Item do Web Storage
    >>Clear(); => Limpa o Web Storage 
