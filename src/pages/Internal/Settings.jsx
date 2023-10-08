import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout, verifyLogin } from "../../utils/auth";
import { ButtonComponent, AuthTopComponent } from "../../components";

const Settings = ({ setCurrentPath, loggoutRoutes, firebaseApp }) => {
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentPath(window.location.pathname)
        verifyLogin(loggoutRoutes, window.location.pathname, navigate, firebaseApp)
    }, [])

    return (
    <>
        <AuthTopComponent title_page={'Logout'} subtitle_page={'Clique no botão abaixo para sair com a sua conta do aplicativo'}/>
        <ButtonComponent size="large" label="Sair" onClick={() => logout(firebaseApp, navigate)}/>
    </>
    )
}

export default Settings;