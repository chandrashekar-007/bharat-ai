import React from 'react'
import './Section6.css'
import '../Global.css'
import { useState } from 'react'
import terminology from '../../assets/terminology.jpg'
import content from '../../assets/content.jpg'
import content2 from '../../assets/content2.jpg'
import docs from '../../assets/docs.jpg'
import filters from '../../assets/filters.jpg'
import group from '../../assets/group.jpg'
import hierarchy from '../../assets/hierarchy.jpg'
import kanban from '../../assets/kanban-left.jpg'
import list from '../../assets/list.jpg'
import properties from '../../assets/properties.jpg'
import properties2 from '../../assets/properties-2.jpg'
import swimlanes from '../../assets/swimlanes.jpg'
import workflows from '../../assets/workflows.jpg'

const Section6 = () => {
    const [activeTerm, setActiveTerm] = useState('Terminology');
    const [activeTerm2, setActiveTerm2] = useState('Doc types');
    const handleTermClick = (term) => {
        setActiveTerm(term);
    };
    const handleTerm2Click = (term2) => {
        setActiveTerm2(term2);
    };

    return (
        <>
            <section className="section-6">
                <div className="divTag container6">
                    <div className="divTag section-title6">
                        <h2 className='title-2'>Make it infinitely yours</h2>
                        <div className="divTag tagline ch-6">
                            Your way of working shouldn't depend on your tools, you can set up Cycle
                            to match your unique needs.
                        </div>
                    </div>
                    <div className="divTag col-wrapper">
                        <div className="divTag w-layout-grid6 ">
                            <div className='divTag para-wrapper'>
                                <h3 className="title-3">Customize your data model</h3>
                                <p className='para'>
                                    
                                    Cycle's atomic unit is a natively collaborative doc. Docs are
                                    organized into doc types, which you can customize without limits.
                                    For each doc type, define your own{" "}
                                    <a
                                        
                                        className={`anc paratag ${activeTerm === 'Terminology' ? 'is-active' : ''}`}
                                        onClick={() => handleTermClick('Terminology')}
                                    >
                                        Terminology
                                    </a>
                                    ,{" "}
                                    <a
                                        
                                        className={`anc paratag ${activeTerm === 'Properties' ? 'is-active' : ''}`}
                                        onClick={() => handleTermClick('Properties')}
                                    >
                                        Properties
                                    </a>
                                    ,{" "}
                                    <a
                                        
                                        className={`anc paratag ${activeTerm === 'Hierarchy rules' ? 'is-active' : ''}`}
                                        onClick={() => handleTermClick('Hierarchy rules')}
                                    >
                                        Hierarchy rules
                                    </a>
                                    ,{" "}
                                    <a
                                        
                                        className={`anc paratag ${activeTerm === 'Workflows' ? 'is-active' : ''}`}
                                        onClick={() => handleTermClick('Workflows')}
                                    >
                                        Workflows
                                    </a>
                                    , and{" "}
                                    <a
                                        
                                        className={`anc paratag ${activeTerm === 'Content templates' ? 'is-active' : ''}`}
                                        onClick={() => handleTermClick('Content templates')}
                                    >
                                        Content templates
                                    </a>
                                    . Doc types can be seen as flexible databases with shared
                                    properties, hierarchical relationships, and integrated workflows.
                                </p>
                            </div>
                            <div
                                id="dataModelImages"
                                className="divTag custom-visuals"
                            >
                                <div className={`custom-visual divTag  ${activeTerm === 'Terminology' ? 'is-active' : ''}`}>
                                    <img
                                        src={terminology}
                                        alt="A visual of Cycle where the user defines terminology"
                                        className="custom-visual-image infImg"
                                    />
                                </div>
                                <div className={`custom-visual divTag ${activeTerm === 'Properties' ? 'is-active' : ''}`}>
                                    <img
                                        src={properties}
                                        alt="A visual of Cycle where the user defines property"
                                        className="infImg custom-visual-image is-propeties-bot"
                                    />
                                    <img
                                        src={properties2}
                                        alt="A visual of Cycle where the user defines property"
                                        className="infImg custom-visual-image is-properties-top"
                                    />
                                </div>
                                <div className={`divTag custom-visual ${activeTerm === 'Hierarchy rules' ? 'is-active' : ''}`}>
                                    <img
                                        src={hierarchy}
                                        alt="A visual of Cycle where the user defines hierarchy"
                                        className="infImg custom-visual-image"
                                    />
                                </div>
                                <div className={`divTag custom-visual ${activeTerm === 'Workflows' ? 'is-active' : ''}`}>
                                    <img
                                        src={workflows}
                                        alt="A visual of Cycle where the user defines workflows"
                                        className="infImg custom-visual-image"
                                    />
                                </div>
                                <div className={`divTag custom-visual ${activeTerm === 'Content templates' ? 'is-active' : ''}`}>
                                    <img
                                        src={content}
                                        alt="A visual of Cycle where the user defines content"
                                        className="infImg custom-visual-image is-content-bot"
                                    />
                                    <img
                                        src={content2}
                                        alt="A visual of Cycle where the user defines content"
                                        className="infImg custom-visual-image is-content-top"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="divTag w-layout-grid6">
                            <div id="para-wrap" className='divTag '>
                                <h3 className="title-3">Create your own views</h3>
                                <p className='para'>
                                    Create filtered views of your Cycle docs with a set of powerful
                                    building blocks:{" "}
                                    <a
                                        
                                        className={`anc paratag ${activeTerm2 === 'Doc types' ? 'is-active' : ''}`}
                                        onClick={() => handleTerm2Click('Doc types')}
                                    >
                                        Doc types
                                    </a>
                                    ,{" "}
                                    <a
                                        
                                        className={`anc paratag ${activeTerm2 === 'Kanban boards' ? 'is-active' : ''}`}
                                        onClick={() => handleTerm2Click('Kanban boards')}
                                    >
                                        Kanban boards
                                    </a>
                                    ,{" "}
                                    <a
                                        
                                        className={`anc paratag ${activeTerm2 === 'Lists' ? 'is-active' : ''}`}
                                        onClick={() => handleTerm2Click('Lists')}
                                    >
                                        Lists
                                    </a>
                                    ,{" "}
                                    <a
                                        
                                        className={`anc paratag ${activeTerm2 === 'Groups' ? 'is-active' : ''}`}
                                        onClick={() => handleTerm2Click('Groups')}
                                    >
                                        Groups
                                    </a>
                                    ,{" "}
                                    <a
                                        
                                        className={`anc paratag ${activeTerm2 === 'Swimlanes' ? 'is-active' : ''}`}
                                        onClick={() => handleTerm2Click('Swimlanes')}
                                    >
                                        Swimlanes
                                    </a>
                                    , and{" "}
                                    <a
                                        
                                        className={`anc paratag ${activeTerm2 === 'Filters' ? 'is-active' : ''}`}
                                        onClick={() => handleTerm2Click('Filters')}
                                    >
                                        Filters
                                    </a>
                                    . You can iterate on your processes by simply adding and editing
                                    these blocks.
                                </p>
                            </div>
                            <div
                                id="ownViewsImages"
                                className="divTag custom-visual6"
                            >
                                <div className={`divTag custom-visual ${activeTerm2 === 'Doc types' ? 'is-active' : ''}`}>
                                    <img
                                        src={docs}
                                        alt="A visual of Cycle where the user creates docs"
                                        className="infImg custom-visual-image is-tall"
                                        id="tall"
                                    />
                                </div>
                                <div className={`divTag custom-visual ${activeTerm2 === 'Kanban boards' ? 'is-active' : ''}`}>
                                    <img
                                        src={kanban}
                                        alt="A visual of Cycle where the user creates kanban"
                                        className="infImg custom-visual-image is-kanban"
                                    />
                                    <img
                                        src={kanban}
                                        alt="A visual of Cycle where the user creates kanban"
                                        className="infImg custom-visual-image is-kanban is-right"
                                    />
                                </div>
                                <div className={`divTag custom-visual ${activeTerm2 === 'Lists' ? 'is-active' : ''}`}>
                                    <img
                                        src={list}
                                        alt="A visual of Cycle where the user creates lists"
                                        className="infImg custom-visual-image"
                                    />
                                </div>
                                <div className={`divTag custom-visual ${activeTerm2 === 'Groups' ? 'is-active' : ''}`}>
                                    <img
                                        src={group}
                                        alt="A visual of Cycle where the user creates groups"
                                        className="infImg custom-visual-image is-square"
                                    />
                                </div>
                                <div className={`divTag custom-visual ${activeTerm2 === 'Swimlanes' ? 'is-active' : ''}`}>
                                    <img
                                        src={swimlanes}
                                        alt="A visual of Cycle where the user creates swimlanes"
                                        className="infImg custom-visual-image is-square"
                                    />
                                </div>
                                <div className={`divTag custom-visual ${activeTerm2 === 'Filters' ? 'is-active' : ''}`}>
                                    <img
                                        src={filters}
                                        alt="A visual of Cycle where the user creates filters"
                                        className="infImg custom-visual-image is-square"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Section6