import React from 'react';

const Blog = () => {
    return (
        <div className='container py-5'>
            <h1 className='py-2'>What is Context API?</h1>
            <h6>Context API is an Amazing thing of React to passing data to the child element. Its is a shorest way to passing data from parent element to children of children Element.With the context API, the hassle of passing data through each element by the props can be avoided.</h6>
            <h1 className='py-2'>What is Semantic tag?</h1>
            <h6>Semantic tags are More clearly name of other tag name. for knowing about a element Its is easy to understand by the semantic tags name. Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page.
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