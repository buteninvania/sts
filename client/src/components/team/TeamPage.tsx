import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getTeamDataThunk} from "../../redux/team-page";
import {getTeamDataSelector} from "../../redux/team-data-selector";
import Preloader from "../preloader/Preloader";
import t from "./team-list.module.css";

const TeamPage: React.FC = () => {

    const teamId: any = useParams()
    const dispatch = useDispatch()
    const teamData = useSelector(getTeamDataSelector)

    useEffect(() => {
        dispatch(getTeamDataThunk(teamId.teamId))
    }, [])

    if (teamData === null) return <Preloader/>

    return (
        <div>
            <div className={t.teamsPageTitle}>
                {teamData.fullName}
            </div>
            <div>
                Капитан: {teamData.leader}
            </div>
            <div>
                Игроки:
                {teamData.users.map((item, index) => {
                    return <div key={index}>{item}</div>
                })}
            </div>

        </div>
    )
}

export default TeamPage;

