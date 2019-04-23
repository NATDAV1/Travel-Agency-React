import React, { Component } from 'react';

const Contact = () => {
    return (
        <div>
            <section>
                <div className="quienSomos">
                    <div className="quienSomosContent">
                        <h3><u>QUIEN SOMOS</u></h3>
                        <p>GeeksHubs Travels es un agencia de viajes
                            online creada en 2009 por un equipo de viajeros
                            entusiastas que deciden hacer de su
                            pasion por conocer el mundo un modo de
                            vida. Desde nuestros inicios hemos disenado
                            mas de 500 viajes organizados a diferentes
                            destinos de Europa, Norteamerica y Asia.
                            Nuestro objectivo ahora es ir ampliando
                horizontes poco a poco.</p>
                        <button>DESCUBRIR</button>
                    </div>
                </div>
            </section>

            <div className="container-input">

                <div className="row">
                    <div className="column"><img src="/images/map.jpg" /></div>
                    <div className="column">
                        <form action="/action_page.php">
                            <div className="namephone">
                                <div>
                                    <p>E: enquiry@artiotravel.com<br />
                                        P: 0264 123 4567<br /><br />
                                        Give us a call or drop by anytime, we endeavour to answer all<br />
                                        enquiries within 24 hours on business days.<br /><br />
                                        We are open from 8.30 AM - 4.00 PM weekdays.
                                    </p>
                                </div>
                                <input type="text" id="fname" name="firstname" placeholder="Name" />
                                <input type="text" id="phone" name="phone" placeholder="Phone" />
                            </div>
                            <div className="emailcountry">
                                <input type="text" id="email" name="email" placeholder="Email" />
                                <input type="text" id="country" name="country" placeholder="Country" />
                            </div>

                            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                            <input type="sendmsg" value="Send Message" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;