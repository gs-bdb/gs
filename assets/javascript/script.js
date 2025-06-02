document.addEventListener('DOMContentLoaded', function() {
    // Adiciona efeito de hover nos links do menu
    const navLinks = document.querySelectorAll('header nav ul li a');
    
    navLinks.forEach(link => {
        // Efeito ao passar o mouse
        link.addEventListener('mouseenter', function() {
            this.style.color = '#007bff';
            this.style.transition = 'color 0.3s ease';
        });
        
        // Retorna à cor original ao remover o mouse
        link.addEventListener('mouseleave', function() {
            this.style.color = '#333';
        });
        
        // Efeito ao clicar
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Previne navegação real
            
            // Remove classe ativa de todos os links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Adiciona classe ativa ao link clicado
            this.classList.add('active');
            
            // Efeito visual de clique
            this.style.color = '#0056b3';
            setTimeout(() => {
                this.style.color = '#333';
            }, 300);
            
            // Exibe mensagem no console (para fins de demonstração)
            console.log('Link clicado: ' + this.textContent);
        });