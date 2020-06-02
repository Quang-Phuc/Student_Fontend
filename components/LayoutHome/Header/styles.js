import styled from 'styled-components';

const AvatarWrap = styled.span`
  img{
    width: 30px;
    height: 30px
    border-radius: 100%;
    margin-right: 10px;
  }
`;

const LabelDiv = styled.label`
  color: #676a6c;
  font-size: 14px
`;

const UserNameWrap = styled.span`
      cursor: pointer;
`;

const MenuItemWrap = styled.span`
  cursor: pointer;
  font-size: 14px
`;


export { AvatarWrap, LabelDiv, UserNameWrap, MenuItemWrap };
