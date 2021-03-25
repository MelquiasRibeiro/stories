import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;500;700&display=swap');
*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
}
body{
    -webkit-font-smoothing: antialiased;
}
html,body, #root {
    height:100%;
}
body, input, button {
 font: 14px 'Roboto',sans-serif;
}
button{
    cursor: pointer;
}
a{
    text-decoration:none;
    color:inherit;
}
ul{
    list-style:none;
}
`;
