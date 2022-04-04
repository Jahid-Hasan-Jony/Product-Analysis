import React from 'react';

const Blog = () => {
    return (
        <div className='container py-5'>
            <h1 className='py-2'>What is Context API?</h1>
            <h6>Context API is an Amazing thing of React to passing data to the child element.<br></br>Its is a shorest way to passing data from parent element to children of children Element.<br></br>With the context API, the hassle of passing data through.<br></br>Context is primarily used when some data needs to be accessible by many components at different nesting levels.<br></br>Apply it sparingly because it makes component reuse more difficult. each element by the props can be avoided.</h6>
            <h1 className='py-2'>What is Semantic tag?</h1>
            <h6>Semantic tags are More clearly name of other tag name. for knowing about a element Its is easy to understand by the semantic tags name. Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page.In programming, Semantics refers to the meaning of a piece of code — for example "what effect does running that line of JavaScript have?", or "what purpose or role does that HTML element have".
            </h6>
            <p>Here is some Semantic Tag name -</p>
            <ul>
                <li>article</li>
                <li>details</li>
                <li>article</li>
                <li>main</li>
                <li>header</li>
                <li>nav</li>
            </ul>
        </div>
    );
};

export default Blog;