import React from 'react';
import './blog.css';
import { Article } from '../../components/index';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const [genericDate, genericTitle] = ['Sep 26, 2021','GPT-3 and Open  AI is the future. Let us exlore how it is?'];

const Blog = () => {
    return (
        <div className='gpt3__blog section__padding' id='blog'>
            <div className='gpt3__blog-heading'>
                <h1 className='gradient__text'>A lot is happening, <br /> We are blogging about it.</h1>
            </div>
            <div className='gpt3__blog-container'>
                <div className='gpt3__blog-container_groupA'>
                    <Article imageUrl={blog01} date={genericDate} title={genericTitle} />
                </div>
                <div className='gpt3__blog-container_groupB'>
                    <Article imageUrl={blog02} date={genericDate} title={genericTitle} />
                    <Article imageUrl={blog03} date={genericDate} title={genericTitle}/>
                    <Article imageUrl={blog04} date={genericDate} title={genericTitle} />
                    <Article imageUrl={blog05} date={genericDate} title={genericTitle}/>
                </div>
            </div>
        </div>
    );
}

export default Blog;