import { useState } from 'react';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null
  });

  const benefits = [
    'Salário competitivo',
    'Plano de saúde',
    'Vale-refeição',
    'Oportunidades de crescimento'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aqui você integraria com o EmailJS
    console.log('Dados da candidatura:', formData);
    
    alert('Candidatura enviada com sucesso! Analisaremos seu perfil e entraremos em contato.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      resume: null
    });
  };

  return (
    <section id="join" className="join-us">
      <div className="container">
        <div className="join-content">
          <div className="join-text">
            <h2>Join Our Team</h2>
            <p>Work with us and become part of a company that values its staff and is committed to mutual growth.</p>
            <p>We offer opportunities for professional development, a positive working environment, and competitive benefits.</p>
            
            <div className="benefits">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <div className="benefit-icon">✓</div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="join-form">
            <div className="form-container">
              <h2 className="form-title">Candidate-se</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="joinName">Nome Completo</label>
                  <input
                    type="text"
                    id="joinName"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="joinEmail">E-mail</label>
                  <input
                    type="email"
                    id="joinEmail"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="joinPhone">Telefone</label>
                  <input
                    type="tel"
                    id="joinPhone"
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="position">Cargo de Interesse</label>
                  <select
                    id="position"
                    name="position"
                    className="form-control"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="sales">Vendedor</option>
                    <option value="logistics">Logística</option>
                    <option value="admin">Administrativo</option>
                    <option value="other">Outro</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="resume">Currículo (PDF)</label>
                  <input
                    type="file"
                    id="resume"
                    className="form-control"
                    accept=".pdf"
                    onChange={handleFileChange}
                  />
                </div>
                <button type="submit" className="btn" style={{ width: '100%' }}>
                  ENVIAR CANDIDATURA
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;