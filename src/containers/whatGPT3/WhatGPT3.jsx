import React from 'react';
import './whatgpt3.css';
import Feature from '../../components/feature/Feature'

const [title1, text1, title2, text2, title3, text3, title4, text4] =
    [
        'What is GPT-3',
        'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.',
        'Chatbots',
        'We so opinion friends me message as delight. Whole front do of plate heard oh ought.',
        'Knowledgebase',
        'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b',
        'Education',
        'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b',
    ];

const WhatGPT3 = () => {
    return (
        <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
            <div className='gpt3__whatgpt3-feature'>
                <Feature title={title1} text={text1} />
            </div>
            <div className='gpt3__whatgpt3-heading'>
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className='gpt3__whatgpt3-container'>
                <Feature title={title2} text={text2} />
                <Feature title={title3} text={text3} />
                <Feature title={title4} text={text4} />
            </div>
        </div>
    );
}

export default WhatGPT3;