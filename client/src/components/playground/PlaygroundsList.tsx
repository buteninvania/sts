import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getPlaygroundsThunk} from "../../redux/playgrounds-page";
import {getPlaygroundsSelector} from "../../redux/playground-data-selector";
import p from "./playground.module.css";
import PlaygroundItem from "./PlaygroundItem";

const PlaygroundsList = () => {

    const playgrounds = useSelector(getPlaygroundsSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPlaygroundsThunk())
    }, [])

    return (
        <div className={p.wrapper}>
            <div className={p.header}>Площадки</div>
            {
                playgrounds.length > 0 &&
                <ul className={p.list}>
                    {playgrounds.map((playground, index) => {
                        return <PlaygroundItem key={index} playground={playground}/>
                    })}
                </ul>
            }
            <NavLink to="/addplayground">Добавить площадку</NavLink>
        </div>
    )
}

export default PlaygroundsList;