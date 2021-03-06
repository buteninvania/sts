import React from "react";
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUserName} from "../../redux/user-data-selector";
import {authActions} from "../../redux/user-data-page";
import h from "./header.module.css";

type HeaderPropsType = {

}

type paramsType = {
    name: string | undefined
}

const Header:React.FC<HeaderPropsType> = ({}) => {

    const dispatch = useDispatch()

    const logoutButtonHandler = () => {
        localStorage.removeItem('token')
        dispatch(authActions.logout())
    }
    const userName = useSelector(getUserName)

    console.log('Header')

    return (
        <div  className={h.header} >
            {userName !== undefined ? null : <NavLink activeClassName={h.active} to="/register">Регистрация</NavLink>}
            {userName !== undefined && <NavLink activeClassName={h.active} to="/home">Домой</NavLink>}
            <NavLink activeClassName={h.active} to="/playground">Площадки</NavLink>
            <NavLink activeClassName={h.active} to="/team">Команды</NavLink>
            <NavLink activeClassName={h.active} to="/players">Игроки</NavLink>
            {(userName === "admin") ? <NavLink activeClassName={h.active} to="/adminevent">Мои события</NavLink> : null}
            {(userName !== undefined) ? <div className={h.login}> {userName}</div> : null}
            {(userName !== undefined) ? <button className={h.button} onClick={logoutButtonHandler}>Выйти</button> : <NavLink to="/register">LOGIN</NavLink>}
        </div>
    )
}

export default Header;



