import styled from "styled-components";

export const PostCard = styled.div`
  padding: 16px 24px;
  margin-top: 20px;
  border-radius: 5px;
  border: 3px solid #c7f464;
`;
export const PostTitle = styled.h2`
  color: #4ecdc4;
  font-size: 30px;
`;
export const PostBody = styled.p`
  color: #c44d58;
  font-size: 20px;
`;
export const DeleteButton = styled.button`
position: relative;
display: inline-block;
width: 10em;
height: 2.5em;
line-height: 2.5em;
vertical-align: middle;
text-align: center;
text-decoration: none;
text-shadow: 0 -1px 1px #777;
color: #fff;
outline: none;
border: 2px solid #f64c2b;
border-radius: 5px;
box-shadow: 0 0 0 60px rgba(0, 0, 0, 0) inset, 0.1em 0.1em 0.2em #800;
background: linear-gradient(#fb9575, #f45a38 48%, #ea1502 52%, #f02f17);
:active {
  top: .1em;
  left: .1em;
  box-shadow: 0 0 0 60px rgba(0,0,0,.05) inset;
`;
export const OpenPost = styled.button`
  margin-left: 20px;
  position: relative;
  display: inline-block;
  width: 10em;
  height: 2.5em;
  line-height: 2.5em;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  text-shadow: 0 -1px 1px #777;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 5px;
  box-shadow: inset #72de26 0 -1px 1px, inset 0 1px 1px #98ff98,
    #3caa3c 0 0 0 1px, rgba(0, 0, 0, 0.3) 0 2px 5px;
  background: #0c9c0d linear-gradient(#82d18d, #0c9c0d);
  :active {
    top: 0.1em;
    left: 0.1em;
    box-shadow: 0 0 0 60px rgba(0, 0, 0, 0.05) inset;
  }

  :active {
    top: 1px;
    color: #fff;
    text-shadow: 0 -1px rgba(0, 0, 0, 0.3), 0 0 5px #ffd, 0 0 8px #fff;
    box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.3), 0 1px 1px #fff,
      inset 0 1px 2px rgba(0, 0, 0, 0.8), inset 0 -1px 0 rgba(0, 0, 0, 0.05);
  }
`;
export const HeadMenu = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
  justify-content: space-between;
`;
export const HeaderBar = styled.nav`
  width: 100%;
  background-color: #556270;
  display: flex;
  align-items: center;
  height: 80px;
`;
export const HeadMenuLink = styled.a`
  text-decoration: none;
  transition: 0.3s;
  font-size: 30px;
  padding: 8px 16px;
  :hover {
    color: #c7f464;
    background-color: #4ecdc4;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 15px;
  }
`;
