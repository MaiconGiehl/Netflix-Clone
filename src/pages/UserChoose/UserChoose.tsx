import { Link } from "react-router-dom";
import Title from "../../components/atoms/Title";
import Header from "../../components/molecules/Header";

function UserChoose() {
    return <>
        <Header></Header>
        <div id="who-watch">
            <Title id="who-watch-title">Quem está assistindo?</Title>
            <div id="choose-user">
            <Link to="/catalogo"><img className="who-watch-img" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" /><h1 className="who-watch-name">User3306</h1></Link>
            </div>
        </div>
    </>
}

export default UserChoose;