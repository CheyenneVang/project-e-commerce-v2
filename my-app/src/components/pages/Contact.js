import '../styles/contact.css';

function Contact() {
    function formValidation(event) {
        event.preventDefault();
        let email = document.getElementById('email').value;
        if (email === '') {
            alert('Email must not be empty')
            return false;
        }
        console.log('Submitted!');
    }

    return (
        <>
            <h1 className="main-header">Contact Us</h1>
            <section className="form-container">
                <form action="/" className="contact-form" onSubmit={formValidation}>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" className="firstName" placeholder="Enter first name" autoFocus />
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" className="lastName" placeholder="Enter last name" />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" className="email" placeholder="Enter email address" />
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" className="phoneNumber" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="123-456-7890" />
                    <label htmlFor="comment">Comment</label>
                    <textarea id="comment" name="comment" placeholder="Enter your comment"></textarea>
                    <input type="checkbox" name="rm" className="check" />
                    <label className="remember">Remember Me</label>
                    <button type="submit" className="submit">Submit</button>
                </form>
            </section>
        </>
    );
}

export default Contact;