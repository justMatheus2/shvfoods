const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>SHAMMA VALUE FOODS</h3>
            <p>Fornecendo alimentos de qualidade a preços acessíveis para famílias e comunidades.</p>
            <div className="social-icons">
              <a href="#" className="social-icon">f</a>
              <a href="#" className="social-icon">in</a>
              <a href="#" className="social-icon">ig</a>
              <a href="#" className="social-icon">tw</a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Links Rápidos</h3>
            <a href="#about">Sobre Nós</a>
            <a href="#products">Produtos</a>
            <a href="#order">Fazer Pedido</a>
            <a href="#join">Junte-se a Nós</a>
          </div>
          <div className="footer-column">
            <h3>Contato</h3>
            <p>Endereço: Rua Exemplo, 123 - Centro</p>
            <p>Telefone: (11) 9999-9999</p>
            <p>E-mail: contato@shammavaluefoods.com</p>
          </div>
          <div className="footer-column">
            <h3>Horário de Funcionamento</h3>
            <p>Segunda a Sexta: 8h às 18h</p>
            <p>Sábado: 8h às 12h</p>
            <p>Domingo: Fechado</p>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2023 Shamma Value Foods. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;