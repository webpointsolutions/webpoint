import React, { useState } from "react"
// import { createPortal } from 'react-dom'
import '../../static/css/wordpress.scss'

const HtmlComponent = () => {
    return (
        <div>
            <section className="wordpress-hero" >
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="wp-header_text">
                            <p>
                                We build beautify custom WordPress websites.
                            </p>
                        </div>
                        <div className="wp-link">
                            <a href="">Let's Start</a>
                        </div>
                    </div>
                </div>
            </div>
            </section>

        <section className="wp-services">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="services-text">
                            <h2>Services</h2>
                        </div>
                        <div className="services-info-text">
                            <p>We provide a wide range of services to meet 
                                whatever needs you have.</p>
                        </div>
                    
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-md-4 ">
                                <div className="wp-services-container">

                        
                                    <div className="wp-services-bg">
                                        <img src="./static/images/logo-thunder-bolt.svg " alt=""/>
                                        <h2>Speed Optimization</h2>
                                    </div>
                                </div>
                        
                            </div>
                            <div className="col-md-4">
                                <div className="wp-services-container">
                                    <div className="wp-services-bg">
                                        <img src="./static/images/logo-woo-commerce.svg " alt=""/>
                                        <h2>Woo
                                            Commerce</h2> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="wp-services-container">
                                    <div className="wp-services-bg">
                                        <img src="./static/images/logo-api.svg " alt=""/>
                                        <h2>API Integrations</h2>   
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="wp-services-bg">
                                    <img src="./static/images/logo-monitor.svg " alt=""/>
                                    <h2>Custom Theme</h2>
                                </div>
                            
                            </div>
                            <div className="col-md-4">
                                <div className="wp-services-bg">
                                    <img src="./static/images/logo-plugins.svg " alt=""/>
                                    <h2>Custom Plugins</h2> 
                                </div>
                            
                            </div>
                            <div className="col-md-4">
                                <div className="wp-services-bg">
                                    <img src="./static/images/logo-settings.svg " alt=""/>
                                    <h2>Monthly Maintenance</h2>  
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center" >
                    <div className="col-lg-10">
                        <div className="services-learn-more">
                            <a href="">Let's Start</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    <section className="portfolio">
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="portfolio-text">
                                <h1>Portfolio</h1>
                            </div>
                           </div>
                           <div className="col-md-6">
                            <div className="portfolio-link">
                                <a href="">view all work</a>
                            </div>
                           </div>
                    </div>
                    <div className="row">
                     <div className="col-lg-6">
                         <div className="work-services-1">
                             <div className="work-services-img1">
                                 <img src="/static/images/portfolio-youth-summit.svg" alt="portfolio" className="img-fluid" />
                                 <div className="work-services-title">
                                    <h2>Youth Summit</h2>
                                    <p>UX/UI,Mobile,Front-end,Back-end</p>
                                </div>
                             </div>
                           
                         </div>
                     </div>
                     <div className="col-lg-6">
                         <div className="work-services-2">
                             <div className="work-services-img2">
                                <div className="work-services-images1">
                                <img src="/static/images/portfolio-chronicle-watechs2.svg" alt="portfolio" className="img-fluid" />
                                </div>
                                <div className="work-services-images2">
                                    <img src="/static/images/portfolio-chronicle-watechs1.svg" alt="portfolio" className="img-fluid" />
                                   
                                </div>
                               
                                
                             </div>
                             <div className="work-services-title">
                                <h2>Corniche Watches</h2>
                                <p>UX/UI,Front-end,Back-end</p>
                            </div>
                         </div>
                     </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="wp-maintance">
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg-6 d-flex">
                    <div className="wp-maintainance-info">
                     <h2>WordPress Maintainance</h2>
                     <p>Comprehensive Wordpress Maintainance Service</p>
                    </div>
                </div>
                 <div className="col-lg-4 d-flex">
                    <div className="wp-maintainance-bill-switch">
                        <div className="wp-bill-switch-container">
                            <h3>Billed Yearly</h3>
                       
                          
                            <label className="switch">
                              <input type="checkbox" checked />
                              <span className="slider rounded"></span>
                            </label>
                          <h3 className="active">Billed Monthly</h3>
                        </div>
                        
                    </div>
                </div>    
            </div>
        </div>
        <div className="package-wrapper-container">

        
            <div className="row justify-content-start">
               
                <div className="col-lg-4 col-xl-4 ">
                    <div className="package-wrapper">
                        <div className="package-info-title">
                            <h2>Basic</h2>
                            <div className="package-info-title-price">
                                <h3>$50</h3><h4>/month</h4>
                            </div>
                          
                        </div>
                        <div className="package-info-points">
                            <ul>
                                <li>Minim mollit non</li>
                                <li>Deserunt ullamco est</li>
                                <li>Sit aliqua dolor do amet sint.
                                    Velit officia cons equat duis enim velit mollit
                                </li>
                            </ul>
                        </div>
                        <div className="package-info-btn">
                            <a href="">Let's Start</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-xl-4">
                    <div className="package-wrapper">
                        <div className="package-info-title">
                            <h2>Advance</h2>
                            <div className="package-info-title-price">
                                <h3>$50</h3><h4>/month</h4>
                            </div>
                        </div>
                        <div className="package-info-points">
                            <ul>
                                <li>Minim mollit non</li>
                                <li>Deserunt ullamco est</li>
                                <li>Sit aliqua dolor do amet sint.
                                    Velit officia cons equat duis enim velit mollit
                                </li>
                            </ul>
                        </div>
                        <div className="package-info-btn">
                            <a href="#">Let's Start</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-xl-4">
                    <div className="package-wrapper">
                        <div className="package-info-title">
                            <h2>E-commerce</h2>
                            <div className="package-info-title-price">
                                <h3>$50</h3><h4>/month</h4>
                            </div>
                        </div>
                        <div className="package-info-points">
                            <ul>
                                <li>Minim mollit non</li>
                                <li>Deserunt ullamco est</li>
                                <li>Sit aliqua dolor do amet sint.
                                    Velit officia cons equat duis enim velit mollit
                                </li>
                            </ul>
                        </div>
                        <div className="package-info-btn">
                            <a href="">Let's Start</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="wp-privacy-policy">
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="contact-form">
                        <h1>Drop us a line</h1>
                    </div>
                </div>
        
            </div>
         

            
            <div className="row justify-content-center">
                
                <div className="wp-input-wrapper col-md-5 col-sm-12">
                 <div className="wp-input-container">
                    <input placeholder="Name" type="text" name="name"/>
                    <input id="email" name="email" type="email" maxlength="50" required="" placeholder="Email" />
                  
                    <div className="wp-input-textarea ">
                        <textarea name="message" rows="1" cols="30" required="" placeholder="Tell us about your project"></textarea>
                        
                </div>
                 </div>
                </div>
                

               
                <div className="wp-contact-bottom col-md-5 col-sm-12" >
                    <p>or just write to us</p>
                    <div className="sales-webpoint">
                        <a href="mailto:sales@webpoint.io">sales@webpoint.io</a>
                    </div>
                 
                </div>
           
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-10 col-md-10">
            <div className="round-radio">
                
                <label for="radioid" className="radio">
                    <input type="radio" id="radioid" required="" className="radio__input" />
               
                    <div className="radio__radio"></div>
                     I have read and agree with 
                    <a href="/privacy-policy">Privacy Policy.</a>
                </label>
               
            </div>
            <button>Send It</button>
        </div>
        </div>
    
</div>
    </section>
</div>
    )
}
export default (props) => {
    const [contentRef, setContentRef] = useState(null)
    const mountNode =
        contentRef?.contentWindow?.document?.body
    const parseHtml = html => new DOMParser().parseFromString(html, 'text/html').body.innerText;
    return (
        <HtmlComponent />
    )
}