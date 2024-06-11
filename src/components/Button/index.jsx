import React from 'react';
import './style.css'

// props - це аналог атрибуту у тега
// з props деструктуризацією дістаємо властивості

const Button = (props) => {
    const { content, number } = props;
    console.log(props);
    return (
        <button className='btn'>
            {content} {number}
        </button>
    );
}

export default Button;
