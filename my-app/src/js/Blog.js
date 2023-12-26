import React from "react";

const Blog = () => {
    const posts = [
        {id:1, title:'첫 블로그', content:'블로그입니다.'},
        {id:2, title:'2번 게시물', content:'내용없음'}
    ];
    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
                
            ))}
        </div>
    )
}

export default Blog;
