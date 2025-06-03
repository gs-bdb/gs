document.addEventListener('DOMContentLoaded', function() {
    // Selecionar todos os elementos figure
    const figuras = document.querySelectorAll('figure');
    
    // Adicionar efeitos de hover e clique para cada figura
    figuras.forEach(figura => {
        // Efeito de hover
        figura.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        });
        
        figura.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
        
        // Efeito de clique para mostrar mais informações
        figura.addEventListener('click', function() {
            // Verificar se já existe um elemento de detalhes expandido
            const detalhesExistente = this.querySelector('.detalhes-expandidos');
            
            // Fechar todos os detalhes abertos primeiro
            document.querySelectorAll('.detalhes-expandidos').forEach(detalhe => {
                if (detalhe.parentElement !== this) {
                    detalhe.parentElement.removeChild(detalhe);
                }
            });
            
            // Se já existe, remover (toggle)
            if (detalhesExistente) {
                this.removeChild(detalhesExistente);
                return;
            }
            
            // Criar elemento para mostrar mais detalhes
            const detalhes = document.createElement('div');
            detalhes.className = 'detalhes-expandidos';
            
            // Obter o nome do integrante
            const nome = this.querySelector('figcaption p').textContent.split('RM')[0].trim();
            
            // Adicionar conteúdo personalizado baseado no integrante
            let conteudoPersonalizado = '';
            if (nome.includes('Pedro')) {
                conteudoPersonalizado = `
                    <h3>Especialidades:</h3>
                    <ul>
                        <li>Desenvolvimento Frontend</li>
                        <li>UX/UI Design</li>
                        <li>React.js</li>
                    </ul>
                    <p>Responsável pela interface do usuário no projeto SafeWay.</p>
                `;
            } else if (nome.includes('Guilherme')) {
                conteudoPersonalizado = `
                    <h3>Especialidades:</h3>
                    <ul>
                        <li>Desenvolvimento Backend</li>
                        <li>Banco de Dados</li>
                        <li>APIs RESTful</li>
                    </ul>
                    <p>Responsável pela arquitetura de dados do projeto SafeWay.</p>
                `;
            } else if (nome.includes('Gabriel')) {
                conteudoPersonalizado = `
                    <h3>Especialidades:</h3>
                    <ul>
                        <li>DevOps</li>
                        <li>Segurança da Informação</li>
                        <li>Infraestrutura</li>
                    </ul>
                    <p>Responsável pela implementação e segurança do projeto SafeWay.</p>
                `;
            }
            
            detalhes.innerHTML = conteudoPersonalizado + '<p class="fechar">Clique novamente para fechar</p>';
            
            // Adicionar à figura
            this.appendChild(detalhes);
            
            // Animação de entrada
            setTimeout(() => {
                detalhes.style.opacity = '1';
                detalhes.style.transform = 'translateY(0)';
            }, 10);
        });
    });
    
    // Adicionar efeito de destaque ao título principal
    const titulo = document.querySelector('h1');
    if (titulo) {
        // Criar um wrapper para o efeito de destaque
        const wrapper = document.createElement('div');
        wrapper.className = 'titulo-wrapper';
        titulo.parentNode.insertBefore(wrapper, titulo);
        wrapper.appendChild(titulo);
        
        // Adicionar efeito de destaque ao carregar a página
        setTimeout(() => {
            titulo.classList.add('destacado');
        }, 300);
    }
    
    // Adicionar animação de entrada para as figuras
    figuras.forEach((figura, index) => {
        figura.style.opacity = '0';
        figura.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            figura.style.opacity = '1';
            figura.style.transform = 'translateY(0)';
        }, 300 + (index * 200)); // Atraso escalonado para cada figura
    });
    
    // Adicionar botão para alternar modo claro/escuro
    const header = document.querySelector('header');
    const botaoTema = document.createElement('button');
    botaoTema.id = 'alternar-tema';
    botaoTema.innerHTML = '🌙';
    botaoTema.title = 'Alternar modo claro/escuro';
    header.appendChild(botaoTema);
    
    // Funcionalidade do botão de tema
    botaoTema.addEventListener('click', function() {
        document.body.classList.toggle('modo-escuro');
        this.innerHTML = document.body.classList.contains('modo-escuro') ? '☀️' : '🌙';
        
        // Salvar preferência no localStorage
        if (document.body.classList.contains('modo-escuro')) {
            localStorage.setItem('tema', 'escuro');
        } else {
            localStorage.setItem('tema', 'claro');
        }
    });
    
    // Verificar preferência salva
    if (localStorage.getItem('tema') === 'escuro') {
        document.body.classList.add('modo-escuro');
        botaoTema.innerHTML = '☀️';
    }
});

// Adicionar efeito de parallax no scroll
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    
    // Efeito parallax no título
    const titulo = document.querySelector('h1');
    if (titulo) {
        titulo.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    }
    
    // Efeito parallax nas imagens
    const imagens = document.querySelectorAll('figure img');
    imagens.forEach(img => {
        const figura = img.parentElement;
        const figuraPosition = figura.getBoundingClientRect().top;
        const figuraOffset = figuraPosition + scrollPosition;
        const parallaxOffset = (scrollPosition - figuraOffset) * 0.1;
        
        if (Math.abs(parallaxOffset) < 50) {
            img.style.transform = `translateY(${parallaxOffset}px)`;
        }
    });
});
