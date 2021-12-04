import { Container, Title, Box } from "./styles"
import Button from "../Button";
import seta from '../../assets/seta.png'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Menu(props) {

    let location = useLocation();

    const { titleMenu, title, icon, onClick } = props;

    return (

        <Container>

            {location.pathname !== '/' ? (
                <Link to={'/'} style={{ paddingLeft: 13, textDecoration: 'none' }} >
                    <Title style={{ cursor: 'pointer' }}>
                        <Box><img src={seta} alt="Logo" /></Box>
                        {titleMenu}
                    </Title>
                </Link>
            ) : (
                <Title>
                    {titleMenu}
                </Title>
            )}


          {location.pathname === '/' ? (
            <Link to={'/cadastrar'} style={{ paddingLeft: 13, textDecoration: 'none' }} >
                <Button title={title} onClick={onClick} icon={icon} />
            </Link>
          ) : ('')}

        </Container>
    );

}
