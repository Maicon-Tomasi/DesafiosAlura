import styled from "styled-components";
import { Avatar } from 'antd';

const DivAvatar = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;


const AvatarComponent = () => {
     return(
          <DivAvatar>
          <Avatar src={<img src="https://github.com/Maicon-Tomasi.png" alt="avatar" />} />
          <p style={{ marginLeft: '10px'}}>Maiocn W. S. Tomasi</p>
          </DivAvatar>
     )

}

export default AvatarComponent