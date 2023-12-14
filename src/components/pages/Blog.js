import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkIcon from '@mui/icons-material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import physics from '../../assets/physics.jpg';
import profile from '../../assets/profile.jpg';
import Footer from '../shared/Footer';
import Header from '../shared/Navbar';

const linkData = [
    {
        title: "Can a designer sustainably",
        sub_title: "Designers reduce waste making products recyclable. Even better endlessly reusable...",
        path: "/blog/1",
    },
    
    {
        title: "Practice tips for effective networking",
        sub_title: "Ask open-ended questions that facilitate conversation. That networking is about building...",
        path: "/blog/1",
    },
    {
        title: "Markdown Language",
        sub_title: "Markdown is an easy-to-use markup language that is used with plain text to add formatting elements...",
        path: "/blog/1",
    },
    {
        title: "Markdown Language Sample Blog Post Styling",
        sub_title: "The information at the top of the file, inside the code fences, is called frontmatter...",
        path: "/blog/1",
    },
    {
        title: "Explain the importance of networking",
        sub_title: "The network is considered one of the most critical...",
        path: "/blog/1",
    },
    
]

function Blog() {
    const localAuth = localStorage?.getItem('auth');
    const { user } = JSON.parse(localAuth);


    return (
        <Fragment>
            <Header />
            <section className='container_ mt-5 pt-5'>
                <div className='blog_title'>
                    <h1>Astrophysicists Capture New Class Of Transient Objects</h1>
                    <ul className='list_publisher'>
                        <li className='li-1'> By <Link to=''> John Doe</Link> </li>
                        <li> Published in  <Link to=''> Physics & Mathematics</Link> </li>
                        <li> April 16, 2020  </li>
                    </ul>
                </div>
                <div className='row'>
                    <div className='col-sm-12 col-md-8 col-lg-9'>
                        <img className='physics_img' src={physics} />

                        <div className='table_contents_'>
                            <h3>Table Of Contents</h3>
                        </div>

                        <div className='oi_list'>
                            <ol>
                                <li>Dona curvo sub evertere quam ultimus aridus</li>
                                <li>Populandas preces</li>
                                <li>Inexorabile saevo sucis certus Phorbas Aeson nec</li>
                                <li>Cum et sine</li>
                                <li>Natus per nec exire visa Iphis</li>
                            </ol>
                        </div>

                        <div className='content_'>
                            <div className='mb-4'>
                                <Link to="/" className='title_link'>
                                    Dona curvo sub evertere quam ultimus aridus <LinkIcon className='link_icon' />
                                </Link>
                                <p>
                                    <Link to="/" className="short_link"> Lorem markdownum</Link>, sub tecumque, posceret revertar latuisse fragosis, praestantia.
                                    Insidiosa lacunabant Remulusque elisi, cur regaliter nondum talia <span className="font-700">inquit</span> quoque plaustra Iapygis bene regia honor raptaeque fortissimus nostro ungues.
                                </p>
                            </div>

                            <div className='mb-4'>
                                <Link to="/" className='title_link'>
                                    Natus per nec exire visa Iphis<LinkIcon className='link_icon' />
                                </Link>
                                <p>
                                    Relecto satis nec ut, et locis in imperio conplexa, rude genus. Parenti si adsensit contemptuque vicit.
                                    Pone pro, <span className="font-700">Victoria</span> nulloque decidere transit, <span className="font-700">Buten</span>  lecto atro commissa?
                                </p>

                                <ul>
                                    <li>Me cumque forsitans</li>
                                    <li>Vivacisque hos reus</li>
                                    <li>Exit salva pertimuit damni</li>
                                    <li>Redeunt inpediique ab paulatim Penthea fidem</li>
                                    <li>Sit rogus adicit illa mole taloque pelle</li>
                                    <li>Inducta Iovis iubet spectabat</li>
                                </ul>

                                <p>Subiungit stipe in secunda, cum et non materno, est arma locis exhalat? O nec subiere curia  tamen Proteus rutilasque somni arbore, fecisse ille. Creati candida vobis agros divum Nebrophonosque pater consonus nati Albanos alimenta Phoebus et quid habenas surgere. Potentem inania agam prius semper consurgere  liber multorumque dempto.</p>
                            </div>

                            <div className='mb-4'>
                                <Link to="/" className='title_link'>
                                    Populandas preces<LinkIcon className='link_icon' />
                                </Link>
                                <p>
                                    Deriguere iam numero in gemino Thebas flumina Aegeus, ut ille sanctius mutatus citharae, nomine.
                                    Incoegerat artes nec umbras nec reticere aureus <span className="font-700">gerens</span>, vallibus namque!
                                </p>

                                <div className='note_'>
                                    <p>Leni vacuus: non sociorum et aperto onerosus extrema Pagasaea tempore gemunt et facta posset. Caecum tauros, ferrataque Ulixis pharetratae aquarum Plura cum sua invitaque qui verba rerum Romanique Tethyn interit ungues trahens illi.Capiti Pharsalia pectora Amycus coniuge illa. Aestus malas pollice viderunt, tinguitur, vela locum ius  muros mox longa. Propiore montibus luctus sub. Aut tamen conplet peto necat in sunto.</p>
                                </div>

                                <p>
                                    Subiungit stipe in secunda, cum et non materno, est arma locis exhalat? O nec subiere curia  tamen Proteus rutilasque somni arbore, fecisse ille.
                                    Creati candida vobis agros divum <span   className="font-700">Nebrophonosque</span> pater consonus nati Albanos <span className="font-700">alimenta</span> Phoebus et quid habenas surgere.
                                    Potentem inania agam prius semper  <span className="font-700">consurgere</span>  liber multorumque dempto.
                                </p>
                            </div>

                        </div>

                    </div>
                    <div className='col-sm-12 col-md-4 col-lg-3 text-left  '>
                       <div className='col-fixed'>
                       <div className='profile_ '>
                           <img className='profile_img' src={profile} />
                           <h5>{user?.displayName}</h5>
                           <p>{user?.email}</p>
                           <div className='icon_box'>
                              <a href=''><FacebookIcon/> </a>
                              <a href=''><TwitterIcon/> </a>
                              <a href=''><LinkedInIcon/> </a> 
                           </div>
                        </div>
                        <div className='catagory_'>
                        {linkData?.map((data, index) => ( 
                                <Link className='blog_link' key={index} to={data.path}>
                                    <h6>{data.title}</h6>
                                    <div className='sub_box'>
                                        <p>{data.sub_title}</p>
                                        <ArrowForwardIosIcon />
                                    </div>
                                </Link> 
                        ))}
                         </div>
                       </div>
                    </div>

                </div>

            </section>

            <Footer/>

        </Fragment>
    )
}

export default Blog
