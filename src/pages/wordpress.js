import React from "react"
import '../../static/css/wordpress.scss'
import ContactForm from "../components/ContactForm/contactForm"
import Footer from "../components/Footer/footer"
import Header from "../components/Header/header"
import SEO from "../components/seo"

const Wordpress = () => {
    return (
        <>
        <Header />
        <SEO title="WordPress Design" description="We are your WordPress expterts! We built beautiful custom WordPress websites. "/>
            <section className="wordpress-hero" >
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="wp-header_text">
                            <h1>
                                Your One-Stop Solution For Beautiful Custom Wordpress Websites.
                            </h1>
                        </div>
                        <div className="wp-link">
                            <a href="#contact-form">Let's Start</a>
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
                            <p>We provide a wide range of services for your website needs, to meet your conversionalgoals.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-md-4 ">
                                <div className="wp-services-container">

                        
                                    <div className="wp-services-bg">
                                        <img src="/images/speed-optimization.svg " alt="Speed Optimization"/>
                                        <h2>Speed Optimization</h2>
                                    </div>
                                </div>
                        
                            </div>
                            <div className="col-md-4">
                                <div className="wp-services-container">
                                    <div className="wp-services-bg">
                                        <img src="/images/woocommerce.svg" alt="WooCommerce"/>
                                        <h2>WooCommerce</h2> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="wp-services-container">
                                    <div className="wp-services-bg">
                                        <img src="/images/api-integration.svg" alt="API Integrations"/>
                                        <h2>API Integrations</h2>   
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="wp-services-bg">
                                    <img src="/images/custom-theme.svg " alt="Custom Theme"/>
                                    <h2>Custom Theme</h2>
                                </div>
                            
                            </div>
                            <div className="col-md-4">
                                <div className="wp-services-bg">
                                    <img src="/images/custom-plugin.svg" alt="Custom Plugins"/>
                                    <h2>Custom Plugins</h2> 
                                </div>
                            
                            </div>
                            <div className="col-md-4">
                                <div className="wp-services-bg">
                                    <img src="/images/monthly-maintenance.svg" alt="Monthly Maintenance"/>
                                    <h2>Monthly Maintenance</h2>  
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center" >
                    <div className="col-lg-10">
                        <div className="services-learn-more">
                            <a href="#contact-form">Let's Start</a>
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
                                <a href="/work/">View All Work</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                     <div className="col-lg-6">
                         <div className="work-services-1">
                             <div className="work-services-img1">
                                 <img src="/images/portfolio-youth-summit.svg" alt="portfolio" className="img-fluid" />
                                 <div className="work-services-title">
                                    <h2>Youth Summit</h2>
                                    <p>UX/UI, Mobile, Front-end, Back-end</p>
                                </div>
                             </div>
                           
                         </div>
                     </div>
                     <div className="col-lg-6">
                         <div className="work-services-2">
                             <div className="work-services-img2">
                                <div className="work-services-images1">
                                <img src="/images/portfolio-chronicle-watechs2.svg" alt="portfolio" className="img-fluid" />
                                </div>
                                <div className="work-services-images2">
                                    <img src="/images/portfolio-chronicle-watechs1.svg" alt="portfolio" className="img-fluid" />
                                </div>        
                             </div>
                             <div className="work-services-title">
                                <h2>Corniche Watches</h2>
                                <p>UX/UI, Front-end, Back-end</p>
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
                            <a href="#contact-form">Let's Start</a>
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
                            <a href="#contact-form">Let's Start</a>
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
                            <a href="#contact-form">Let's Start</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="contact-form" className="wp-privacy-policy">
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="contact-form">
                        <h1>Get in Touch</h1>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    </section>
    <Footer />
</>
    )
}
export default Wordpress