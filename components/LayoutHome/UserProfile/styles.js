import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';


const ButtonUpdate = styled.button`
  margin-top: 20px;
`;

const style1 = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#505050',
    textAlign: "left",
    paddingLeft: '80px',
    marginBottom: '15px'
}

var style2 = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#505050',
    textAlign: "left",
    paddingLeft: '10px',
    marginBottom: '15px'
}

var styleLine = {
    display: 'flex',
    height: '8px',
    marginBottom: '40px',
    marginLeft: '80px'
}

var styleLine2 = {
    display: 'flex',
    height: '8px',
    marginBottom: '40px',
    marginLeft: '10px'
}

var lineLeft = {
    backgroundColor: '#ff8e33',
    flexBasis: '30%'
}

var lineRight = {
    backgroundColor: '#f1f1f1',
    flexBasis: '70%'
}


const TabText = styled.a`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  color: #505050;
`;

const DocumentInput = styled.input`
  height: 40px
`;

const FormControl = styled.div`
  margin-bottom: 15px
`;

var inputHeight = {
    height: '40px'
}

export { ButtonUpdate, style1, style2, styleLine, styleLine2, lineLeft, lineRight, TabText, DocumentInput, FormControl, inputHeight };
