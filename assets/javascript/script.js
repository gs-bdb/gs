// Script para adicionar interatividade ao site SafeWay
document.addEventListener('DOMContentLoaded', function() {
    // Elementos principais
    const navLinks = document.querySelectorAll('.main-nav a');
    const dashboardButton = document.querySelector('.dashboard-button a');
    
    // Adiciona interatividade aos links de navegação
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.classList.add('active-link');
        });
        
        link.addEventListener('mouseleave', function() {
            this.classList.remove('active-link');
        });
    });
    
    // Interação com o botão Dashboard
    if (dashboardButton) {
        dashboardButton.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#c0c0c0';
        });
        
        dashboardButton.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#d9d9d9';
        });
        
        dashboardButton.addEventListener('click', function() {
            // Mostra mensagem de carregamento
            mostrarMensagem('Carregando Dashboard...', 1500);
        });
    }
    
    // Verifica se é a primeira visita e exibe mensagem de boas-vindas apenas uma vez
    if (!localStorage.getItem('safeway_visitado')) {
        // Marca como visitado para futuras visitas
        localStorage.setItem('safeway_visitado', 'true');
        
        // Exibe mensagem de boas-vindas com atraso
        setTimeout(function() {
            mostrarMensagemBoasVindas();
        }, 1000);
    }
});

// Função para mostrar mensagem temporária
function mostrarMensagem(texto, duracao) {
    // Cria o elemento da mensagem
    const mensagem = document.createElement('div');
    mensagem.textContent = texto;
    mensagem.style.position = 'fixed';
    mensagem.style.top = '50%';
    mensagem.style.left = '50%';
    mensagem.style.transform = 'translate(-50%, -50%)';
    mensagem.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    mensagem.style.color = 'white';
    mensagem.style.padding = '15px 20px';
    mensagem.style.borderRadius = '5px';
    mensagem.style.zIndex = '1000';
    
    // Adiciona ao corpo do documento
    document.body.appendChild(mensagem);
    
    // Remove após a duração especificada
    setTimeout(function() {
        document.body.removeChild(mensagem);
    }, duracao);
}

// Função para mostrar mensagem de boas-vindas
function mostrarMensagemBoasVindas() {
    // Cria o elemento da mensagem
    const mensagemBox = document.createElement('div');
    mensagemBox.style.position = 'fixed';
    mensagemBox.style.top = '50%';
    mensagemBox.style.left = '50%';
    mensagemBox.style.transform = 'translate(-50%, -50%)';
    mensagemBox.style.backgroundColor = 'white';
    mensagemBox.style.padding = '20px';
    mensagemBox.style.borderRadius = '8px';
    mensagemBox.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    mensagemBox.style.maxWidth = '400px';
    mensagemBox.style.textAlign = 'center';
    mensagemBox.style.zIndex = '1000';
    
    // Conteúdo da mensagem
    mensagemBox.innerHTML = `
        <h3 style="margin-bottom: 15px; color: #1e6bdb;">Bem-vindo ao SafeWay!</h3>
        <p style="margin-bottom: 15px;">Sua segurança é nossa prioridade. Explore nosso site para descobrir como podemos ajudar.</p>
        <div style="display: flex; justify-content: space-between;">
            <button id="fechar-mensagem" style="background-color: #d9d9d9; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer;">Fechar</button>
            <button id="explorar-site" style="background-color: #7989b6; color: white; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer;">Explorar</button>
        </div>
    `;
    
    // Adiciona ao corpo do documento
    document.body.appendChild(mensagemBox);
    
    // Configura o botão de fechar
    document.getElementById('fechar-mensagem').addEventListener('click', function() {
        document.body.removeChild(mensagemBox);
    });
    
    // Configura o botão de explorar
    document.getElementById('explorar-site').addEventListener('click', function() {
        document.body.removeChild(mensagemBox);
        // Destaca o botão Dashboard
        const dashboardButton = document.querySelector('.dashboard-button a');
        if (dashboardButton) {
            dashboardButton.style.backgroundColor = '#c0c0c0';
            setTimeout(function() {
                dashboardButton.style.backgroundColor = '#d9d9d9';
            }, 1000);
        }
    });
}