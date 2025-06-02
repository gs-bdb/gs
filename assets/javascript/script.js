
document.addEventListener('DOMContentLoaded', function() {
   
    const navLinks = document.querySelectorAll('.main-nav a');
    const dashboardButton = document.querySelector('.dashboard-button a');
    
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.classList.add('active-link');
        });
        
        link.addEventListener('mouseleave', function() {
            this.classList.remove('active-link');
        });
    });
    

    if (dashboardButton) {
        dashboardButton.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#c0c0c0';
        });
        
        dashboardButton.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#d9d9d9';
        });
        
        dashboardButton.addEventListener('click', function() {
           
            mostrarMensagem('Carregando Dashboard...', 1500);
        });
    }
    
 
    setTimeout(function() {
        mostrarMensagemBoasVindas();
    }, 1000);
});


function mostrarMensagem(texto, duracao) {
   
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
    
 
    document.body.appendChild(mensagem);
    
 
    setTimeout(function() {
        document.body.removeChild(mensagem);
    }, duracao);
}


function mostrarMensagemBoasVindas() {
   
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
    
    
    mensagemBox.innerHTML = `
        <h3 style="margin-bottom: 15px; color: #1e6bdb;">Bem-vindo ao SafeWay!</h3>
        <p style="margin-bottom: 15px;">Sua segurança é nossa prioridade. Explore nosso site para descobrir como podemos ajudar.</p>
        <div style="display: flex; justify-content: space-between;">
            <button id="fechar-mensagem" style="background-color: #d9d9d9; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer;">Fechar</button>
            <button id="explorar-site" style="background-color: #7989b6; color: white; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer;">Explorar</button>
        </div>
    `;
    
     document.body.appendChild(mensagemBox);
    
    
    document.getElementById('fechar-mensagem').addEventListener('click', function() {
        document.body.removeChild(mensagemBox);
    });
    
    
    document.getElementById('explorar-site').addEventListener('click', function() {
        document.body.removeChild(mensagemBox);
       
        const dashboardButton = document.querySelector('.dashboard-button a');
        if (dashboardButton) {
            dashboardButton.style.backgroundColor = '#c0c0c0';
            setTimeout(function() {
                dashboardButton.style.backgroundColor = '#d9d9d9';
            }, 1000);
        }
    });
}