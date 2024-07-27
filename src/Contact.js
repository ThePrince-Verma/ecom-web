import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top:3rem;
      

      .contact-form {
        max-width: 40rem;
      
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          
          
          

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d901.5983002269868!2d83.02815416957532!3d25.324583498601825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2ff80e65dd37%3A0x366c5b2dd1e865dc!2sSMAAART%20GRAPHIX%20DESIGNER!5e0!3m2!1sen!2sin!4v1721753738063!5m2!1sen!2sin"
        width="95%"
        height="350"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        
      ></iframe>

      <div className="container">
      <div className="contact-form">
        <form
         action="https://formspree.io/f/xnnajzog" 
         method="POST"
         className="contact-inputs">
        <input type="text" placeholder="username" name="username" required autoComplete="off"  />
        <input type="email" placeholder="Email" name="Email" required  />

        <textarea name="Message" cols="20" rows="6"  required autoComplete="off" placeholder="Enter your message"></textarea>
        <input type="submit" value="send" />
        </form>
      </div>
        
      </div>

    </Wrapper>
  );
};

export default Contact;
