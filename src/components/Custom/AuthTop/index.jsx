import {AvatarComponent, TypographyComponent, BoxComponent, StackComponent, TopComponent} from "../..";
import logo from '../../../assets/logo/logo.png';

const AuthTopComponent = ({title_page, subtitle_page}) => {
    return <BoxComponent>
                <StackComponent alignItems={"center"}>
                    <img 
                        sx={{ width: '18%', height: 'auto', mt: 8 }}
                        src={logo} 
                        alt={'TEAjudo - Comunicação Alternativa e Ampliada'}
                        style={{ width: '30%' , height: 'auto' , position: 'relative', top: '20px' }} 
                        />
                </StackComponent>
                <StackComponent sx={{mt: 4, mb: 4}}>
                    <TypographyComponent variant={'p'} sx={{
                        textAlign: 'center',
                        fontSize: '1.6rem !important'
                    }}>
                        {title_page}
                    </TypographyComponent>
                    <TypographyComponent variant={'p'} sx={{
                        textAlign: 'center',
                        fontSize: '1.1rem !important'
                    }}>
                        {subtitle_page}
                    </TypographyComponent>
                </StackComponent>
            </BoxComponent>
}

export default AuthTopComponent;