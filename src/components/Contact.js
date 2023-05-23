function Contact() {
    return (
        <div className="main-container">
            <h2>Contact</h2>
            <form>
                <label>
                    Name: <br></br>
                    <input type="text" name="name" />
                </label> <br></br>
                <label>
                    Email: <br></br>
                    <input type="text" name="name" />
                </label> <br></br>
                <label>
                    Message: <br></br>
                    <input type="text" name="name" />
                </label> <br></br>
                <input type="submit" value="Submit" id="btn"/>
            </form>
        </div>
    )
}

export default Contact;